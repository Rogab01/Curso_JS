<?php
if(isset($_POST)){
    error_reporting(0);

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];
    
    $domain = $_SERVER["HTTP_HOST"];
    $to = "rogab01@gmail.com";
    $subject_mail = "Contacto desde el formulario del sitio $domain";
    $message = "
        <p>
            Datos enviados desde el formulario del siio <b>$domain</b>
        </p>
        <ul>
            <li>Nombre: <b>$name</b></li>
            <li>Email: <b>$email</b></li>
            <li>Asnto: $subject</li>
            <li>Comentarios: $comments</li>
        </ul>
    ";

    $headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; charset= utf-8\r\n" . "From: envio automatico No Responder <no-reply@$domain>";

    $send_mail = mail($to,$subject_mail,$message,$headers);

    if($send_mail){
        $res = [
            "err" => false,
            "message"=>"Tus Datos han sid enviados "
        ];  
    }else{
        $res = [
            "err" => true,
            "message"=>"ERROR al enviar tus Datos, intenta nuevamente"
        ];  
    }

    //header("Acces-Conrol_allow_Origin:https://delfos.co");
    header("Acces-Conrol_allow_Origin:*");
    header("content-Type: application/json");
    echo json_encode($res);
    exit;
}