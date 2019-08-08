<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Logout extends CI_Controller {
  public function index() {
    header("Content-Type:text/html;charset=utf8"); 
    header("Access-Control-Allow-Origin: *"); //解决跨域
    header('Access-Control-Allow-Methods:POST');// 响应类型  
    header('Access-Control-Allow-Headers:*'); // 响应头设置 

    session_start();
    $_SESSION = array();

  }
}
