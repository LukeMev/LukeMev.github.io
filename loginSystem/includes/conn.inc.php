<?php

define("HOST", "localhost"); 			// The host you want to connect to. 
define("USER", "aapio500"); 			// The database username. 
define("PASSWORD", "Monkey500797"); 	// The database password. 
define("DATABASE", "secure_loginLuke");             // The database name.
define("CAN_REGISTER", "any");
define("DEFAULT_ROLE", "member");
define("SECURE", TRUE);  

$mysqli = new mysqli(HOST, USER, PASSWORD, DATABASE);
if ($mysqli->connect_error) {
    header("Location: ../error.php?err=Unable to connect to MySQL");
    exit();
}
?>