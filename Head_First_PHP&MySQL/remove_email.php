<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p>Please select email address to delete from the email list and click remove</p>
    <from action="<?php    echo $_SERVER['PHP_SELF'] ;  ?>" method="post">
    <?php
       $dbc=mysqli_connect('127.0.0.1','root','','elvis_store')
       or die('Error connecting to MySQL server');

       if(isset($_POST['submit'])){
           foreach($_POST['todelete'] as $delete_id){
               $query="DELETE FROM email_list WHERE id='$delete_id'";
               mysqli_query($dbc,$query)
               or die('Error query database.');
           }
           echo 'Customer(s) removed. <br>';
       };

       $query = "SELECT * FROM email_list";
       $result = mysqli_query($dbc,$query);
       while($row=mysqli_fetch_array($result)){
           echo '<input type="checkbox" value=">'.$row['id'].'"name="todelete[]" />';
           echo $row['first_name'];
           echo $row['last_name'];
           echo $row['email'];
           echo '<br>';
       };
       mysqli_close($dbc);


    ?>
    
    <input type="submit" name="submit" value="Remove">
    
    
    </from>


</body>
</html>