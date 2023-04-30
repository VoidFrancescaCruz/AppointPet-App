<?php

include('db.php');

$sql = "SELECT vetTeamName, vetDescription FROM vets"; // Select all rows with the user email.
$result = $conn->query($sql);

if (mysqli_num_rows($result) > 0) {
    // Step 3: Loop through the result set and store the data in an array
    $vets = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $vets[] = $row;
    }
}

echo json_encode($vets); // Return results as JSON

$conn->close();
?>