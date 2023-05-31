<?php
include('db.php');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$email = $decodedData['Email'];
$password = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM users WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['password'] != $password) {
        $Message = "Wrong password";
        $Email = $decodedData['Email'];
    } else {
        $Message = "Success";
        $Email = $decodedData['Email'];
    }
} else {
    $Message = "No account yet";
    $Email = $decodedData['Email'];
}

$response[] = array("Message" => $Message, "Email" => $Email);
echo json_encode($response);
