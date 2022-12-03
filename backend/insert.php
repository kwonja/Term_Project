<?php

$conn = mysqli_connect("192.168.100.3","kwonsungmin","1234","madang",4567);
mysqli_query($conn,"
INSERT INTO Book
(bookid,bookname,publisher,price)
VALUE(
    11,
    '올림픽',
    '올림픽',
    15000
    )
");
?>