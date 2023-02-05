<?php

$to = "mafia.papyrus@yandex.ru";
$from = "Заявка с сайта Tzeezotje";

$name = trim($_POST['bio']);
$phone = trim($_POST['phone']);
$page = 'Страница тест';

$message = "Имя: $name \nТелефон: $phone"; 

$headers  = "Content-type: text/html; charset=utf-8\r\n";
$result .= $from;

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
	mail($to, $theme, $message, $headers)
} else {
	echo 1;
}
