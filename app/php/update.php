<?php
require("db.php");
$sql="UPDATE  thumb SET num = num+1 WHERE id=1 ";
$res=$pdo->exec($sql);
if($res){
  $arr = array('state' => 1,'info'=>'success');
  echo json_encode($arr);
}
?>