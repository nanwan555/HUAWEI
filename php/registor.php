<?php
header('content-type:text/html;charset=utf-8');
define('HOST','localhost');
define('USERNAME','root');
define('PASSWORD','');
define('DBNAME','huawei');
$conn=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);
if($conn->connect_error){
    die('数据库连接失败：'.$conn->connect_error);
};
$conn->query('SET NAMES UTF8');
if(isset($_POST['username'])){
    $name=$_POST['username'];
    $sql="select * from logining where username='$name'";
    $res=$conn->query($sql);
    if($res->fetch_assoc()){
        echo true;
    }else{
        echo false;
    };
}
    if(isset($_POST['submit'])){
        $username=$_POST['username'];
        $email=$_POST['email'];
        $password=sha1($_POST['password']);
        echo  $username.$email.$password;
        $res=$conn->query("insert logining values (null,'$username','$email','$password',NOW())");
  if($res){
    echo '<script>location.href="http://127.0.0.1:8080/HUAWEI/src/login.html"</script>';
  }      
};
