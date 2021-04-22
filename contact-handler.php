<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['messgae'];

//change here ur site name
$email_from = 'https://andro-waqar.github.io/contact-form.github.io/'

$email_subject = 'New form submission'

$email_body = "User Name: $name.\n".
"Visitor Email: $visitor_email.\n".
"User Message: $message.\n";

//change here ur email
$to = "test@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

//change here ur page.html
header("Location: index.html");

?>
