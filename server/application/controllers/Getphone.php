<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Getphone extends CI_Controller {
  public function index() {
    header("Content-Type:text/html;charset=utf8"); 
    header("Access-Control-Allow-Origin: *"); //解决跨域
    header('Access-Control-Allow-Methods:GET');// 响应类型  
    header('Access-Control-Allow-Headers:*'); // 响应头设置 

    $openid = $_GET["openId"];

    $host = 'localhost';
    $user = 'root';
    $pass = 'maoda789#';
    $db = 'maoda';
    $conn=mysqli_connect($host,$user,$pass,$db); 
    mysqli_query($conn,"SET NAMES UTF8");//解决中文乱码问题

    $sql = "SELECT * FROM phone WHERE openid='$openid'";
    $res = mysqli_query($conn, $sql);

    $result = array();
    while ($row = mysqli_fetch_assoc($res)) {
      $result[] = $row;
    }

    $this->json([
        'code' => 0,
        'data' => ['phone' => $result]
    ]);

  }
}
