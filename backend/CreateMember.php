<?php
header('Access-Control-Allow-Origin: http://localhost:3000');


$conn = mysqli_connect("192.168.100.3","kwonsungmin","1234","term_project",4567);
$sql = "create table Member(
    M_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    Name varchar(10),
    Job varchar(10),
    Pnumber varchar(20),
    Bdate varchar(20),
    Start_date varchar(20),
    L_id INTEGER NOT NULL,
    FOREIGN KEY (L_id) REFERENCES Lecture(L_id) ON DELETE CASCADE )";

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