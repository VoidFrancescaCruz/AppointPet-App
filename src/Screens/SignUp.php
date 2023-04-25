<?php
include('db.php');


// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);


$firstName = $decodedData['FirstName'];
$lastName = $decodedData['LastName'];
$email = $decodedData['Email'];
$password = md5($decodedData['Password']); //password is hashed

// $SQL = "SELECT * FROM users WHERE first_name = '$firstName', last_name = '$lastName', email = '$email' ";
$SQL = "SELECT * FROM users WHERE first_name = '$firstName' AND last_name = '$lastName' AND email = '$email' ";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail = mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
$Message = "Already registered";
} else {

$InsertQuerry = "INSERT INTO users(first_name, last_name, email, password) VALUES('$firstName ', '$lastName', '$email', '$password' )";
// $InsertQuerry = "INSERT INTO users(first_name, password) VALUES('$firstName', '$password' )";


$R = mysqli_query($conn, $InsertQuerry);

if ($R) {
$Message = "Successfully Created an Account!";
} else {
$Message = "Error";
}
}
$response[] = array("Message" => $Message);

echo json_encode($response);
