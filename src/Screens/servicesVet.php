<?php

include('db.php');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$service = $decodedData['Service'];

$SQL = "SELECT serviceVets FROM services WHERE serviceName = '$service'";
$stmt = mysqli_query($conn, $sql);

if (mysqli_num_rows($stmt) > 0) {
    $dataVets = array();
    while ($row = mysqli_fetch_array($stmt)) {
        $ServiceVets = $row['serviceVets'];
        $dataVets[] = array(
            "serviceVets" => $ServiceVets
        );
    }
    $response_vets = array("Message" => "Success", "Rows" => $dataVets);
} else {
    $response_vets = array("Message" => "No data found.");
}

header('Content-Type: application/json');
echo json_encode($response_vets);