<?php
include('db.php');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

$phoneNumber = $decodedData['PhoneNumber'];
$homeAddress = $decodedData['HomeAddress'];
$petName = $decodedData['PetName'];
$petGender = $decodedData['PetGender'];
$petBirth = $decodedData['PetBirth'];
$petBreed = $decodedData['PetBreed'];
$petType = $decodedData['PetType'];
$service = $decodedData['Service'];
$vet = $decodedData['VetTeam'];
$scheduleDate = $decodedData['ScheduleDate'];
$scheduleMonth = $decodedData['ScheduleMonth'];
$scheduleTime = $decodedData['ScheduleTime'];
$status = $decodedData['Status'];

$email = $decodedData['Email'];

$SQL = "SELECT first_name, last_name FROM users WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail > 0) {
	$arrayu = mysqli_fetch_array($exeSQL);
	$FName = $arrayu['first_name'];
	$LName = $arrayu['last_name'];
} else {
	$FName = "";
	$FName = "";
}

$InsertQuerry = "INSERT INTO form(firstName, lastName, email, phoneNumber, homeAddress, petName, petGender, petBirthdate, petBreed, petType, services, vetsTeam, schedDate, month, schedTime, status) 
  VALUES('$FName', '$LName', '$email', '$phoneNumber', '$homeAddress', '$petName', '$petGender', '$petBirth', '$petBreed', '$petType', '$service', '$vet', '$scheduleDate', '$scheduleMonth', '$scheduleTime', '$status')";

$R = mysqli_query($conn, $InsertQuerry);

if ($R) {
	$Message = "Successfully Scheduled an Appointment";
} else {
	$Message = "Error";
}

$response[] = array("Message" => $Message);

echo json_encode($response);
