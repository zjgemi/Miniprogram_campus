<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Removefile extends CI_Controller {
  public function index() {
    header("Content-Type:text/html;charset=utf8"); 
    header("Access-Control-Allow-Origin: *"); //解决跨域
    header('Access-Control-Allow-Methods:POST');// 响应类型  
    header('Access-Control-Allow-Headers:*'); // 响应头设置 

    $path = $_POST['path'];
    if(file_exists($path)) {
      unlink($path);
      $code = 0;
      $res = "已删除文件".$name;
    }
    else {
      $code = 1;
      $res = "文件不存在";
    }

    $host = 'localhost';
    $user = 'root';
    $pass = 'maoda789#';
    $db = 'maoda';
    $conn=mysqli_connect($host,$user,$pass,$db); 
    mysqli_query($conn,"SET NAMES UTF8");//解决中文乱码问题

    $sql = "update printfile set state='打印完成' where path = '$path'";
    mysqli_query($conn,$sql); 

    $this->json([
        'code' => $code,
        'data' => $res
    ]);

  }
}
