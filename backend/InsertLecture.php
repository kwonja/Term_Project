<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
$conn = mysqli_connect("192.168.100.3","kwonsungmin","1234","term_project",4567);
mysqli_query($conn,"
insert into Lecture(L_id,Name,Lecture_time,Date,Level)
VALUES 
(14,'수영','18:00~18:50','화/목','1111')
");
?>