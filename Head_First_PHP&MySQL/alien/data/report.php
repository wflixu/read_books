<html>
<head>
<title> Aliens Abducted Me - Report and Abduction</title>
</head>
<body>
    <h2>Aliens Abducted Me - Report and Abduction</h2>
</body>
</html>  
<?php

   $when_it_happened = $_POST['whenithappened'];
   $how_long = $_POST['howlong'];
   $alien_description = $_POST['description'];
   $fang_spotted = $_POST['fangspotted'];
   $email = $_POST['email'];
   $firstname = $_POST['firstname'];
   $lastname = $_POST['lastname'];
   $other = $_POST['other'];
   $what_they_did = $_POST['whattheydid'];
   $subject = "alien abducted report";
   $toemail="geront@126.com";

    // 数据库存储
    $conn = mysqli_connect('127.0.0.1','root','','aliendatabase','3306');
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
    $query = "INSERT INTO aliens_abduction ( first_name, last_name, when_it_happened, how_long,".
    " aliens_description, what_they_did, fang_spotted, other, email) ".
    " VALUES('$firstname', '$lastname' , '$when_it_happened' , '$how_long', '$alien_description', '$what_they_did' , '$fang_spotted',".
    "'$other','$email')"; 
    $result= mysqli_query($conn, $query) or die('error querying database');
   
    mysqli_close($conn);

 

   $msg= 'Thanks for submmitting the form, <br>';
   $msg=$msg.'You were abducted :'.$when_it_happened.'<br>';
   $msg=$msg.'and were gone for ?'.$how_long.'<br>';
   $msg=$msg.'Describe them?'.$alien_description.'<br>';
   $msg=$msg.'Was Fang there?'.$fang_spotted.'<br>';
   $msg=$msg.'Your email address is: '.$email.'<br>'; 
   $msg=$msg.'Your name is: '.$firstname.$lastname.'<br>'; 
   $msg=$msg.'Other things your add: '.$other.'<br>'; 


    mail($toemail,$subject,$msg,"From".$email);
    echo $msg;
?>

</body>
</html>