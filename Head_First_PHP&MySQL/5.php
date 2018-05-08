<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>5章</title>
</head>
<body>
<h2>Guitar wars - High Scores</h2>
<p>Welcome, Guitar warrior, do you have what it takes to crack the high score list ? if so ,just <a href="addscore.php">add you own score</a></p>
    <?php
        $dbc = mysqli_connect('127.0.0.1','root','','gwdb');
        $query = "SELECT * FROM guitarwars";
        $data = mysqli_query($dbc,$query) 
        or die("Error in database query");

        echo '<table>'
        while( $row = mysqli_fetch_array($data)){
            echo '<tr><td class="scoreinfo>';
            echo '<span class="score">'.$row['score'].'</span>';
            echo '<strong>Name:</strong>'.$row['name'].'<br>';
            echo '<strong>Date:</strong>'.$row['date'].'</td></tr>';
        }
        echo '</table>';
        mysqli_close($dbc);
    ?>



</body>
</html>