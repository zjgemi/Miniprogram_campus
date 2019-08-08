<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Uploadfile extends CI_Controller {
  public function index() {
    header("Content-Type:text/html;charset=utf8"); 
    header("Access-Control-Allow-Origin: *"); //解决跨域
    header('Access-Control-Allow-Methods:POST');// 响应类型  
    header('Access-Control-Allow-Headers:*'); // 响应头设置 
    error_reporting(0);

    if(!file_exists("upload")) {
      mkdir("upload",0777,true);
    }
    $path = "upload/" . $_POST["blobname"];

    if (file_exists($path))  {
      die($path . " 文件已经存在. ");  
    }
    else  {
      if(move_uploaded_file($_FILES['file']['tmp_name'],$path)) {
        //echo " 文件已经被存储到: " . $path;
      }
      else {
        die(" 不能将文件移动到指定目录 ");
      }
    }

    if(null != $_POST['isend']) {
      $host = 'localhost';
      $user = 'root';
      $pass = 'maoda789#';
      $db = 'maoda';
      $conn=mysqli_connect($host,$user,$pass,$db); 
      mysqli_query($conn,"SET NAMES UTF8");//解决中文乱码问题
      $sql = "insert into printfile () values ()";
      mysqli_query($conn,$sql);
      $transaction = mysqli_insert_id($conn);
      
      $filename = $_POST['filename'];
      $openid = $_POST['openid'];
      $path = 'upload/'.$transaction.".pdf";
      $creationtime = date("Ymd h:i:sa");
      $printtype = $_POST['type'];
      $side = $_POST['side'];
      $phone = $_POST['phone'];
      $copies = $_POST['number'];
      $color = $_POST['color'];
      $pagesize = $_POST['size'];
      $state = "未支付";

      $parts = $_POST['isend'];
      $fp = fopen($path,"wb");
      for($i=0;$i<$parts;$i++) {
        $blobpath = "upload/".$_POST['filename'].'.'.$i;
        $handle = fopen($blobpath,"rb");
        fwrite($fp,fread($handle,filesize($blobpath)));
        fclose($handle);
        unlink($blobpath);
        //echo " 文件".$blobpath."已经删除 ";
      }
      fclose($fp); 
      //echo " 文件已经合并到 ".$path;

      function count_pages($pdfname) {
        $fp=@fopen($pdfname,"r");
        if (!$fp) {
          unlink($pdfname);
          die(" 打开文件 $pdfname 失败 ");
        }else {
          $max=0;
          while(!feof($fp)) {
            $line = fgets($fp,255);
            if (preg_match('/\/Count [0-9]+/', $line, $matches)){
              preg_match('/[0-9]+/',$matches[0], $matches2);
              if ($max<$matches2[0]) $max=$matches2[0];
            }
          }
          fclose($fp);
          return $max;
        }
        // $pdftext = file_get_contents($pdfname);
        // $num = preg_match_all("/\/Page\W/", $pdftext, $dummy);
        // return $num;
      }

      // 文档大小及页数
      $filesize = filesize($path);
      if($filesize < 1024) {
        $filesize = $filesize."B";
      }
      else if($filesize < 1024*1024) {
        $filesize = round($filesize/1024,2)."kB";
      }
      else {
        $filesize = round($filesize/1024/1024,2)."MB";
      }
      //echo " 文件大小 ".$size;
      $pages = count_pages($path);
      if($pages == 0) {
        unlink($path);
        die(" 无法识别文档页数 ");
      }
      //echo " 文档页数 ".$pages;

      // 计算金额
      $price = 0;
      if($printtype == '文档打印' && $pagesize == 'A4') {
        if($side == '单面') {
          $sheets = $pages*$copies;
          if($color == '黑白') {
            $price = $sheets*0.1;
          }
          else if($color == '彩色') {
            $price = $sheets*1.0;
          }
        }
        else if($side == '双面') {
          $sheets = ceil($pages*0.5)*$copies;
          if($color == '黑白') {
            $price = $sheets*0.15;
          }
          else if($color == '彩色') {
            $price = $sheets*2.0;
          }
        }
      }

      //处理电话
      $sql = "SELECT * FROM phone WHERE openid='$openid' AND phone='$phone'";
      $res = mysqli_query($conn, $sql);
      if(mysqli_num_rows($res) == 0) {
        $sql = "INSERT INTO phone (openid, phone) VALUE ('$openid', '$phone')";
        mysqli_query($conn, $sql);
      }

      //把订单插入数据到数据库 
      $sql = "update printfile set ".
              "filename='$filename', openid='$openid', path='$path', creationtime='$creationtime', ".
              "printtype='$printtype', side='$side', phone='$phone', copies=$copies, color='$color', ".
              "pagesize='$pagesize', pages=$pages, filesize='$filesize', state='$state', price='$price' ".
              "where transaction=$transaction ";
      if($res = mysqli_query($conn,$sql)) {
        //echo "  已经插入数据库 ";
      }
      else {
        unlink($path);
        die(" 插入数据库失败 ");
      }
    }

    //返回订单号
    $this->json([
        'code' => 0,
        'data' => ['transaction' => $transaction]
    ]);

  }
}
