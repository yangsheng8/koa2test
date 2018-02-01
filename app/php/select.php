<?php
require("db.php");
$sql="SELECT * FROM thumb";
$sth = $pdo->prepare($sql);
$sth->execute();
$result = $sth->fetchColumn(1);
$arr = array('num' => $result);
echo json_encode($arr);
?>