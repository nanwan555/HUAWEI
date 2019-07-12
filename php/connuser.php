<?php
require "conn.php";
$sql="select * from users";
$res=$conn->query($sql);
$arr=array ();
for($i=0;$i<$res->num_rows;$i++){
    $arr[$i]=$res->fetch_assoc();
};
echo json_encode($arr);