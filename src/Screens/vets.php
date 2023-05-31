<?php

include('dbApp.php');

$sql = "SELECT * FROM vets";
$stmt = mysqli_query($conn, $sql);

if (mysqli_num_rows($stmt) > 0) {
    $vets = array();
    while ($row = mysqli_fetch_array($stmt)) {
        $VetTeamName = $row['vetTeamName'];
        $VetDescription = $row['vetDescription'];
        // $ServiceImage = $row['serviceImage'];
        $VetImage = base64_encode($row['vetImage']);
        // echo "<img src='data:image/jpeg;base64,$ServiceImage'>";
        $vets[] = array(
            "vetTeamName" => $VetTeamName,
            "vetDescription" => $VetDescription,
            "vetImage" => $VetImage
        );
    }
    $response = array("Message" => "Success", "Rows" => $vets);
} else {
    $response = array("Message" => "No data found.");
}

header('Content-Type: application/json');
echo json_encode($response);
