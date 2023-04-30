<?php
include('db.php');

$email = $decodedData['Email'];
$is_admin = true;
$password = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM users WHERE email = '$email' AND is_admin = '$is_admin' ";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['password'] != $password) {
        $Message = "Wrong password";
        // $Message = $password;
    } else {
        $Message = "Success";
    }
} else {
    $Message = "Sorry admin only";
}

$response[] = array("Message" => $Message);
echo json_encode($response);
