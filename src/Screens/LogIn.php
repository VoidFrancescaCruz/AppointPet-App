<?php

// Importing DBConfig.php file.

// include('db.php');

// // Getting the received JSON into $json variable.
// $json = file_get_contents('php://input');

// // decoding the received JSON and store into $obj variable.
// $obj = json_decode($json, true);

// // Populate User email from JSON $obj array and store into $email.
// $email = $obj['email'];

// // Populate Password from JSON $obj array and store into $password.
// $password = $obj['password'];

// //Applying User Login query with email and password match.
// $Sql_Query = "select * from users where email = '$email' and password = '$password' ";

// // Executing SQL Query.
// $check = mysqli_fetch_array(mysqli_query($conn, $Sql_Query));


// if (isset($check)) {

//     $SuccessLoginMsg = 'Data Matched';

//     // Converting the message into JSON format.
//     $SuccessLoginJson = json_encode($SuccessLoginMsg);

//     // Echo the message.
//     echo $SuccessLoginJson;
// } else {

//     // If the record inserted successfully then show the message.
//     $InvalidMSG = 'Invalid Username or Password Please Try Again';

//     // Converting the message into JSON format.
//     $InvalidMSGJSon = json_encode($InvalidMSG);

//     // Echo the message.
//     echo $InvalidMSGJSon;
// }

// mysqli_close($conn);


include('db.php');

$email = $decodedData['Email'];
$password = md5($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM users WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['password'] != $password) {
        $Message = $arrayu['password'];
    } else {
        $Message = "Success";
    }
} else {
    $Message = "No account yet";
}

$response[] = array("Message" => $Message);
echo json_encode($response);
