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
    $orderId = isset($_POST['Order_ID']) ? $_POST['Order_ID'] : null;

    // Silme işlemi
    if ($action === 'delete') {
        if (!empty($orderId)) {
            $sql = "DELETE FROM `delivery_oriented_approach` WHERE `Order_ID` = ?";
            $stmt = $conn->prepare($sql);

            if (!$stmt) {
                die(json_encode(["status" => "error", "message" => "SQL error: " . $conn->error]));
            }

            $stmt->bind_param("s", $orderId);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Data successfully deleted."]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to execute delete query: " . $stmt->error]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "Order ID is required for deletion."]);
        }
    }

    // Ekleme işlemi
    elseif ($action === 'add') {
        $customerName = isset($_POST['Customer_Name']) ? $_POST['Customer_Name'] : null;
        $orderDate = isset($_POST['Order_Date']) ? $_POST['Order_Date'] : null;
        $promisedDate = isset($_POST['Promised_Date']) ? $_POST['Promised_Date'] : null;
        $deliveryDate = isset($_POST['Delivery_Date']) ? $_POST['Delivery_Date'] : null;
        $onTime = isset($_POST['On_Time']) ? $_POST['On_Time'] : 'Unknown';
        $delayDays = isset($_POST['Delay_Days']) ? intval($_POST['Delay_Days']) : null;
        $flowDays = isset($_POST['Flow_Days']) ? intval($_POST['Flow_Days']) : null;
        $urgencyStatus = isset($_POST['Urgency_Status']) ? $_POST['Urgency_Status'] : 'No';
        $priority = isset($_POST['Priority']) ? $_POST['Priority'] : 'No';
        $distributionNetwork = isset($_POST['Distribution_Network']) ? $_POST['Distribution_Network'] : null;
        $trackingStatus = isset($_POST['Tracking_Status']) ? $_POST['Tracking_Status'] : null;

        $sql = "INSERT INTO `delivery_oriented_approach` 
                (`Order_ID`, `Customer_Name`, `Order_Date`, `Promised_Date`, `Delivery_Date`, `On_Time`, `Delay_Days`, `Flow_Days`, `Urgency_Status`, `Priority`, `Distribution_Network`, `Tracking_Status`) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE 
                `Customer_Name` = VALUES(`Customer_Name`),
                `Order_Date` = VALUES(`Order_Date`),
                `Promised_Date` = VALUES(`Promised_Date`),
                `Delivery_Date` = VALUES(`Delivery_Date`),
                `On_Time` = VALUES(`On_Time`),
                `Delay_Days` = VALUES(`Delay_Days`),
                `Flow_Days` = VALUES(`Flow_Days`),
                `Urgency_Status` = VALUES(`Urgency_Status`),
                `Priority` = VALUES(`Priority`),
                `Distribution_Network` = VALUES(`Distribution_Network`),
                `Tracking_Status` = VALUES(`Tracking_Status`)";

        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            die(json_encode(["status" => "error", "message" => "SQL error: " . $conn->error]));
        }

        $stmt->bind_param("ssssssiiisss", $orderId, $customerName, $orderDate, $promisedDate, $deliveryDate, $onTime, $delayDays, $flowDays, $urgencyStatus, $priority, $distributionNetwork, $trackingStatus);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Data successfully added/updated."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to execute query: " . $stmt->error]);
        }
        $stmt->close();
    }

    // Güncelleme işlemi
    elseif ($action === 'update') {
        $customerName = isset($_POST['Customer_Name']) ? $_POST['Customer_Name'] : null;
        $orderDate = isset($_POST['Order_Date']) ? $_POST['Order_Date'] : null;
        $promisedDate = isset($_POST['Promised_Date']) ? $_POST['Promised_Date'] : null;
        $deliveryDate = isset($_POST['Delivery_Date']) ? $_POST['Delivery_Date'] : null;
        $onTime = isset($_POST['On_Time']) ? $_POST['On_Time'] : 'Unknown';
        $delayDays = isset($_POST['Delay_Days']) ? intval($_POST['Delay_Days']) : null;
        $flowDays = isset($_POST['Flow_Days']) ? intval($_POST['Flow_Days']) : null;
        $urgencyStatus = isset($_POST['Urgency_Status']) ? $_POST['Urgency_Status'] : 'No';
        $priority = isset($_POST['Priority']) ? $_POST['Priority'] : 'No';
        $distributionNetwork = isset($_POST['Distribution_Network']) ? $_POST['Distribution_Network'] : null;
        $trackingStatus = isset($_POST['Tracking_Status']) ? $_POST['Tracking_Status'] : null;

        $sql = "UPDATE `delivery_oriented_approach` SET 
                    `Customer_Name` = ?,
                    `Order_Date` = ?,
                    `Promised_Date` = ?,
                    `Delivery_Date` = ?,
                    `On_Time` = ?,
                    `Delay_Days` = ?,
                    `Flow_Days` = ?,
                    `Urgency_Status` = ?,
                    `Priority` = ?,
                    `Distribution_Network` = ?,
                    `Tracking_Status` = ?
                WHERE `Order_ID` = ?";

        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            die(json_encode(["status" => "error", "message" => "SQL error: " . $conn->error]));
        }

        $stmt->bind_param("sssssiisssss", $customerName, $orderDate, $promisedDate, $deliveryDate, $onTime, $delayDays, $flowDays, $urgencyStatus, $priority, $distributionNetwork, $trackingStatus, $orderId);

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
    $sql = "SELECT * FROM `delivery_oriented_approach`";
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
