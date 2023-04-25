<?php

include('db.php');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$email = $decodedData['UserAppointment'];

if (empty($email)) {
    $response[] = array("Message" => "Email parameter is missing");
    echo json_encode($response);
    exit;
}

//old sql for home hi user!
$SQL = "SELECT firstName, lastName, petName, services, schedDate, schedTime FROM form WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$checkPets = mysqli_num_rows($exeSQL);

if ($checkPets > 0) {
    $appointments = array();
    $Name = "";
    while ($row = mysqli_fetch_assoc($exeSQL)) {
        $appointment = array(
            "name" => $row['firstName'] . ' ' . $row['lastName'], "petName" => $row['petName'], "services" => $row['services'],
            "schedDate" => $row['schedDate'], "schedTime" => $row['schedTime']
        );
        array_push($appointments, $appointment);

        $Name = $row['firstName'] . ' ' . $row['lastName'];
    }
    $message = "Success";
} else {
    $message = "No pets found";
    $appointments = array();
    $Name = "";
}

$response = array("message" => $message, "appointment" => $appointments, "Name" => $Name);
