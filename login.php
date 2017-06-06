<?php

require_once("./API/qqConnectAPI.php");

//$oauth = new Oauth();
$qc = new QC();
//$qc = new QC($access_token, $openid);
//$oauth->qq_login();
$qc->qq_login();
