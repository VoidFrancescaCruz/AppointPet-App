<?php
/*
include('db.php');
$sql = "SELECT * FROM services GROUP BY serviceName"; // Select all rows with the user email.
$result = $conn->query($sql);
$rows = array(); // Store results in an array
while ($row = $result->fetch_assoc()) {
$rows[] = $row;
}
echo json_encode($rows); // Return results as JSON
$conn->close();
*/

// include('db.php');

// //$sql = "SELECT * FROM services";
// $sql = "SELECT serviceName, servicePrice, serviceSummary, serviceDescription FROM services GROUP BY serviceName"; // Select all rows with the user email.
// $result = $conn->query($sql);

// if (mysqli_num_rows($result) > 0) {
//     // Step 3: Loop through the result set and store the data in an array
//     $data = array();

//     while ($row = mysqli_fetch_assoc($result)) {
//         $data[] = $row;
//     }
// }

// echo json_encode($data); // Return results as JSON

// $conn->close();


include('db.php');

$sql = "SELECT serviceName, servicePrice, serviceSummary, serviceDescription, serviceImage FROM services GROUP BY serviceName";
$stmt = mysqli_query($conn, $sql);

if (mysqli_num_rows($stmt) > 0) {
    $data = array();
    while ($row = mysqli_fetch_array($stmt)) {
        $ServiceName = $row['serviceName'];
        $ServicePrice = $row['servicePrice'];
        $ServiceSummary = $row['serviceSummary'];
        $ServiceDescription = $row['serviceDescription'];
        // $ServiceImage = $row['serviceImage'];
        $ServiceImage = base64_encode($row['serviceImage']);
        // echo "<img src='data:image/jpeg;base64,$ServiceImage'>";
        $data[] = array(
            "serviceName" => $ServiceName,
            "servicePrice" => $ServicePrice,
            "serviceSummary" => $ServiceSummary,
            "serviceDescription" => $ServiceDescription,
            "serviceImage" => $ServiceImage
        );
    }
    $response = array("Message" => "Success", "Rows" => $data);
} else {
    $response = array("Message" => "No data found.");
}

header('Content-Type: application/json');
echo json_encode($response);