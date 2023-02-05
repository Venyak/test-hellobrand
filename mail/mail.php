<?php

$to = "mafia.papyrus@yandex.ru";
$from = "Заявка с сайта Tzeezotje";

$email = $_POST['email'];
$theme = $_POST['theme'];
$mess = $_POST['message'];
$page = 'Страница тест';

$message = '
<html>
<body>
<center>	
<table border=1 cellpadding=6 cellspacing=0 width=90% bordercolor="#DBDBDB">
 <tr><td colspan=2 align=center bgcolor="#E4E4E4"><b>Информация</b></td></tr>
 <tr>
  <td><b>Откуда</b></td>
  <td>'.$page.'</td>
 </tr>
 <tr>
  <td><b>Адресат</b></td>
  <td><a href="mailto:'.$email.'">'.$email.'</a></td>
 </tr>
 <tr>
  <td><b>Тема</b></td>
  <td>'.$theme.'</td>
 </tr>
 <tr>
  <td><b>Сообщение</b></td>
  <td>'.$mess.'</td>
 </tr>
</table>
</center>	
</body>
</html>'; 

$headers  = "Content-type: text/html; charset=utf-8\r\n";
$result .= $from;

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
	mail($to, $theme, $message, $headers)
} else {
	echo 1;
}
