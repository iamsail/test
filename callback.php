<?php
require_once("API/qqConnectAPI.php");
//session_start();

$qc = new QC();
$acs = $qc->qq_callback();
$oid = $qc->get_openid();
$qc = new QC($acs,$oid);
$uinfo = $qc->get_user_info();


$_SESSION['name'] =  $uinfo["nickname"];
$_SESSION['usrid'] = $oid;
$head_img = $uinfo['figureurl_qq_1'];
$_SESSION['img'] = $uinfo['figureurl_qq_1'];
setcookie('id',$oid,time()+86400);

//操作数据库

$link=mysqli_connect("localhost","root","sail","",3306);	//连接数据库
if(mysqli_connect_errno())
{
    exit(mysqli_connect_error());
}
mysqli_select_db($link,"coalball");	//选择数据库
mysqli_set_charset($link,'utf8');	//设定字符集
$sql = "SELECT uid FROM cl_client WHERE uid = '$_SESSION[usrid]'";
$result = mysqli_query($link,$sql);	//执行SQL语句
$num = mysqli_num_rows($result);	//统计执行结果影响的行数
if(!$num){
    $sql_insert = "INSERT INTO cl_client(uid,username,headimg) VALUES('$_SESSION[usrid]','$_SESSION[name]','$head_img')";
    $res_insert = mysqli_query($link,$sql_insert);
}

?>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="3; url=http://localhost/coalball/index.php">
    <title>站内应用接入</title>
</head>
<body>
<div>
    <h3>
        登录成功
        <?php echo var_dump($uinfo); ?>
        <?php echo var_dump($uinfo["nickname"]); ?>
    </h3>
</div>

</body>
</html>

