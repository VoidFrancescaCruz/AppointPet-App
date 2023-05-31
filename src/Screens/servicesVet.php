<?php

include('db.php');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$selectedService = $decodedData['service'];
echo $selectedService;
$sql = "SELECT serviceVets FROM services WHERE serviceName = '$selectedService'";
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
// Retrieve the selected service name from the query parameter
// $selectedService = $_GET['service'];

// // Query the veterinarian data that match the selected service
// $sql = "SELECT serviceVets FROM services WHERE serviceName = '$selectedService'";
// $result = mysqli_query($conn, $sql);

// if (mysqli_num_rows($result) > 0) {
//     // Convert the result into an associative array
//     $rows = array();
//     while ($row = $result->fetch_assoc()) {
//         $rows[] = $row;
//     }
//     $response_vets = array("Rows" => $rows);
//     // Return the rows as a JSON response
//     header('Content-Type: application/json');
//     echo json_encode($response_vets);
// } else {
//     echo "0 results";
// }