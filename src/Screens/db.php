<?php

// $servername = "localhost";
// $username = "root";
// $password = "";

// $db_name = "hi";

// $conn = mysqli_connect('localhost', 'root', '');
// $database = mysqli_select_db($conn, 'hi');

// $encodedData = file_get_contents('php://input');  // take data from react native fetch API
// $decodedData = json_decode($encodedData, true);

// if (!$conn) {
//     echo "Connection failed!";
//     die("Could not connect to MySQL server.");
// }
$servername = "sv89";
$username = "appointpet_admin";
$password = "Ux4)Rr*b5!-t";

$db_name = "appointpet_hi";


$conn = new mysqli($servername, $username, $password, $db_name);

// Check for errors in the connection
if (!$conn) {
    echo "Connection failed!";
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connection stable!";
}

$encodedData = file_get_contents('php://input'); // take data from react native fetch API
$decodedData = json_decode($encodedData, true);

// Set response header to JSON
header('Content-Type: application/json');
