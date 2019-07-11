<?php

require "conn.php";
$list="list";
$res=$conn->query("select * from product where sx='$list'");
$arr=array ();
for($i=0;$i<$res->num_rows;$i++){
    $arr[$i]=$res->fetch_assoc();
};
echo json_encode($arr);