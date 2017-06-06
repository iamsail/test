<?php
return array(
	//'配置项'=>'配置值'
    'URL_MODEL'=>2,
    'URL_HTML_SUFFIX'       =>  'html|htm|shtml',  // URL伪静态后缀设置
    'DB_TYPE'=>'mysql',//数据库类型
    'DB_HOST'=>'localhost',//数据服务器地址
    'DB_NAME'=>'coalball',//数据库名
    'DB_USER'=>'root',//数据库用户名
    'DB_PWD'=>'sail',//数据库用户密码
    'DB_PORT'=>'3306',//数据库端口
    'DB_PREFIX'=>'cl_',//数据库表前缀
    //开启主从读写分离
    //'DB_RW_SEPARATE'=>true,
    //多个主数据库服务器
    //'DB_MASTER_NUM'=>'2',

    'SESSION_AUTO_START' =>true,//默认开启？自己加的
);