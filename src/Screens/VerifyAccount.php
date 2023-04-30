<?php

// include('db.php');

// // Getting the received JSON into $json variable.
// $json = file_get_contents('php://input');

// // decoding the received JSON and store into $obj variable.
// $obj = json_decode($json, true);

// $email = $obj['Email'];
// $otp = md5($obj['OTP']);

// $SQL = "SELECT * FROM users WHERE email = '$email' AND verify_token ='$otp'";
// $exeSQL = mysqli_query($conn, $SQL);
// $checkEmail = mysqli_num_rows($exeSQL);

// if ($checkEmail != 0) {
//     $Message = "Verification Failed.";
// } else {
//     $InsertQuerry = "UPDATE users SET email_verified_at = NOW() WHERE email ='$email' AND verify_token ='$otp'";

//     $R = mysqli_query($conn, $InsertQuerry);

//     if ($R) {
//         $Message = "Successfully Created an Account!";
//     } else {
//         $Message = "Error Info";
//     }
// }
// $response[] = array("Message" => $Message);

// echo json_encode($response);

include('db.php');

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);

$email = $obj['Email'];
$otp = $obj['Otp'];

$SQL = "SELECT * FROM users WHERE email = '$email' AND verify_token ='$otp'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail = mysqli_num_rows($exeSQL);

// if ($checkEmail == 0) {
//     $Message = "Verification Failed.";
// } else {
//     $InsertQuerry = "UPDATE users SET email_verified_at = NOW() WHERE email ='$email' AND verify_token ='$otp'";

//     $R = mysqli_query($conn, $InsertQuerry);

//     if ($R) {
//         $Message = "Successfully Verified an Account! You may Log In.";
//     } else {
//         $Message = "Error Info";
//     }


// }
// $response[] = array("Message" => $Message);

// echo json_encode($response);
if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['verify_token'] != $otp) {
        $Message = "Wrong Verification Code";
    } else {
        $InsertQuerry = "UPDATE users SET email_verified_at = NOW() WHERE email ='$email' AND verify_token ='$otp'";
        $R = mysqli_query($conn, $InsertQuerry);
        if ($R) {
            $Message = "Successfully Verified an Account! You may Log In.";
        } else {
            $Message = "Error Info";
        }
    }
} else {
    $Message = "No account yet";
}

$response[] = array("Message" => $Message);
echo json_encode($response);