<?php
	 ini_set('display_errors', 1);
	 ini_set('display_startup_errors', 1);
	 error_reporting(E_ALL);

	 use PHPMailer\PHPMailer\PHPMailer;
	 use PHPMailer\PHPMailer\Exception;
	 

	 require 'phpmailer/src/Exception.php';
	 require 'phpmailer/src/PHPMailer.php';
	 require 'phpmailer/src/SMTP.php';

	 $mail = new PHPMailer(true);
	 $mail->CharSet = 'UTF-8';
	 $mail->setLanguage('ru', 'phpmailer/language/');
	 $mail->IsHTML(true);

    //  $mail->Host = 'mail.hosting.reg.ru';
	//  $mail->Port = 465;
	//  $mail->Username = 'info@doktoronko.com';
	//  $mail->Password = '19840414aAa';
	
     $mail->Host = 'smtp.gmail.com';
	 $mail->Port = 465;
	 $mail->Username = 'aleksejmiheicev61834@gmail.com';
	 $mail->Password = 'mixei5063757';
	//От кого письмо
	$mail->setFrom('info@doktoronko.com');
	//Кому отправить
	$mail->addAddress('gluk-90@list.ru');
	// $mail->addAddress('info@doktoronko.com');
	 //Тема письма
     $mail->Subject = 'Письмо с моего сайта';


	 //Тело письма
	 $body = '<h1>Здравствуйте</h1>';
	
	//  Сюда передаются данные из скрытого поля
     if(trim(!empty($_POST['which']))){
        $body.='<h1><strong></strong> '.$_POST['which'].'</h1>';
    }
	 if(trim(!empty($_POST['name']))){
	 	$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	 }
     if(trim(!empty($_POST['city']))){
        $body.='<p><strong>Город:</strong> '.$_POST['city'].'</p>';
    }
    if(trim(!empty($_POST['whatsapp']))){
        $body.='<p><strong>Whatsapp:</strong> '.$_POST['whatsapp'].'</p>';
    }
    if(trim(!empty($_POST['viber']))){
        $body.='<p><strong>Viber:</strong> '.$_POST['viber'].'</p>';
    }
    if(trim(!empty($_POST['skype']))){
        $body.='<p><strong>Skype:</strong> '.$_POST['skype'].'</p>';
    }
	 if(trim(!empty($_POST['phone']))){
	 	$body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
	 }
	 if(trim(!empty($_POST['email']))){
	 	$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	 }
	
	 if(trim(!empty($_POST['message']))){
	 	$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	 }
	
	 $mail->msgHTML($body);

	// //Отправляем
	 try {
	 	if (!$mail->send()) {
	 		$message = 'Ошибка';
	 	} else {
	 		$message = 'Данные отправлены!';
	 	}
	 } catch (\Exception $e) {
	 	$message = $e->getMessage();
	 }

	 $response = ['message' => $message];

	 header('Content-type: application/json');
	 echo json_encode($response);
?>
