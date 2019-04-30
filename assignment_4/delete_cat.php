<?php
include('sqlconnection.php');
$id=$_REQUEST['id'];

if(isset($_POST["id"]))
{
    
 foreach($_POST["id"] as $id)
 {
   
  $query = "DELETE FROM category WHERE id = '".$id."'";
  mysqli_query($mysqli, $query) or die (mysqli_error());
//    print_r($id);
//exit();
//  header("Location: list_cat.php");
 }
}
?>
<!--
//$id=$_REQUEST['id'];
//$query = "DELETE FROM category WHERE id=$id"; 
//$result = mysqli_query($mysqli,$query) or die ( mysqli_error());
//header("Location: list_cat.php"); 
?>-->