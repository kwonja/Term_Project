<?php
header('Access-Control-Allow-Origin: http://localhost:3000');


$conn = mysqli_connect("192.168.100.3","kwonsungmin","1234","term_project",4567);
$sql = "create table Instructor(
    I_id INTEGER PRIMARY KEY,
    Name VARCHAR(10),
    Lecture VARCHAR(10),
    Year VARCHAR(10),
    C_id INTEGER,
    FOREIGN KEY (C_id) REFERENCES Center(C_id) ON DELETE CASCADE)";

$result = mysqli_query($conn, $sql);
//php 결과 디버깅
if($result === false){
echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요';
error_log(mysqli_error($conn));
} else {
    echo '성공했습니다.';
}
// var_dump($result->num_rows);
// $myArray = array();
// echo "<h1>single row</h1>";
// echo $row['bookname'];
// echo '<br/>';

// //php 결과 디버깅
// if($result === false){
//     echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요';
//     error_log(mysqli_error($conn));
//   } else {
//     echo '성공했습니다. <a href="index.php">돌아가기</a>';
//   }

// if($result === false){
//     echo mysqli_error($conn);
// }
?>