<?php
     require_once('5_appvars.php');
    $name=$_POST['name'];
    $score = $_POST['score'];
    $screenshot = $_FILES['screenshot']['name'];
    $temp_path = $_FILES['screenshot']['tmp_name'];
    $dbc = mysqli_connect('127.0.0.1','root','','ch5');
    $sql = "INSERT INTO guitarwars VALUES(NULL,NOW(),'$name','$score','$screenshot') ";
    $result = mysqli_query($dbc,$sql)
    or die('Error in database query!');

    if(!empty($result)) {
        echo 'add score success! <br>';
        echo "file in $temp_path <br>";
        echo $_FILES['screenshot']['type']."<br>";
        echo '<img src="'. GW_UPLOADPATH.$screenshot.'" alt="img" width="200">';
    }
    $target = GW_UPLOADPATH.$screenshot;
    move_uploaded_file($_FILES['screenshot']['tmp_name'],$target);

?>