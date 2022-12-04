<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

$conn = mysqli_connect("192.168.100.3","kwonsungmin","1234","term_project",4567);
$sql = "SELECT * FROM Instructor";
$result = mysqli_query($conn, $sql);
// var_dump($result->num_rows);
$myArray = array();
// echo "<h1>single row</h1>";
// $row = mysqli_fetch_array($result);
// echo '<h1>'.$row['bookid'].'</h1>'
// echo $row['bookname'];
// echo '<br/>';
while($row = $result->fetch_assoc()) {
    $myArray[] = $row;
}
echo json_encode($myArray);

//php 결과 디버깅
if($result === false){
    echo mysqli_error($conn);
}
?>