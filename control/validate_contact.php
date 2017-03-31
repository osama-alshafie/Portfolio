<?php
if($_SERVER['REQUEST_METHOD'] == "POST") {
    $username = $_POST['username'];
    $email    = $_POST['email'];
    $phone    = $_POST['phone'];
    $message  = $_POST['message'];
    $msg_text = "Hi Osama\n";
    $msg_text .= "you have received message from someone by your portfolio\n\n";
    $msg_text .= "Name    :\t" . $username;
    $msg_text .= "Email   :\t" . $email;
    $msg_text .= "phone   :\t" . $phone;
    $msg_text .= "message :\n\t" . $message;
    $to = "osama809089@gmail.com";
    $subject = "portfolio_contact_msg";
    $headers = "From: " . $username . "\r\n" . "CC: osama809089@gmail.com";
    if( mail($to,$subject,$msg_text,$headers) == false ) {
        echo "<h1>oops!</h1>";
        echo "<div>Sorry! failur to send the message. your message didn't send.</div>";
    } else {
        echo "<h1>Thanks for sending message</h1>";
        echo "<div>your message is sent successfully.</div>";
    }
} else {
    echo "<h1>oops!</h1>";
    echo "<div>Sorry! something is wrong. you can't conact to me.</div>";
}