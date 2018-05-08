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
  <form action="5_add.php" method="post" enctype="multipart/form-data">
      <lable for="name">Your name:</lable>
      <input type="text" name="name" id="name"><br>
      <lable for="score">Your score:</lable>
      <input type="text" name="score" id="score"><br>
      <lable for="screenshot">Your score screenshot:</lable>
      <input type="file" name="screenshot" id="screenshot"><br>
      <input type="submit" name="submit" value="Add">

  </form>


</body>
</html>