<?php
if(!isset($_SERVER['PHP_AUTH_USER'])||!isset($_SERVER['PHP_AUTH_PW'])){
    header('HTTP/1.1 401 Unauthorized');
    header('WWW-Authenticate:Basic realm = "Mismatch"');
    exit('<h3>Mismatch </h3> Sorry ,you must enter your username and password to log in and access this page.');
} 

// 连接数据库
$dbc= mysqli_connect('127.0.0.1','root','','mismatch');

$user_username = mysqli_real_escape_string($dbc, trim($_SERVER['PHP_AUTH_USER']));
$user_password =  mysqli_real_escape_string($dbc, trim($_SERVER['PHP_AUTH_PW']));
echo $user_password;
echo $user_username;

$query = "SELECT id ,username FROM mismatch_user WHERE username = '$user_username' AND ".
" password = SHA ('$user_password')";
$data  = mysqli_query($dbc,$query);

if(mysqli_num_rows($data)==1){
    $row = mysqli_fetch_array($data);
    $id=$row['id'];
    $username = $row['username'];
}else{
    header('HTTP/1.1 401 Unauthorized');
    header('WWW-Authenticate:Basic realm="Mismatch"');
    exit('<h3>Mismatch </h3> Sorry ,you must enter your username and password to log in and access this page.');
}

echo '<p class="login">You are logged in as '.$username.'.</p>'


?>