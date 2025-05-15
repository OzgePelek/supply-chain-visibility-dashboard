<?php
// Hata raporlama
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Veritabanı bağlantısı
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "supply_chain";

// Veritabanı bağlantısı oluştur
$conn = new mysqli($servername, $username, $password, $dbname);

// Bağlantı hatasını kontrol et
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

// POST işlemleri
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // POST verilerini al
    $action = isset($_POST['action']) ? $_POST['action'] : '';
    $productId = isset($_POST['Product_ID']) ? trim($_POST['Product_ID']) : null;

    // Product ID kontrolü
    if ($action === 'delete' && empty($productId)) {
        die(json_encode(["status" => "error", "message" => "Product ID is required for deletion."]));
    }

    // Silme işlemi
    if ($action === 'delete') {
        $sql = "DELETE FROM `product_resource_utilization` WHERE `Product ID` = ?";
        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            die(json_encode(["status" => "error", "message" => "SQL error: " . $conn->error]));
        }

        $stmt->bind_param("s", $productId);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Data successfully deleted."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to execute delete query: " . $stmt->error]);
        }
        $stmt->close();
    }

    // Ekleme işlemi
    elseif ($action === 'add') {
        $capacityUtilization = isset($_POST['Capacity_Utilization']) ? floatval($_POST['Capacity_Utilization']) : null;
        $ecoMaterialsUse = isset($_POST['Eco_Materials_Use']) ? floatval($_POST['Eco_Materials_Use']) : null;
        $rareProductsReduction = isset($_POST['Rare_Products_Reduction']) ? floatval($_POST['Rare_Products_Reduction']) : null;
        $wasteReuse = isset($_POST['Waste_Reuse']) ? floatval($_POST['Waste_Reuse']) : null;
        $recyclablePackagingUse = isset($_POST['Recyclable_Packaging_Use']) ? floatval($_POST['Recyclable_Packaging_Use']) : null;

        $sql = "INSERT INTO `product_resource_utilization` 
                (`Product ID`, `Capacity Utilization`, `Eco Materials Use`, `Rare Products Reduction`, `Waste Reuse`, `Recyclable Packaging Use`) 
                VALUES (?, ?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE 
                `Capacity Utilization` = VALUES(`Capacity Utilization`),
                `Eco Materials Use` = VALUES(`Eco Materials Use`),
                `Rare Products Reduction` = VALUES(`Rare Products Reduction`),
                `Waste Reuse` = VALUES(`Waste Reuse`),
                `Recyclable Packaging Use` = VALUES(`Recyclable Packaging Use`)";

        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            die(json_encode(["status" => "error", "message" => "SQL error: " . $conn->error]));
        }

        $stmt->bind_param("sddddd", $productId, $capacityUtilization, $ecoMaterialsUse, $rareProductsReduction, $wasteReuse, $recyclablePackagingUse);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Data successfully added/updated."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to execute query: " . $stmt->error]);
        }
        $stmt->close();
    }

    // Güncelleme işlemi
    elseif ($action === 'update') {
        $capacityUtilization = isset($_POST['Capacity_Utilization']) ? floatval($_POST['Capacity_Utilization']) : null;
        $ecoMaterialsUse = isset($_POST['Eco_Materials_Use']) ? floatval($_POST['Eco_Materials_Use']) : null;
        $rareProductsReduction = isset($_POST['Rare_Products_Reduction']) ? floatval($_POST['Rare_Products_Reduction']) : null;
        $wasteReuse = isset($_POST['Waste_Reuse']) ? floatval($_POST['Waste_Reuse']) : null;
        $recyclablePackagingUse = isset($_POST['Recyclable_Packaging_Use']) ? floatval($_POST['Recyclable_Packaging_Use']) : null;

        $sql = "UPDATE `product_resource_utilization` SET 
                    `Capacity Utilization` = IFNULL(?, `Capacity Utilization`),
                    `Eco Materials Use` = IFNULL(?, `Eco Materials Use`),
                    `Rare Products Reduction` = IFNULL(?, `Rare Products Reduction`),
                    `Waste Reuse` = IFNULL(?, `Waste Reuse`),
                    `Recyclable Packaging Use` = IFNULL(?, `Recyclable Packaging Use`)
                WHERE `Product ID` = ?";

        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            die(json_encode(["status" => "error", "message" => "SQL error: " . $conn->error]));
        }

        $stmt->bind_param("ddddds", $capacityUtilization, $ecoMaterialsUse, $rareProductsReduction, $wasteReuse, $recyclablePackagingUse, $productId);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Data successfully updated."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to execute update query: " . $stmt->error]);
        }
        $stmt->close();
    }

    // Geçersiz işlem
    else {
        echo json_encode(["status" => "error", "message" => "Invalid action."]);
    }
}

// GET işlemleri (veri listeleme)
else {
    $sql = "SELECT * FROM `product_resource_utilization`";
    $result = $conn->query($sql);

    $data = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    header('Content-Type: application/json');
    echo json_encode(["status" => "success", "data" => $data]);
}

$conn->close();
?>
