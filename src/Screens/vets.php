<?php

// include('db.php');

// $sql = "SELECT * FROM vets"; // Select all rows with the user email.
// $result = $conn->query($sql);

// if (mysqli_num_rows($result) > 0) {
//     // Step 3: Loop through the result set and store the data in an array
//     $vets = array();

//     while ($row = mysqli_fetch_assoc($result)) {

//         $row['vetImage'] = base64_encode($row['vetImage']);
//         $vets[] = $row;
//     }
// }

// echo json_encode($vets); // Return results as JSON

// $conn->close();

include('db.php');

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