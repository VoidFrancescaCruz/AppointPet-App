<?php

/*

include('db.php');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$email = $decodedData['UserAppointment'];

echo "Nani";

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

*/

    include('db.php');  // Connect to database

    $email = "j@gmail.com"; // Hard-coded email
    //$emailTwo = $_GET["email"];

    //echo $emailTwo;

    $sql = "SELECT * FROM form WHERE email = '$email'"; // Select all rows with the user email.
    $result = $conn->query($sql);

    $rows = array();  // Store results in an array

    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    
    echo json_encode($rows); // Return results as JSON

    $conn->close(); // Close connection
?>


