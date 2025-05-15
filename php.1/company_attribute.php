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

// Veritabanı bağlantısı
$conn = new mysqli($servername, $username, $password, $dbname);

// Bağlantı hatası kontrolü
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Formdan gelen veriler
    $action = isset($_POST['action']) ? $_POST['action'] : '';
    $year = isset($_POST['Year']) ? intval($_POST['Year']) : null;

    $previous_year_customers = isset($_POST['previous_year_customers']) ? intval($_POST['previous_year_customers']) : null;
    $current_year_customers = isset($_POST['current_year_customers']) ? intval($_POST['current_year_customers']) : null;
    $retention_rate = isset($_POST['retention_rate']) ? floatval($_POST['retention_rate']) : null;
    $integrated_projects = isset($_POST['integrated_projects']) ? intval($_POST['integrated_projects']) : null;
    $total_sustainability_projects = isset($_POST['total_sustainability_projects']) ? intval($_POST['total_sustainability_projects']) : null;
    $sustainability_integration_rate = isset($_POST['sustainability_integration_rate']) ? floatval($_POST['sustainability_integration_rate']) : null;
    $investment_in_sustainability = isset($_POST['investment_in_sustainability']) ? floatval($_POST['investment_in_sustainability']) : null;
    $returns_from_investment = isset($_POST['returns_from_investment']) ? floatval($_POST['returns_from_investment']) : null;
    $investment_recovery = isset($_POST['investment_recovery']) ? floatval($_POST['investment_recovery']) : null;
    $rd_employees = isset($_POST['rd_employees']) ? intval($_POST['rd_employees']) : null;
    $rd_budget = isset($_POST['rd_budget']) ? floatval($_POST['rd_budget']) : null;
    $rd_accepted_projects = isset($_POST['rd_accepted_projects']) ? intval($_POST['rd_accepted_projects']) : null;
    $on_time_and_successful_orders = isset($_POST['on_time_and_successful_orders']) ? intval($_POST['on_time_and_successful_orders']) : null;
    $total_orders = isset($_POST['total_orders']) ? intval($_POST['total_orders']) : null;

    if ($action === 'add' || $action === 'update') {
        if ($year !== null) {
            $sql = "INSERT INTO company_attributes (
                        Year, previous_year_customers, current_year_customers, retention_rate, integrated_projects, 
                        total_sustainability_projects, sustainability_integration_rate, investment_in_sustainability, 
                        returns_from_investment, investment_recovery, rd_employees, rd_budget, 
                        rd_accepted_projects, on_time_and_successful_orders, total_orders
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    ON DUPLICATE KEY UPDATE 
                        previous_year_customers = VALUES(previous_year_customers),
                        current_year_customers = VALUES(current_year_customers),
                        retention_rate = VALUES(retention_rate),
                        integrated_projects = VALUES(integrated_projects),
                        total_sustainability_projects = VALUES(total_sustainability_projects),
                        sustainability_integration_rate = VALUES(sustainability_integration_rate),
                        investment_in_sustainability = VALUES(investment_in_sustainability),
                        returns_from_investment = VALUES(returns_from_investment),
                        investment_recovery = VALUES(investment_recovery),
                        rd_employees = VALUES(rd_employees),
                        rd_budget = VALUES(rd_budget),
                        rd_accepted_projects = VALUES(rd_accepted_projects),
                        on_time_and_successful_orders = VALUES(on_time_and_successful_orders),
                        total_orders = VALUES(total_orders)";

            $stmt = $conn->prepare($sql);
            if (!$stmt) {
                die(json_encode(["status" => "error", "message" => "SQL error: " . $conn->error]));
            }

            $stmt->bind_param(
                "iiiiiiidddiidii",
                $year, $previous_year_customers, $current_year_customers, $retention_rate, $integrated_projects,
                $total_sustainability_projects, $sustainability_integration_rate, $investment_in_sustainability,
                $returns_from_investment, $investment_recovery, $rd_employees, $rd_budget,
                $rd_accepted_projects, $on_time_and_successful_orders, $total_orders
            );

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Data successfully added/updated."]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to execute query: " . $stmt->error]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "Year is required for adding/updating data."]);
        }
    } elseif ($action === 'delete') {
        if ($year !== null) {
            $sql = "DELETE FROM company_attributes WHERE Year = ?";
            $stmt = $conn->prepare($sql);
            if (!$stmt) {
                die(json_encode(["status" => "error", "message" => "SQL error: " . $conn->error]));
            }

            $stmt->bind_param("i", $year);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Data successfully deleted."]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to execute delete query: " . $stmt->error]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "Year is required for deletion."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid action."]);
    }
} else {
    $sql = "SELECT * FROM company_attributes";
    $result = $conn->query($sql);

    $data = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    header('Content-Type: application/json');
    echo json_encode(["data" => $data]);
}

$conn->close();
?>
