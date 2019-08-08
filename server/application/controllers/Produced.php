<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Produced extends CI_Controller {
  public function index() {
    header("Content-Type:text/html;charset=utf8"); 
    header("Access-Control-Allow-Origin: *"); //解决跨域
    header('Access-Control-Allow-Methods:POST');// 响应类型  
    header('Access-Control-Allow-Headers:*'); // 响应头设置 

    $transaction = $_POST['transaction'];

    $host = 'localhost';
    $user = 'root';
    $pass = 'maoda789#';
    $db = 'maoda';
    $conn=mysqli_connect($host,$user,$pass,$db); 
    mysqli_query($conn,"SET NAMES UTF8");//解决中文乱码问题

    $producttime = date("Ymd h:i:sa");
    $sql = "update transactions set state='制作完成', producttime='$producttime' where transaction = '$transaction'";
    mysqli_query($conn,$sql); 

    $this->json([
        'code' => 0,
        'data' => $sql//$res
    ]);

  }
}
