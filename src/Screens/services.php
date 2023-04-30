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

include('db.php');

//$sql = "SELECT * FROM services";
$sql = "SELECT serviceName, servicePrice, serviceSummary, serviceDescription FROM services GROUP BY serviceName"; // Select all rows with the user email.
$result = $conn->query($sql);

if (mysqli_num_rows($result) > 0) {
    // Step 3: Loop through the result set and store the data in an array
    $data = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}

echo json_encode($data); // Return results as JSON

$conn->close();
?>