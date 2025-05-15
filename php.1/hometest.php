<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "supply_chain";

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = isset($_POST['action']) ? $_POST['action'] : '';
    $id = isset($_POST['id']) ? intval($_POST['id']) : null;
    $satisfactionScore = isset($_POST['musteri_memnuniyeti']) ? intval($_POST['musteri_memnuniyeti']) : null;
    $understoodCorrectly = isset($_POST['dogru_anlasilmis_musteri_istekleri']) ? intval($_POST['dogru_anlasilmis_musteri_istekleri']) : null;
    $requestMet = isset($_POST['musteri_isteklerinin_yerine_getirilmesi']) ? intval($_POST['musteri_isteklerinin_yerine_getirilmesi']) : null;
    $responseTime = isset($_POST['musteri_sorgu_cevap_suresi']) ? floatval($_POST['musteri_sorgu_cevap_suresi']) : null;

    if ($action === 'add') {
        if ($id !== null) {
            $sql = "INSERT INTO customer_oriented_approach (id, musteri_memnuniyeti, dogru_anlasilmis_musteri_istekleri, musteri_isteklerinin_yerine_getirilmesi, musteri_sorgu_cevap_suresi) 
                    VALUES (?, ?, ?, ?, ?)
                    ON DUPLICATE KEY UPDATE
                    musteri_memnuniyeti = VALUES(musteri_memnuniyeti),
                    dogru_anlasilmis_musteri_istekleri = VALUES(dogru_anlasilmis_musteri_istekleri),
                    musteri_isteklerinin_yerine_getirilmesi = VALUES(musteri_isteklerinin_yerine_getirilmesi),
                    musteri_sorgu_cevap_suresi = VALUES(musteri_sorgu_cevap_suresi)";

            $stmt = $conn->prepare($sql);
            $stmt->bind_param("iiidi", $id, $satisfactionScore, $understoodCorrectly, $requestMet, $responseTime);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Data successfully added/updated."]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to execute query: " . $stmt->error]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "ID is required for adding/updating data."]);
        }
    } elseif ($action === 'update') {
        if ($id !== null) {
            $sql = "UPDATE customer_oriented_approach SET 
                        musteri_memnuniyeti = IFNULL(?, musteri_memnuniyeti),
                        dogru_anlasilmis_musteri_istekleri = IFNULL(?, dogru_anlasilmis_musteri_istekleri),
                        musteri_isteklerinin_yerine_getirilmesi = IFNULL(?, musteri_isteklerinin_yerine_getirilmesi),
                        musteri_sorgu_cevap_suresi = IFNULL(?, musteri_sorgu_cevap_suresi)
                    WHERE id = ?";

            $stmt = $conn->prepare($sql);
            $stmt->bind_param("iidii", $satisfactionScore, $understoodCorrectly, $requestMet, $responseTime, $id);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Data successfully updated."]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to execute update query: " . $stmt->error]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "ID is required for updating data."]);
        }
    } elseif ($action === 'delete') {
        if ($id !== null) {
            $sql = "DELETE FROM customer_oriented_approach WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $id);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Data successfully deleted."]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to execute delete query: " . $stmt->error]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "ID is required for deleting data."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid action."]);
    }
} else {
    $sql = "SELECT * FROM customer_oriented_approach";
    $result = $conn->query($sql);

    $data = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    $output = array(
        "data" => $data
    );

    header('Content-Type: application/json');
    echo json_encode($output);
}

$conn->close();
?>
