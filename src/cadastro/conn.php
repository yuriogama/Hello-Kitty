<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json;chartset=utf-8');

  $servidor = "justolp.vpshost4301.mysql.dbaas.com.br";
  $usuario = "justolp";
  $senha = "Just@Brasil30";
  $dbname = "justolp";

  $conn = mysqli_connect($servidor, $usuario, $senha, $dbname);
  $conn->set_charset("utf8");
?>