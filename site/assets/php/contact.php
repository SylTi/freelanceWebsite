<?php

if (!isset($_POST['message']))
    parse_str($argv[1], $_POST);
if(isset($_POST['message'])){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
    
	
	$to      = 'sylti.consulting@gmail.com';
	$subject = 'Contact Freelance Website';

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	if($status == TRUE){	
		$res['sendstatus'] = 'done';
	
		//Edit your message here
		$res['message'] = 'Form Submission Successful';
    }
	else{
		$res['message'] = 'Failed to send mail. Please mail me to ' + $to;
	}

	echo json_encode($res);
}
else
{
    $res['message'] = "No post data";
    echo json_encode($res);
}

?>