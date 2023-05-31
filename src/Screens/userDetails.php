<?php
include('db.php');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$email = $decodedData['Email'];

$SQL = "SELECT * FROM users WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    $FName = $decodedData['Email'];
} else {
    $Message = "No account yet";
}

$response[] = array("Message" => $Message, "FName" => $FName);
echo json_encode($response);
