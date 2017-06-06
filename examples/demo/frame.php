<?php
	/**
	 * 站内应用通过IFrame方式在易班开放平台中接入显示
	 * 所以不能直接在浏览器打开本地地址进入浏览
	 * 而是打开易班管理中心中对应站内应用的网站地址进行浏览
	 *
	 * SDK中的方式会检测是否有易班开放平台提供的参数，若无则会抛出异常
	 */


	/**
	 * 包含SDK
	 */
	require("../../classes/yb-globals.inc.php");

	session_start();

	
	/**
	 * 配置文件
	 */
	include('config.php');

	/**
	 * 站内应用需要使用AppID、AppSecret和应用入口地址初始化
	 *
	 */
	$api = YBOpenApi::getInstance()->init($cfg['x']['appID'], $cfg['x']['appSecret'], $cfg['x']['callback']);
	
	if (empty($_SESSION['token']))
	{
		try
		{
			/**
			 * 调用perform()验证授权，若未授权会自动重定向到授权页面
			 * 授权成功返回的数组中包含用户基本信息及访问令牌信息
			 */
			$info = $api->getFrameUtil()->perform();
			
			#print_r($info);
								#// 可以输出info数组查看
								// 访问令牌[visit_oauth][access_token]
			
//			$_SESSION['token']	= $info['visit_oauth']['access_token'];
//			$_SESSION['usrid']	= $info['visit_user']['userid'];
//			$_SESSION['name']	= $info['visit_user']['username'];

//			=================================自己加入的

//			=================================自己加入的
		}
		catch (YBException $ex)
		{
			echo $ex->getMessage();
		}
	}
	/**
	 * adaptive()生成页面自适合代码，是否需要调用由开发者自行决定
	 */
//	$info = $api->getFrameUtil()->perform();
//	print_r($info);
	$adaptive = $api->getFrameUtil()->adaptive();
	$info = $api->getFrameUtil()->perform();
	$_SESSION['token']	= $info['visit_oauth']['access_token'];
	$_SESSION['usrid']	= $info['visit_user']['userid'];
	$_SESSION['name']	= $info['visit_user']['username'];

//==================加入用户头像

$ap = YBOpenApi::getInstance()->bind($_SESSION['token']);
$user = $ap->getUser();
$one = $user->other($_SESSION['usrid']);
$head_img = $one['info']['yb_userhead'];
$_SESSION['img']	= $one['info']['yb_userhead'];
//==================加入用户头像



//	$_SESSION['name']	= $info['visit_user']['username'];
	$link=mysqli_connect("localhost","root","sail","",3306);	//连接数据库
//	$link=mysqli_connect("localhost","root","sail","",3306);	//连接数据库
	//连接错误时的提示
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
	#####################################################################
	#
	#
	# YBOpenApi::getInstance()->init()->getFrameUtil()->perform()
	# 调用可以完成站内应用的授权验证流程;
	#
	# 下面可以实现应用的相关业务流程，DEMO实例中只显示用户名！
	#
	#
	###########################################################################
?>


<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<meta charset="UTF-8">
<!--	<meta http-equiv="refresh" content="3; url=http://123.207.83.243/updown/index.php">-->
<!--	<meta http-equiv="refresh" content="3; url=http://www.sail.name/coalball/index.html">-->
	<meta http-equiv="refresh" content="3; url=http://123.207.83.243/coalball/index.php">
	<title>站内应用接入</title>
</head>
<body>
	<div>
		<h3>
			登录成功
		</h3>
	</div>
	<?php echo $adaptive; ?><!-- // 页面自适应代码 -->
</body>
</html>
