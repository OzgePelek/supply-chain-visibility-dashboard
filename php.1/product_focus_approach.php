<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Veritabanı bilgileri
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "supply_chain";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Veritabanı bağlantısı
$conn = new mysqli($servername, $username, $password, $dbname);

// Bağlantı kontrolü
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // POST işlemleri
    $action = isset($_POST['action']) ? $_POST['action'] : '';
    $productId = isset($_POST['Product_ID']) ? $_POST['Product_ID'] : null;
    $productGroup = isset($_POST['Product_Group']) ? $_POST['Product_Group'] : null;
    $totalProduct = isset($_POST['Total_Product']) ? intval($_POST['Total_Product']) : null;
    $totalWaste = isset($_POST['Total_Waste']) ? intval($_POST['Total_Waste']) : null;
    $salesEstimation = isset($_POST['Sales_Estimation']) ? intval($_POST['Sales_Estimation']) : null;
    $actualSales = isset($_POST['Actual_Sales']) ? intval($_POST['Actual_Sales']) : null;
    $secondQualityCount = isset($_POST['Second_Quality_Count']) ? intval($_POST['Second_Quality_Count']) : null;
    $producedMeter = isset($_POST['Produced_Meter']) ? intval($_POST['Produced_Meter']) : null;
    $plannedMeter = isset($_POST['Planned_Meter']) ? intval($_POST['Planned_Meter']) : null;

    if ($action === 'add') {
        // Veri ekleme işlemi
        $sql = "INSERT INTO product_focus_approach 
                (Product_ID, Product_Group, Total_Product, Total_Waste, Sales_Estimation, Actual_Sales, Second_Quality_Count, Produced_Meter, Planned_Meter)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                Product_Group = VALUES(Product_Group),
                Total_Product = VALUES(Total_Product),
                Total_Waste = VALUES(Total_Waste),
                Sales_Estimation = VALUES(Sales_Estimation),
                Actual_Sales = VALUES(Actual_Sales),
                Second_Quality_Count = VALUES(Second_Quality_Count),
                Produced_Meter = VALUES(Produced_Meter),
                Planned_Meter = VALUES(Planned_Meter)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssiiiiiii", $productId, $productGroup, $totalProduct, $totalWaste, $salesEstimation, $actualSales, $secondQualityCount, $producedMeter, $plannedMeter);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Data successfully added or updated."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to add or update data: " . $stmt->error]);
        }
        $stmt->close();
    } elseif ($action === 'update') {
        // Veri güncelleme işlemi
        if ($productId !== null) {
            $sql = "UPDATE product_focus_approach SET 
                    Product_Group = IFNULL(?, Product_Group),
                    Total_Product = IFNULL(?, Total_Product),
                    Total_Waste = IFNULL(?, Total_Waste),
                    Sales_Estimation = IFNULL(?, Sales_Estimation),
                    Actual_Sales = IFNULL(?, Actual_Sales),
                    Second_Quality_Count = IFNULL(?, Second_Quality_Count),
                    Produced_Meter = IFNULL(?, Produced_Meter),
                    Planned_Meter = IFNULL(?, Planned_Meter)
                    WHERE Product_ID = ?";

            $stmt = $conn->prepare($sql);
            $stmt->bind_param("siiiiiiis", $productGroup, $totalProduct, $totalWaste, $salesEstimation, $actualSales, $secondQualityCount, $producedMeter, $plannedMeter, $productId);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Data successfully updated."]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to update data: " . $stmt->error]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "Product ID is required for updating data."]);
        }
    } elseif ($action === 'delete') {
        // Veri silme işlemi
        if ($productId !== null) {
            $sql = "DELETE FROM product_focus_approach WHERE Product_ID = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $productId);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Data successfully deleted."]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to delete data: " . $stmt->error]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "Product ID is required for deleting data."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid action."]);
    }
} else {
    // Veri çekme işlemi
    $sql = "SELECT * FROM product_focus_approach";
    $result = $conn->query($sql);

    $data = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    // Toplam Product hesabı
    $total_sql = "SELECT SUM(Total_Product) AS Total_Product_Sum FROM product_focus_approach";
    $total_result = $conn->query($total_sql);

    $total_product_sum = 0;
    if ($total_result->num_rows > 0) {
        $total_row = $total_result->fetch_assoc();
        $total_product_sum = $total_row['Total_Product_Sum'];
    }

    echo json_encode([
        "data" => $data,
        "total_product_sum" => $total_product_sum
    ]);
}

$conn->close();
?>
