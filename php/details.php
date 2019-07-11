<?php
require "conn.php";
$id=$_GET['sid'];
$sql="select * from product where id='$id'";
$res = $conn->query($sql);
$row = $res->fetch_assoc();
$json = json_encode($row);
echo $json;
$conn->close();
?>