<?php

require "conn.php";
$dn="dn";
$res=$conn->query("select * from product where sx='$dn'");
$arr=array ();
for($i=0;$i<$res->num_rows;$i++){
    $arr[$i]=$res->fetch_assoc();
};
echo json_encode($arr);