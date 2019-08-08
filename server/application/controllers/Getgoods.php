<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Getgoods extends CI_Controller {
  public function index() {
    header("Content-Type:text/html;charset=utf8"); 
    header("Access-Control-Allow-Origin: *"); //解决跨域
    header('Access-Control-Allow-Methods:GET');// 响应类型  
    header('Access-Control-Allow-Headers:*'); // 响应头设置 

    session_start();
    if(isset($_SESSION['mctid'])) {
      $mctid = $_SESSION['mctid'];
    }
    else if(isset($_GET['mctid'])) {
      $mctid = $_GET['mctid'];
    }
    else {
      $this->json([
          'code' => 1
      ]);
    }

    if(isset($mctid)) {

      $host = 'localhost';
      $user = 'root';
      $pass = 'maoda789#';
      $db = 'maoda';
      $conn=mysqli_connect($host,$user,$pass,$db); 
      mysqli_query($conn,"SET NAMES UTF8");//解决中文乱码问题
      $sql = "SELECT * FROM goods_$mctid";
      $result = mysqli_query($conn, $sql);

      $res = array();
      while ($row = mysqli_fetch_assoc($result)) {
        $res[] = $row;
      }

      $this->json([
          'code' => 0,
          'data' => ['goods' => $res]
      ]);
    }


  }
}
