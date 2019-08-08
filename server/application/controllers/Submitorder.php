<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Submitorder extends CI_Controller {
  public function index() {
    header("Content-Type:text/html;charset=utf8"); 
    header("Access-Control-Allow-Origin: *"); //解决跨域
    header('Access-Control-Allow-Methods:POST');// 响应类型  
    header('Access-Control-Allow-Headers:*'); // 响应头设置 
    error_reporting(0);

    $itemlist = $_POST['list'];
    $openid = $_POST['openId'];
    $phone = $_POST['phone'];
    $price_fe = $_POST['price'];
    $mctid = $_POST['shopId'];
    $remark = $_POST['remark'];
    $creationtime = date("Ymd h:i:sa");
    $state = "未支付";

    $host = 'localhost';
    $user = 'root';
    $pass = 'maoda789#';
    $db = 'maoda';
    $conn=mysqli_connect($host,$user,$pass,$db); 
    mysqli_query($conn,"SET NAMES UTF8");//解决中文乱码问题

    //处理价钱
    $price = 0;
    $items = json_decode($itemlist);
    foreach ($items as $key=>$value) {
      $sql = "select * from goods_$mctid where id = $key";
      $res = mysqli_query($conn, $sql);
      $row = mysqli_fetch_assoc($res);
      $price += $row['price']*$value;
    }
    if($price != $price_fe) {
      die("请求价格错误");
    }
    
    //处理电话
    $sql = "SELECT * FROM phone WHERE openid='$openid' AND phone='$phone'";
    $res = mysqli_query($conn, $sql);
    if(mysqli_num_rows($res) == 0) {
      $sql = "INSERT INTO phone (openid, phone) VALUE ('$openid', '$phone')";
      mysqli_query($conn, $sql);
    }

    //把订单插入数据到数据库 
    $sql = "insert into transactions ".
            "(mctid, openid, itemlist, price, phone, remark, creationtime, state) ".
            "values ".
            "($mctid, '$openid', '$itemlist', '$price', '$phone', '$remark', '$creationtime', '$state')";
    if($res = mysqli_query($conn,$sql)) {
      //echo "  已经插入数据库 ";
    }
    else {
      die(" 插入数据库失败 ");
    }
    $transaction = mysqli_insert_id($conn);

    //返回订单号
    $this->json([
        'code' => 0,
        'data' => ['transaction' => $transaction]
    ]);

  }
}
