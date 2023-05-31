<?php

include('dbApp.php');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

if (!empty($decodedData['Email'])) {
    $email = $decodedData['Email'];

    //query for appointment history
    $SQL = "SELECT adminUsername FROM adminlog";
    $exeSQL = mysqli_query($conn, $SQL);
    $checkEmail = mysqli_num_rows($exeSQL);
    if ($checkEmail > 0) {
        $rows = array();
        while ($row = mysqli_fetch_array($exeSQL)) {
            $LName = $row['adminUsername'];
            $rows[] = array("LastName" => $LName, "Eme" => $LName);
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
