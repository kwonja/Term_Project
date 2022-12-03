<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
$conn = mysqli_connect("192.168.100.3","kwonsungmin","1234","madang",4567);
$sql = "
  INSERT INTO Book
    (bookid,bookname,publisher,price)
    VALUE(
        '{$_POST['bookid']}',
        '{$_POST['bookname']}',
        '{$_POST['publisher']}',
        '{$_POST['price']}'
    )
";
$result = mysqli_query($conn, $sql);

if($result === false){
  echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요';
  error_log(mysqli_error($conn));
} else {
  echo '성공했습니다. <a href="index.php">돌아가기</a>';
}
?>