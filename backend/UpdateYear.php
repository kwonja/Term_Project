<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

$conn = mysqli_connect("192.168.100.3","kwonsungmin","1234","term_project",4567);
echo `{$_POST['Year']}`;
$sql = "Update Instructor
SET Year='{$_POST['Year']}'
WHERE Name='김보라'";
$result = mysqli_query($conn, $sql);
$myArray = array();
while($row = $result->fetch_assoc()) {
    $myArray[] = $row;
}
echo json_encode($myArray);

//php 결과 디버깅
if($result === false){
    echo mysqli_error($conn);
}
?>