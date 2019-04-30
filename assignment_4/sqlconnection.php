<?php


$mysqli = new mysqli('localhost', 'root', 'root', 'Product');
    if($mysqli->connect_error)
        {
        echo $mysqli->connect_error;
        }
        
?>