<?php
// include('db.php');

// //dependencies for the PHPMailer library
// require 'vendor/autoload.php';
// use PHPMailer\PHPMailer\PHPMailer;

// // Getting the received JSON into $json variable.
// $json = file_get_contents('php://input');

// // decoding the received JSON and store into $obj variable.
// $obj = json_decode($json, true);

// // Generate a random 6-digit OTP code
// $otp = rand(100000, 999999);



// $firstName = $decodedData['FirstName'];
// $lastName = $decodedData['LastName'];
// $email = $decodedData['Email'];
// $password = md5($decodedData['Password']); //password is hashed


// // $SQL = "SELECT * FROM users WHERE first_name = '$firstName', last_name = '$lastName', email = '$email' ";
// $SQL = "SELECT * FROM users WHERE first_name = '$firstName' AND last_name = '$lastName' AND email = '$email' ";
// $exeSQL = mysqli_query($conn, $SQL);
// $checkEmail = mysqli_num_rows($exeSQL);

// if ($checkEmail != 0) {
//     $Message = "Already registered";
// } else {

//     $InsertQuerry = "INSERT INTO users(first_name, last_name, email, password, verify_token, email_verified_at) VALUES('$firstName ', '$lastName', '$email', '$password', '$otp', NULL)";
//     // $InsertQuerry = "INSERT INTO users(first_name, password) VALUES('$firstName', '$password' )";

//     $R = mysqli_query($conn, $InsertQuerry);

//     if ($R) {
//         // Create a new PHPMailer instance
//         $mail = new PHPMailer();
//         $mail->isSMTP();
//         $mail->Host = 'smtp.gmail.com';
//         $mail->SMTPAuth = true;
//         $mail->Username = 'appointpet@gmail.com';
//         $mail->Password = 'bttbmzxxlouaqqvf';
//         $mail->SMTPSecure = 'tls';
//         $mail->Port = 587;
//         // Set up the email message
//         $mail->setFrom('appointpet@gmail.com', 'AppointPet');
//         $mail->addAddress($email);
//         $mail->Subject = 'Your OTP code for sign up';
//         $mail->Body = 'Your OTP code is: ' . $otp;
//         if ($mail->send()) {
//             // Email sent successfully
//             // You can store the OTP code in your database or session for verification later
//             echo json_encode(array('success' => true));
//         } else {
//             // Error sending email
//             echo json_encode(array('success' => false, 'error' => $mail->ErrorInfo));
//         }
//         $Message = "Successfully Created an Account!";
//     } else {
//         $Message = "Error";
//     }
// }
// $response[] = array("Message" => $Message);

// echo json_encode($response);

include('db.php');

//dependencies for the PHPMailer library
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);

// Generate a random 6-digit OTP code
$otp = rand(100000, 999999);

$firstName = $obj['FirstName'];
$lastName = $obj['LastName'];
$email = $obj['Email'];
$password = md5($obj['Password']); //password is hashed

$SQL = "SELECT * FROM users WHERE first_name = '$firstName' AND last_name = '$lastName' AND email = '$email' ";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail = mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $Message = "Already registered";
} else {

    $InsertQuerry = "INSERT INTO users(first_name, last_name, email, password, verify_token, email_verified_at) VALUES('$firstName ', '$lastName', '$email', '$password', '$otp', NULL)";
    // $InsertQuerry = "INSERT INTO users(first_name, password) VALUES('$firstName', '$password' )";

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {
        // Create a new PHPMailer instance
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'appointpet@gmail.com';
        $mail->Password = 'bttbmzxxlouaqqvf';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        // Set up the email message
        $mail->setFrom('appointpet@gmail.com', 'AppointPet');
        $mail->addAddress($email);
        $mail->Subject = 'Your OTP code for sign up';
        $mail->Body = 'Your OTP code is: ' . $otp;
        if ($mail->send()) {
            // Email sent successfully
            // You can store the OTP code in your database or session for verification later
            echo json_encode(array('success' => true));
        } else {
            // Error sending email
            echo json_encode(array('success' => false, 'error' => $mail->ErrorInfo));
        }
        $Message = "Successfully Created an Account!";
    } else {
        $Message = "Error";
    }
}

$response = array("Message" => $Message);

echo json_encode($response);