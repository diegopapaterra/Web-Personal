<?php

$to = "diegopapaterra@gmail.com";
$subject = "Web Personal";
$txt = "El siguiente mensaje es enviado a traves del formulario de contacto de www.diegopapaterra.com - ".$_POST['mensaje'];
$headers = $_POST['nombre']." ".$_POST['email'];

mail($to,$subject,$txt,$headers);
header('location:../index.html?msgEnviado=true');
?>