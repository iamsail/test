<?php
namespace Home\Controller;
use Think\Controller;
use PHPMailer;
import("PHPMailer.phpmailer");
import("PHPMailer.PHPMailerAutoload");

class IndexController extends Controller {
    public function index(){
        $client = M('client');
        $headImgUrl = $client ->field(headimg,uid)->select();
        $this->assign('headImgUrl',$headImgUrl );
        $this->display('/index');
        echo $testJson;
    }

    //发布需求的图片上传
    public function upload(){
        if(isset($_POST['submit'])){
            $upload = new \Think\Upload();// 实例化上传类
            $upload->maxSize   =     3145728 ;// 设置附件上传大小
            $upload->exts      =     array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
            $upload->rootPath  =     './Application/Common/Common/Uploads/'; // 设置附件上传根目录
            $upload->savePath  =     ''; // 设置附件上传（子）目录

            // 上传文件
            $info   =   $upload->upload();
            $model = M('xq');
            $timeLength = $_POST['timeLength'];
            $data = array
            ('title' => $_POST['title'],
             'update_time' => date('Y-m-d'),
             'content'  => $_POST['content'],
             'savename0' => $info['0']['savename'],
             'path0' => $info['0']['savepath'],
             'savename1' => $info['1']['savename'],
             'path1' => $info['1']['savepath'],
             'cate' =>  $_POST['cate'],
             'overtime' => date('Y-m-d',time() + 3600*24*$timeLength)
            );
            $right = $model->add($data);
            if($right){
                $this->success('发布成功');
            }else{
                $this->error('发布失败');
            }
        }else{
            $this->error('提交失败');
        }
    }

    //注销
    public function logout(){
            $_SESSION = array(null);
            session_destroy();
            $this->success('注销成功');
    }


    //返回需求json
    public function test(){
        $xq = M('xq');
        $xqinfo = $xq ->order('id desc')->select();
        $testJson = JSON_encode($xqinfo);
        echo $testJson;
    }

    //用户注册
    public function register(){
        $regUsers = M('regusers');
        $data = array(
            'status'=> 0,
            'user_email' => $_POST['email'],
            'password' => $_POST['password']
        );
        $isRight = $regUsers->add($data);
        if($isRight){
            if($this->mailList()){
                $this->success('注册成功');
            }
        }else{
            $this->error('注册失败');
        }
    }

    //用户登录
    public function login(){
        $regUsers = M('regusers');
        $where['user_email'] = $_GET["email"];
        $where['password'] = $_GET["password"];
        $status = $regUsers->field("status")->select();
        $isEqual = $regUsers->where($where)->select();
        if(!$status){
            $this->error('尚未注册');
        }else{
            if($isEqual){
                $_SESSION['name'] = $_GET["email"];
                $this->success('登录成功');
            }else{
                $this->error('邮箱或密码错误');
            }
        }
    }

    //发送邮件
    public function sendMail($host,$fromEmail,$fromPwd,$fromName,$toEmail,$toName,$subject,$content){
        $mail = new PHPMailer();
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = $host;                        // 邮件服务器地址
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->CharSet = 'UTF-8';                      //设置邮件编码
        $mail->Encoding = "base64";                     //使用base64加密邮箱和密码
        $mail->Username = $fromEmail;                 // SMTP username，个人邮箱地址
        $mail->Password = $fromPwd;                           // SMTP password，个人邮箱密码
        $mail->From = $fromEmail;                           // 发件人邮箱地址
        $mail->FromName = $fromName;                           // 发件人名称
        $mail->addAddress($toEmail,$toName);                           // 添加接受者
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->msgHTML($content);
        return $mail->send();
    }


    //队列发送邮件，调用sendMail
    public function mailList(){
        $link = mysqli_connect("localhost","root","sail","",3306);
        mysqli_select_db($link,"coalball");
        mysqli_set_charset($link,'utf8');	//设定字符集
        $sqlZero = "SELECT * FROM cl_regusers WHERE status = 0 ORDER BY id ASC LIMIT 5";
        $res = mysqli_query($link,$sqlZero);
        while($row = mysqli_fetch_assoc($res)){
            $mailList[]=$row;
        }
        if(!empty($mailList)){
            foreach($mailList as $k => $v){
                if($this->sendMail("smtp.163.com",
                    "15262042918@163.com",
                    "123456789b",
                    "翔工作室(学生在线)",
                    $v['user_email'],
                    'test',
                    "煤球网邮件再次测试",
                    file_get_contents("Application/Home/Common/emailTemplate.html"))){
                    mysqli_query($link,"UPDATE cl_regusers SET status = 1 WHERE id =".$v['id']);
                }
            }
        }
        return true;
    }
}