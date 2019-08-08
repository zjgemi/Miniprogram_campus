<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Mctlogin extends CI_Controller {
  public function index() {
    header("Content-Type:text/html;charset=utf8"); 
    header("Access-Control-Allow-Origin: *"); //解决跨域
    header('Access-Control-Allow-Methods:POST');// 响应类型  
    header('Access-Control-Allow-Headers:*'); // 响应头设置 

    $name = $_POST['name'];
    $password = $_POST['password'];

    $host = 'localhost';
    $user = 'root';
    $pass = 'maoda789#';
    $db = 'maoda';
    $conn=mysqli_connect($host,$user,$pass,$db); 
    mysqli_query($conn,"SET NAMES UTF8");//解决中文乱码问题
    $sql = "select * from login where name = '$name' and password = '$password'";
    $res = mysqli_query($conn, $sql);
    if(mysqli_num_rows($res) == 0) {
      echo "<script>alert('用户名和密码不匹配')</script>";
      echo "<script>location.href='/h5/merchant_login.html'</script>";
    }
    else {
      session_start();
      $row = mysqli_fetch_assoc($res);
      $_SESSION['mctid'] = $row['mctid'];
      if($_SESSION['mctid'] < 0) {
        echo "<script>location.href='/h5/print_merchant.html'</script>";
      }
      else {
        echo "<script>location.href='/h5/merchant.html'</script>";
      }
    }

  }
}
