<?php
session_start();
if( $_SESSION['user_id']){
    $_SESSION= array(); 
    if(isset($_COOKIE[session_name()])){
        setcookie(session_name(),'',time()-3600);
    }
    session_destroy();
}
$home_url ='http://'.$_SERVER['HTTP_POST'].dirname($_SERVER['PHP_SELF']).'index.php';
header('Location:'.$show_url);

?>