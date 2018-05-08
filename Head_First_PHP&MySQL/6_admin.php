<?php

$username = 'rock';
$password = 'roll';
if(!isset($_SERVER['PHP_AUTH_USER'])|| !isset($_SERVER['PHP_AUTH_PW']) ||($_SERVER['PHP_AUTH_USER']!=$username)||($_SERVER['PHP_AUTH_PW']!=$password)){
    header('HTTP/1.1 401 Unauthorized');
    header('WWW-Authenticate:Basic realm="Guitar Wars"');
    exit('<h2>Guitar Wars</h2> Sorry,you must enter a valid user name and password to access this page.');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

