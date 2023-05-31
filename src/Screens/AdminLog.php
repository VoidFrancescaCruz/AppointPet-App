<?php
include('dbApp.php');

$email = $decodedData['Email'];
$password = sha1($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM adminlog WHERE adminUsername = '$email' ";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['adminPassword'] != $password) {
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
