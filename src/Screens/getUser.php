
<?php
    // Retrieve data from AsyncStorage in React Native
    // Use this as to get the email from async storage
    //$dataFromAsyncStorage = $_GET["email"];

    $dataFromAsyncStorage = "j@gmail.com";

    // Sanitize and validate the retrieved value to prevent SQL injection
    // For example, you can use mysqli_real_escape_string or prepared statements

    // Connect to your MySQL database
    $conn = mysqli_connect('localhost', 'root', '', 'hi');

    // Check the connection
    if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
    }

    // Construct your SQL query with the retrieved value
    $sql = "SELECT firstName, lastName, email, petName, petBreed, petType FROM form WHERE email = '$dataFromAsyncStorage'";

    // Execute the SQL query
    $result = mysqli_query($conn, $sql);

    $rows = array();
    // Check for query execution success
    if ($result) {

        // Fetch the result and process it as needed
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
    }
    
        else {
            echo 'Error executing query: ' . mysqli_error($conn);
        }

    // Close the database connection
    mysqli_close($conn);

    // Return data as JSON
    header('Content-Type: application/json');
    echo json_encode($rows);
?>
