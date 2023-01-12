<?php
include('db.php');


// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);


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
$scheduleTime = $decodedData['ScheduleTime'];

$InsertQuerry = "INSERT INTO form(phoneNumber, homeAddress, petName, petGender, petBirthdate, petBreed, petType, services, vetsTeam, schedDate, schedTime) 
  VALUES('$phoneNumber', '$homeAddress', '$petName', '$petGender', '$petBirth', '$petBreed', '$petType', '$service', '$vet', '$scheduleDate', '$scheduleTime')";

$R = mysqli_query($conn, $InsertQuerry);

if ($R) {
	$Message = "Inserted--!";
} else {
	$Message = "Error";
}

$response[] = array("Message" => $Message);

echo json_encode($response);?>