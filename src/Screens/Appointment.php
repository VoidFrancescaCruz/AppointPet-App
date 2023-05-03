<?php
include('db.php');

//dependencies for the PHPMailer library
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// require 'vendor/autoload.php';
require __DIR__ . '/vendor/autoload.php';

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
$checkEmail = mysqli_num_rows($exeSQL);

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
	$mail->addAddress($email, $FName);
	$mail->isHTML(true);
	$mail->Subject = 'Appointment Schedule';
	$mail_template = "
		<div style='padding: 0px; background-color: transparent;'>
            <div style='margin: 0 auto; min-width: 520px; max-width: 600px; overflow-wrap: break-word; word-break: break-word; background-color: #F0F2EC;'>
                <div style='border-collapse: collapse; display: table; width: 100%; background-color: transparent;'>
                    <table width='100%' cellpadding='0' cellspacing='0' border='0'>
                        <tr>
                            <td style='padding-right: 0px;padding-left: 0px;' align='center'>
                                <a href='https://appointpet.infinityfreeapp.com' target='_blank'>
                                <img align='center' border='0' src='https://appointpet.infinityfreeapp.com/Assets/logo.png' alt='Logo' style='outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 44%;max-width: 246.4px;' width='246.4'/>
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        
        <div style='padding: 20px;background-color: transparent'>
            <div style='margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;'>
                <div style='border-collapse: collapse;display: table;width: 100%;background-color: transparent;'>
                    <table style='font-family: sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
                        <tbody>
                          <tr> 
                            <h1 style='margin: 0px; line-height: 160%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: sans-serif; font-size: 22px;'>
                            <strong>You have Scheduled an Appointment here at Appointpet!</strong>
                            </h1>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
        
        <!-- box -->
               
        <div style='padding: 0px;background-color: transparent'>
			<div style='Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;'>
				<div style='border-collapse: collapse;display: table;width: 100%;background-color: transparent;'>
					<div style='max-width: 320px;min-width: 108px;display: table-cell;vertical-align: top;'>
						<div style='width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;'>
						<div style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;'>
						</div>
					</div>
				</div>
				<div style='max-width: 320px;min-width: 382px;display: table-cell;vertical-align: top;'>
					<div style='background-color: #f0f2ec;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;'>
						<div style='padding: 20px;border-top: 1px solid #CCC;border-left: 1px solid #CCC;border-right: 1px solid #CCC;border-bottom: 1px solid #CCC;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;'>
							<table style='font-family:sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
								<tbody>
									<tr>
										<td style='overflow-wrap:break-word;word-break:break-word;padding:0px;font-family:sans-serif;' align='left'>
											<h4 style='margin: 0px; color: #6f4c29; line-height: 160%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: sans-serif; font-size: 16px;'>
											<strong>Here are the information about your schedule:</strong>
											</h4>
										</td>
									</tr>
								</tbody>
							</table>
								<table style='font-family: sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
									<tbody>
										<tr>
											<td style='overflow-wrap:break-word;word-break:break-word;padding:10px;font-family: sans-serif;' align='left'>
												<div style='color: #6f4c29; line-height: 200%; text-align: left; word-wrap: break-word;'>
												<p style='font-size: 14px; line-height: 100%;'>Name: <bold>" . $FName . " " . $LName . "</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Email: <bold>" . $email . "</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Phone: <bold>" . $phoneNumber . "</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Home Address: <bold>" . $homeAddress . "</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Pet's Name: <bold>" . $petName . "</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Pet's Gender: <bold>" . $petGender . "</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Pet's Birthdate: <bold>" . $petBirth . "</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Pet's Breed: <bold>" . $petBreed . "</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Pet's Type: <bold>" . $petType . "</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Chosen Services: <bold>" . $service . "</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Services Cost: <bold>&#8369; 1,499.00</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Veterinary Team: <bold>" . $vet . "</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Scheduled Date: <bold>" . $scheduleDate . "</bold></p>
												<p style='font-size: 14px; line-height: 100%;'>Scheduled Time: <bold>" . $scheduleTime . "</bold></p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
                    
                    <table style='font-family:sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
                        <tbody>
                            <tr>
                                <td style='overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:sans-serif;' align='left'>
                                
                                    <table height='0px' align='center' border='0' cellpadding='0' cellspacing='0' width='100%' style='border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;border-top: 0px solid #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'>
                                        <tbody>
                                            <tr style='vertical-align: top'>
                                                <td style='word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'>
                                                    <span>&#160;</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                        
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- status -->
        <div style='max-width: 320px;min-width: 110px;display: table-cell;vertical-align: top;'>
            <div style='width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;'>
                <div style='padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;'>
                    <table height='0px' align='center' border='0' cellpadding='0' cellspacing='0' width= '100%'' style='border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;border-top: 0px solid #ffffff;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'>
                        <tbody>
                          <tr style='vertical-align: top'>
                            <td style='word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'>
                              <span>&#160;</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
        </div>
        
        <div style='padding: 0px;background-color: transparent'>
            <div style='margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;'>
                <div style='border-collapse: collapse;display: table;width: 100%;background-color: transparent;'>
                    <table style='font-family: sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
                        <tbody>
                          <tr>
                            <td style='overflow-wrap:break-word;word-break:break-word;padding:40px 55px 10px;font-family: sans-serif;' align='left'>   
                                <h1 style='margin: 0px; line-height: 100%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: sans-serif; font-size: 23px;'>
                                    Your appointment has a current status of <b> " . $status . "</b>
                                </h1>
                            </td>
                          </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div style='padding: 0px;background-color: transparent'>
            <div style='Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #F0F2EC;'>
                <div style='border-collapse: collapse;display: table;width: 100%;background-color: transparent;'>
                    <table style='font-family:sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
                        <tbody>
                          <tr>
                            <td style='overflow-wrap:break-word;word-break:break-word;padding:32px 10px 0px;font-family:sans-serif;' align='left'>      
                                <div style='color: #6f4c29; line-height: 140%; text-align: center; word-wrap: break-word;'>
                                    <a href='https://appointpet.infinityfreeapp.com' target='_blank'>
                                    <img align='center' border='0' src='https://appointpet.infinityfreeapp.com/Assets/logo.png' alt='Logo' style='outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 44%;max-width: 246.4px;' width='246.4'/>
                                    </a>
                                </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
        
                
                          <tr>
                            <td style='overflow-wrap:break-word;word-break:break-word;padding:32px 10px 0px;font-family:sans-serif;' align='left'>      
                                <div style='color: #6f4c29; line-height: 180%; text-align: center; word-wrap: break-word;'>
                                    <p style='font-size: 14px; line-height: 180%;'>Manila, Philippines</p>
                                    <p style='font-size: 14px; line-height: 180%;'>+63-912-345-6789</p>
                                </div>
                            </td>
                          </tr>
        
                      <table style='font-family:sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
                        <tbody>
                          <tr>
                            <td style='overflow-wrap:break-word;word-break:break-word;padding:10px;font-family: sans-serif;' align='left'>
                                <table height='0px' align='center' border='0' cellpadding='0' cellspacing='0' width='82%' style='border-collapse: collapse;table-layout: fixed;border-spacing: 0;vertical-align: top;border-top: 1px solid #6f4c29;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'>
                                <tbody>
                                    <tr style='vertical-align: top'>
                                    <td style='word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%'>
                                        <span>&#160;</span>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
        
                      <table style='font-family:sans-serif;' role='presentation' cellpadding='0' cellspacing='0' width='100%' border='0'>
                        <tbody>
                          <tr>
                            <td style='overflow-wrap:break-word;word-break:break-word;padding:0px 10px 13px;font-family:sans-serif;' align='left'>
                              
                                <div style='color: #6f4c29; line-height: 180%; text-align: center; word-wrap: break-word;'>
                                <p style='font-size: 14px; line-height: 180%;'>&copy; 2022 All Rights Reserved</p>
                                </div>
                      
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      
                </div>
            </div>
        </div>";
	$mail->Body = $mail_template;
	$mail->send();
} else {
	$Message = "Error";
}

$response[] = array("Message" => $Message);

echo json_encode($response);