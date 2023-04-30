<?php

include('db.php');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$status = "APPROVED";

if (!empty($decodedData['Email'])) {
    $email = $decodedData['Email'];
    $SQL = "SELECT firstName, lastName, petName, schedDate, schedTime, services FROM form WHERE status = '$status' ";
    $exeSQL = mysqli_query($conn, $SQL);
    $checkEmail = mysqli_num_rows($exeSQL);

    if ($checkEmail > 0) {
        $rows = array();
        while ($row = mysqli_fetch_array($exeSQL)) {
            $FName = $row['firstName'];
            $LName = $row['lastName'];
            $PetName = $row['petName'];
            $SchedDate = date('m/d/Y', strtotime($row['schedDate']));
            $SchedTime = date('H:i', strtotime($row['schedTime']));
            $Services = $row['services'];
            $rows[] = array("FirstName" => $FName, "LastName" => $LName, "PetName" => $PetName, "SchedDate" => $SchedDate, "SchedTime" => $SchedTime, "Services" => $Services);
        }

        $response = array("Message" => "Success", "Rows" => $rows);
    } else {
        $response = array("Message" => "No account found for the specified email");
    }

    echo json_encode($response);
} else {
    $response = array("Message" => "Invalid request format");
    echo json_encode($response);
    exit;
}
