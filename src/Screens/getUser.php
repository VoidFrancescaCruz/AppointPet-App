<?php

include('db.php');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

if (!empty($decodedData['Email'])) {
    $email = $decodedData['Email'];
    $SQL = "SELECT first_name FROM users WHERE email = '$email'";
    $exeSQL = mysqli_query($conn, $SQL);
    $checkEmail = mysqli_num_rows($exeSQL);

    if ($checkEmail > 0) {
        $arrayu = mysqli_fetch_array($exeSQL);
        if ($arrayu !== null) {
            $FName = $arrayu['first_name'];
            $Message = "Success";
        } else {
            $Message = "No account found for the specified email";
            $FName = "";
        }
    } else {
        $Message = "No account found for the specified email";
        $FName = "";
    }

    $response = array("Message" => $Message, "FirstName" => $FName);
    echo json_encode($response);
} else {
    $response = array("Message" => "Invalid request format");
    echo json_encode($response);
    exit;
}
