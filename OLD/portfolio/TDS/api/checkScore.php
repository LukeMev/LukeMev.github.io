<?php
header('Content-Type: application/json');
require('../../../../conn.inc.php'); 
// Add SQL
$sql = "SELECT MAX(gameScore) AS highScore FROM topDownGame"; // basically gets the highest score 
$highScoreQuery = $mysqli->query($sql);
$highScoreRow = $highScoreQuery->fetch_assoc();
$return = ($highScoreRow['highScore']);
echo json_encode($return);
?>