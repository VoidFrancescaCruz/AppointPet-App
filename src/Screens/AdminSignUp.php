<?php
include('db.php');


// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);

$email = $decodedData['Email'];
$password = md5($decodedData['Password']); 
$is_admin = true;
//password is hashed

// $SQL = "SELECT * FROM users WHERE first_name = '$firstName', last_name = '$lastName', email = '$email' ";
$SQL = "SELECT * FROM users WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail = mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
$Message = "Already registered";
} else {

$InsertQuerry = "INSERT INTO users(email, password, is_admin) VALUES('$email', '$password', '$is_admin' )";
// $InsertQuerry = "INSERT INTO users(first_name, password) VALUES('$firstName', '$password' )";


$R = mysqli_query($conn, $InsertQuerry);

if ($R) {
$Message = "Admin Complete--!";
} else {
$Message = "Error";
}
}
$response[] = array("Message" => $Message);

echo json_encode($response);
