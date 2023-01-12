<?php
include('db.php');

$email = $decodedData['Email'];

$SQL = "SELECT * FROM users WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['email'] != $email) {
        $Message = "error";
        $firstName = '';
        $lastName = '';
        $email = '';
    } else {
        $Message = $arrayu['first_name'];
        $firstName = $arrayu['first_name'];
        $lastName = $arrayu['last_name'];
        $email = $arrayu['email'];
    }
} else {
    $Message = "No account yet";
}

$response[] = array("Message" => $Message, "firstName" => $firstName, "lastName" => $lastName, "email" => $email,);
echo json_encode($response);
