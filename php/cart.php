<?php
require "conn.php";
$res=$conn->query("select * from product");
$arr=array ();
for($i=0;$i<$res->num_rows;$i++){
    $arr[$i]=$res->fetch_assoc();
};
echo json_encode($arr);