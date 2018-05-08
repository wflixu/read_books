<?php
 $dbc = mysqli_connect('127.0.0.1','root','','mismatch');
 if(isset($_POST['submit'])){
     $username = mysqli_real_escape_string($dbc,trim($_post['username']));
     $password1 = mysqli_real_escape_string($dbc,trim($_post['password1']));
     $password2 = mysqli_real_escape_string($dbc,trim($_post['password2']));


     if(!empty($username)&&!empty($password1)&&!empty($password2) &&($password1==$password2)){
         $query="SELECT * FROM mismatch_user WHERE username='$username'";
         $data=mysqli_query($dbc,$query);
        if(mysqli_num_rows($daata)==0){
            $query ="INSERT INTO mismatch_user (username,password,join_date) VALUES ('$username,SHA('$password1'),NOW())";
            mysqli_query($dbc,$query);
           echo '<p> You new count have been successfully created.You\'re now ready to login  and <a href="editprofile.php">Edit you profile</a>.</p>';
            mysqli_close($dbc);
            exit();
        }else{
            echo '<p class="error"> An account already exists for this username.Please use a different address</p>';
            $username=="";
        }
        
    }else{
         echo '<p class="error"> You must enter all of the sign-up data ,including the desired password twice.</p>';
     }
 }

mysqli_close($dbc);
 
?>

<p>Please enter yhour username and desired password to sign up to Mismatch.</p>
<form action="<?php echo $_SERVER['PHT_SELF']?>" method='post'>
    <fieldset>
        <legend>Refistration Info</legend>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" value="<?php if(!empty($username)) echo $username; ?>"><br>
        <label for="password1">Password:</label>
        <input type="text" id="password1" name="password1" ><br>
        <label for="password2">Password(retype):</label>
        <input type="text" id="password2" name="password2" ><br>
    </fieldset>
    <input type="submit" value="Sign Up " name="submit">
</form>