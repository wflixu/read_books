<html>
<head>
<title>  alevis store</title>
</head>
<body>
    <h2></h2>
</body>
</html>  
<?php

   $firstname = $_POST['firstname'];
   $lastname = $_POST['lastname'];
   $email=$_POST['email'];

    // 数据库存储
    $conn = mysqli_connect('127.0.0.1','root','','elvis_store','3306');
	$sql="SET NAMES UTF8";
	mysqli_query($conn,$sql);
    $query = "INSERT INTO email_list ( first_name, last_name, email) ".
    " VALUES('$firstname', '$lastname' , '$email')"; 
    $result= mysqli_query($conn, $query) or die('error querying database');
   
    mysqli_close($conn);

 
    $msg = "Customer added.";

    echo $msg;
?>

</body>
</html>