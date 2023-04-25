<?php

include('db.php');


$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$email = $decodedData['Email'];

if (empty($email)) {
    $response[] = array("Message" => "Email parameter is missing");
    echo json_encode($response);
    exit;
}

//old sql for home hi user!

$SQL = "SELECT first_name FROM users WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail > 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    $FName = $arrayu['first_name'];
    $Message = "Success";
} else {
    $Message = "No account found for the specified email";
    $FName = "";
}

$response[] = array("Message" => $Message, "FirstName" => $FName);
echo json_encode($response);
