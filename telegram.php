<?php
$name = $_POST['client_name']
$email = $_POST['client_email']
$message = $_POST['client_message']

$token = '5234144367:AAEypCA_95eAOAZPx8TL-0LITq4YXMXP-oc'
$chat_id = "976214723"


$arr = array(
    'Клиент: ' => $name,
    'Email: ' => $email,
    'Сообщение: ' => $message,

);

foreach ($arr as $key => $value){
    $txt. = $key."<b>". urldecode($value)."</br>"."%0A"
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMassage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram){
    return true;
}
else {
    return falce
}
?>