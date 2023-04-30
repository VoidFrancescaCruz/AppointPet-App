<?php

include('db.php');

//dependencies for the PHPMailer library
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// require 'vendor/autoload.php';
require __DIR__ . '/vendor/autoload.php';

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
    $InsertQuerry = "INSERT INTO users(first_name, last_name, email, password, is_admin, verify_token, email_verified_at) VALUES('$firstName ', '$lastName', '$email', '$password','0', '$otp', NULL)";

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {
        // Create a new PHPMailer instance
        $mail = new PHPMailer();
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'appointpet@gmail.com';
        $mail->Password = 'bttbmzxxlouaqqvf';
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587; // TCP port to connect to
        // Set up the email message
        $mail->setFrom('appointpet@gmail.com', 'AppointPet');
        $mail->addAddress($email, $firstName);
        $mail->Subject = 'Your OTP code for sign up';
        $mail->Body = 'Your OTP code is: ' . $otp;
        $mail->send();
        // if ($mail->send()) {
        //     // Email sent successfully
        //     // You can store the OTP code in your database or session for verification later
        //     echo json_encode(array('success' => true));
        // } else {
        //     // Error sending email
        //     echo json_encode(array('success' => false, 'error' => $mail->ErrorInfo));
        // }
        $Message = "Successfully Created an Account!";
    } else {
        $Message = "Error Info";
    }
}
$response[] = array("Message" => $Message);

echo json_encode($response);