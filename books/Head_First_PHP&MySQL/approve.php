<?php
require_once('authorize.php');
?>
<?php
require_once('appvars.php');
require_once('connectvars.php');

if(isset($_POST['submit'])){
    if($_POST['confirm']=='Yes'){
        $dbc=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
        $query="UPDATE guitarwars SET approved =1 WHERE id='$id' ";
        mysqli_query($dbc,$query);
        mysqli_close($dbc);

        echo '<p>The high score of '.$score.'for'.$name.'was successfully approved</p>';
    }else{
        echo '<p class="error">Sorry ,there was a problem approving the high scorel.</p>';
    }
}
echo '<p><a href="admin.php">&lt;&lt;Back to admin page</a></p>';
?>