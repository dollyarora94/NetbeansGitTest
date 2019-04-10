<?php
include('sqlconnection.php');

$id=$_REQUEST['id'];
$query = "DELETE FROM category WHERE id=$id"; 
$result = mysqli_query($mysqli,$query) or die ( mysqli_error());
header("Location: list_cat.php"); 
?>