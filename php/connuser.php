<?php
// header('content-type:text/html;charset=utf-8');
// define('HOST','localhost');
// define('USERNAME','root');
// define('PASSWORD','');
// define('DBNAME','huawei');

// $conn=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);

// if($conn->connect_error){
//     die('数据库连接失败：'.$conn->connect_error);
// };
// $conn->query('SET NAMES UTF8');
require "conn.php";
$sql="select * from users";
$res=$conn->query($sql);
$arr=array ();
for($i=0;$i<$res->num_rows;$i++){
    $arr[$i]=$res->fetch_assoc();
};
echo json_encode($arr);