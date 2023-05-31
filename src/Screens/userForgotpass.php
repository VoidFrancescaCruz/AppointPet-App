<?php
include('dbApp.php');


// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);

$email = $obj['Email'];
$password = sha1($obj['Password']);
//password is hashed

// $SQL = "SELECT * FROM users WHERE first_name = '$firstName', last_name = '$lastName', email = '$email' ";
$SQL = "SELECT * FROM users WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail = mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);

    if ($arrayu['password'] == $password) {
        $Message = "Sorry New password cannot be old password";
    } else {
        $InsertQuerry = "UPDATE users SET password='$password' WHERE email='$email'";
        // $InsertQuerry = "INSERT INTO users(first_name, password) VALUES('$firstName', '$password' )";


        $R = mysqli_query($conn, $InsertQuerry);

        if ($R) {
            $Message = "Success";
        } else {
            $Message = "Error";
        }
    }
}
$response[] = array("Message" => $Message);

echo json_encode($response);
