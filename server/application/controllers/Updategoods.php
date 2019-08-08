<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Updategoods extends CI_Controller {
  public function index() {
    header("Content-Type:text/html;charset=utf8"); 
    header("Access-Control-Allow-Origin: *"); //解决跨域
    header('Access-Control-Allow-Methods:POST');// 响应类型  
    header('Access-Control-Allow-Headers:*'); // 响应头设置 

    session_start();
    if(!isset($_SESSION['mctid'])) {
      $this->json([
          'code' => 1
      ]);
    }
    else if($_SESSION['mctid'] > 0) {

      $mctid = $_SESSION['mctid'];

      $id = $_POST["id"];
      $name = $_POST["name"];
      $photo = $_POST["photo"];
      $descpt = $_POST["descpt"];
      $category = $_POST["category"];
      $price = $_POST["price"];

      if($category=="") {
        $category = "其他";
      }

      $host = 'localhost';
      $user = 'root';
      $pass = 'maoda789#';
      $db = 'maoda';
      $conn=mysqli_connect($host,$user,$pass,$db); 
      mysqli_query($conn,"SET NAMES UTF8");//解决中文乱码问题
      if($id == "-1") {
        $sql = "INSERT INTO goods_$mctid (name, photo, descpt, category, price) VALUES ('$name', '$photo', '$descpt', '$category', '$price')";
      }
      else {
        $sql = "UPDATE goods_$mctid SET name='$name', photo='$photo', descpt='$descpt', category='$category', price='$price' WHERE id=$id";
      }
      mysqli_query($conn, $sql);

      $this->json([
          'code' => 0,
      ]);

    }

  }
}
