<?php

$name_server = "localhost";
$user = "root";
$password = "";
$name_db = "student";

$conn = mysql_connect($name_server, $user, $password) or die("Err With Connection");
mysql_select_db($name_db, $conn) or die("Err Selected Dababase");
mysql_query("SET NAMES 'utf8'");
mysql_query("GET NAMES 'utf8'");

?> 