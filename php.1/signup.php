<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "supply_chain";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(['message' => 'Database connection failed.', 'type' => 'error']);
    exit;
}

$valid_company_codes = ["COMPANY123", "COMPANY456"];

$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);
$company_code = $data['company_code'];

if (!in_array($company_code, $valid_company_codes)) {
    echo json_encode(['message' => 'Invalid company code.', 'type' => 'error']);
    exit;
}

$sql = "INSERT INTO users (email, password, company_code) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $email, $password, $company_code);

if ($stmt->execute()) {
    echo json_encode(['message' => 'Sign up successful!', 'type' => 'success']);
} else {
    echo json_encode(['message' => 'Error: Could not sign up.', 'type' => 'error']);
}

$stmt->close();
$conn->close();
?>
