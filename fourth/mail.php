<?php
header('Content-Type: application/json');
 $data = [ 'data' => 'success', 'error' => false ];
// the message
$msg = "Name: ".$_POST['name']."\n";
$msg .= "Email: ".$_POST['email']."\n";
$msg .= "Message: ".$_POST['message']."\n";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("imrx@live.com","Contact Form: 4th Dimension Studio",$msg);

echo json_encode($data);
?>