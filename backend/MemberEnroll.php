<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

$conn = mysqli_connect("192.168.100.3","kwonsungmin","1234","term_project",4567);
echo `{$_POST['M_id']}`;

$sql = "
  INSERT INTO Member
    (M_id,Name,Job,Pnumber,Bdate,Start_date)
    VALUE(
        '{$_POST['M_id']}',
        '{$_POST['Name']}',
        '{$_POST['Job']}',
        '{$_POST['Pnumber']}',
        '{$_POST['Bdate']}',
        '{$_POST['Start_date']}'
        
    );
    INSERT INTO Locker
    (Locker_id,M_id,Password)
    VALUE(
        '{$_POST['Locker_id']}',
        '{$_POST['M_id']}',
        '{$_POST['Password']}'
    );
    INSERT INTO Enroll
    (M_id,L_id,Price)
    VALUE(
        '{$_POST['M_id']}',
        '{$_POST['L_id']}',
        '{$_POST['Price']}'
    );
";
$result = mysqli_multi_query($conn, $sql);

if($result === false){
  echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요';
  error_log(mysqli_error($conn));
} else {
  echo '성공했습니다. <a href="index.php">돌아가기</a>';
}
//php 결과 디버깅
if($result === false){
    echo mysqli_error($conn);
}

?>