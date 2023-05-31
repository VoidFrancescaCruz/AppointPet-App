<?php

include('dbApp.php');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

if (!empty($decodedData['Email'])) {
    $email = $decodedData['Email'];
    $SQL = "SELECT adminUsername FROM adminlog WHERE adminUsername = '$email'";
    $exeSQL = mysqli_query($conn, $SQL);
    $checkEmail = mysqli_num_rows($exeSQL);

    if ($checkEmail > 0) {
        $arrayu = mysqli_fetch_array($exeSQL);
        if ($arrayu !== null) {
            $Email = $arrayu['adminUsername'];
            $Message = "Success";
        } else {
            $Message = "No account found for the specified email";
            $Email = "";
        }
    } else {
        $Message = "No account found for the specified email";
        $Email = "";
    }

    $response = array("Message" => $Message, "Email" => $Email);
    echo json_encode($response);
} else {
    $response = array("Message" => "Invalid request format");
    echo json_encode($response);
    exit;
}
