<?php

$servername = "localhost";
$username = "root";
$password = "";

$db_name = "hi";

$conn = mysqli_connect('localhost', 'root', '');
$database = mysqli_select_db($conn, 'hi');

$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true);

if (!$conn) {
    echo "Connection failed!";
    die("Could not connect to MySQL server.");
}
