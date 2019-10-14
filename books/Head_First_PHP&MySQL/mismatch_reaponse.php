$query = "SELECT * FROM mismatch_response WHERE id='".$_SESSION['id']."''";
$data = mysqli_query($dbc,$query);
if(mysqli_num_rows(($data))==0){
    $query="SELECT * FROM mismatch_topic ORDER BY category_id,topic_id";
    $data=mysqli_fecth_array($dbc,$query);
    $topicIDs=array();
    while($row=mysqli_fetch_array($data)){
        array_push($topicIDs,$row['topic_id']);
    }
    foreach($topciIDs as $tipic_id){
        $query = "INSERT INT  mismatch_response "."(id,topic_id) VALUES ('".$_SESSION['user_id']."','$topic_id'";
        mysqli_query($dbc,$query);
    }
}
if(isset($_post['submit'])){
    foreach($_POST as $resopnse_id =>$response){
        $query = " UPDATE  mismatch_response  SET response ='$response'"."WHERE response_id='$response_id'";
        mysqli_query($dbc,$query);
    }
    echo '<p>  Your resopnse have been saved.</p>'
}