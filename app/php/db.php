<?php
header("Content-type: text/html; charset=utf-8");
$dbms='mysql';
$host='localhost';
$dbName='test';
$user='root';
$pass='123456';
$dsn="$dbms:host=$host;dbname=$dbName";

try {
    $pdo = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT => true));
} catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() . "<br/>");
}

?>