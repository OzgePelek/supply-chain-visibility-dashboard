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

$email = $data['email'];
$password = $data['password'];

$sql = "SELECT password FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo json_encode(['message' => 'Login successful!', 'type' => 'success']);
    } else {
        echo json_encode(['message' => 'Incorrect password.', 'type' => 'error']);
    }
} else {
    echo json_encode(['message' => 'Email not found.', 'type' => 'error']);
}

$stmt->close();
$conn->close();
?>
