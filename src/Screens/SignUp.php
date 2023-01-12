<?php
include('db.php');


// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);

// // Populate User name from JSON $obj array and store into $name.
// $fname = $obj['first_name'];

// $lname = $obj['last_name'];

// // Populate User email from JSON $obj array and store into $email.
// $email = $obj['email'];

// // Populate Password from JSON $obj array and store into $password.
// $password = $obj['password'];

// //Checking Email is already exist or not using SQL query.
// $CheckSQL = "SELECT * FROM users WHERE email='$email'";

// // Executing SQL Query.
// $check = mysqli_fetch_array(mysqli_query($conn, $CheckSQL));


// if (isset($check)) {

//     $EmailExistMSG = 'Email Already Exist, Please Try Again !!!';

//     // Converting the message into JSON format.
//     $EmailExistJson = json_encode($EmailExistMSG);

//     // Echo the message.
//     echo $EmailExistJson;
// } else {

//     // Creating SQL query and insert the record into MySQL database table.
//     $Sql_Query = "insert into users (first_name,last_name,email,password) values ('$fname','$lname','$email','$password')";


//     if (mysqli_query($conn, $Sql_Query)) {

//         // If the record inserted successfully then show the message.
//         $MSG = 'User Registered Successfully';

//         // Converting the message into JSON format.
//         $json = json_encode($MSG);

//         // Echo the message.
//         echo $json;
//     } else {

//         echo 'Try Again';
//     }
// }
// mysqli_close($conn);
//

$firstName = $decodedData['FirstName'];
$lastName = $decodedData['LastName'];
$email = $decodedData['Email'];
$password = md5($decodedData['Password']); //password is hashed

// $SQL = "SELECT * FROM users WHERE first_name = '$firstName', last_name = '$lastName', email = '$email' ";
$SQL = "SELECT * FROM users WHERE first_name = '$firstName' AND last_name = '$lastName' AND email = '$email' ";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail = mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
$Message = "Already registered";
} else {

$InsertQuerry = "INSERT INTO users(first_name, last_name, email, password) VALUES('$firstName ', '$lastName', '$email', '$password' )";
// $InsertQuerry = "INSERT INTO users(first_name, password) VALUES('$firstName', '$password' )";


$R = mysqli_query($conn, $InsertQuerry);

if ($R) {
$Message = "Complete--!";
} else {
$Message = "Error";
}
}
$response[] = array("Message" => $Message);

echo json_encode($response);?>