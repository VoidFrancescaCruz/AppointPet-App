<?php

include('db.php');

$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);

if (!empty($decodedData['Email'])) {
    $email = $decodedData['Email'];

    //query for pet names
    $SQL_pet = "SELECT petName, petGender, petBreed, petType FROM form WHERE email = '$email' GROUP BY petName";
    $exeSQL_pet = mysqli_query($conn, $SQL_pet);
    $checkEmail_pet = mysqli_num_rows($exeSQL_pet);

    if ($checkEmail_pet > 0) {
        $rows_pet = array();
        while ($row_pet = mysqli_fetch_array($exeSQL_pet)) {
            $PetName_pet = $row_pet['petName'];
            $PetGender_pet = $row_pet['petGender'];
            $PetBreed_pet = $row_pet['petBreed'];
            $PetType_pet = $row_pet['petType'];
            $rows_pet[] = array("PetName_pet" => $PetName_pet, "PetGender_pet" => $PetGender_pet, "PetBreed_pet" => $PetBreed_pet, "PetType_pet" => $PetType_pet);
        }

        $response_pet = array("Message" => "Success", "Rows" => $rows_pet);
    } else {
        $response_pet = array("Message" => "No account found for the specified email");
    }

    echo json_encode($response_pet);
} else {
    $response = array("Message" => "Invalid request format");
    echo json_encode($response);
    exit;
}