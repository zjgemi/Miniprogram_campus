<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Prepay extends CI_Controller {
  public function index() {
    header("Content-Type:text/html;charset=utf8"); 
    header("Access-Control-Allow-Origin: *"); //解决跨域
    header('Access-Control-Allow-Methods:POST');// 响应类型  
    header('Access-Control-Allow-Headers:*'); // 响应头设置 
    error_reporting(0);

    $params = [
      'appid' => 'wx668a5b08a431de23',
      'mch_id' => '商户id',
      // 随机串，32字符以内
      'nonce_str' => (string) mt_rand(10000, 99999), 
      // 商品名
      'body' => $_POST['body'], 
      // 订单号，自定义，32字符以内。多次支付时如果重复的话，微信会返回“重复下单”
      'out_trade_no' => '20170823001' . time(),
      // 订单费用，单位：分
      'total_fee' => $_POST['price']*100,
      'spbill_create_ip' => $_SERVER['REMOTE_ADDR'],
      // 支付成功后的回调地址，服务端不一定真得有这个地址
      'notify_url' => 'https://myserver.com/notify.php',
      'trade_type' => 'JSAPI',
      // 小程序传来的OpenID
      'openid' => $_POST['openid'],
    ];

    // 按照要求计算sign

    ksort($params);
    $sequence = '';
    foreach ($params as $key => $value) {
      $sequence .= "$key=$value&";
    }

    $sequence = $sequence . "key=商户密钥";
    $params['sign'] = strtoupper(md5($sequence));

    // 给微信发出的请求，整个参数是个XML

    $xml = '<xml>' . PHP_EOL;
    foreach ($params as $key => $value) {
      $xml .= "<$key>$value</$key>" . PHP_EOL;
    }
    $xml .= '</xml>';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.mch.weixin.qq.com/pay/unifiedorder');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
    $output = curl_exec($ch);

    if (false === $output) {
      echo 'CURL Error:' . curl_error($ch);
    }

    // 下单成功的话，微信返回个XML，里面包含prepayID，提取出来

    if (0 === preg_match('/<prepay_id><\!\[CDATA\[(\w+)\]\]><\/prepay_id>/', $output, $match)) {
      echo $output;
      exit(0);
    }

    // 这里不是给小程序返回个prepayID，而是返回一个包含其他字段的JSON
    // 这个JSON小程序自己也可以生成，放在服务端生成是出于两个考虑：
    // 
    // 1. 小程序的appid不用写在小程序的代码里，appid、secret信息全部由服务器管理，比较安全
    // 2. 计算paySign需要用到md5，小程序端使用的是JavaScript，没有内置的md5函数，放在服务端计算md5比较方便

    $prepayId = $match[1];
    $response= [
      'appId' => 'wx668a5b08a431de23',
      // 随机串，32个字符以内
      'nonceStr' => (string) mt_rand(10000, 99999),
      // 微信规定
      'package' => 'prepay_id=' . $prepayId,
      'signType' => 'MD5',
      // 时间戳，注意得是字符串形式的
      'timeStamp' => (string) time(),
    ];
    $sequence = '';
    foreach ($response as $key => $value) {
      $sequence .= "$key=$value&";
    }
    $response['paySign'] = strtoupper(md5("{$sequence}key=商户密钥"));

    echo json_encode($response);

  }
}
