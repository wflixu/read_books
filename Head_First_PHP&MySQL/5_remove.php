<?php
require_once('5_appvars.php');
require_once('authorize.php');


$dbc = mysqli_connect(db_host,db_user,db_pwd,db_name);
$query ="SELECT * FROM guitarwars ORDER BY score DESC,date ASC";
$data = mysqli_query($dbc,$query);

echo '<table>';
while($row = mysqli_fetch_array($data)){
    echo '<tr class="scorerow"><td><strong>'.$row['name'].'</strong></td>';
    echo '<td>'.$row['date'].'</td>';
    echo '<td>'.$row['score'].'</td>';
    echo '<td><a href="removescore.php?id='.$row['id'].'&amp;data='.$row['date'].'&amp;name='.$row['name'].
    '&amp;score='.$row['score'].'&amp;screenshot='.$row['screenshot'].'">Remove</a></td></tr>';
    echo '</tble>';
    mysqli_clost($dbc);

}


?>