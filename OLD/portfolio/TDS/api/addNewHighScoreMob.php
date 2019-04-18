<?php
header('Content-Type: application/json');

require('../../../../conn.inc.php'); 

$playerScore =  filter_var($_POST['playerScore'], FILTER_VALIDATE_INT);

$playerEmail = filter_var($_POST['playerEmail'], FILTER_SANITIZE_STRING);

$stmt = $mysqli->prepare("SELECT ID FROM topDownGameMob WHERE gamePlayer = ?");

$stmt->bind_param('s', $playerEmail);

$stmt->execute();

$stmt->bind_result($ID);

$stmt->store_result();

$numRows = $stmt->num_rows;

$stmt->fetch();

   // 1. UPSERT based on $numRows

if($numRows == 1){
	
	$stmt = $mysqli->prepare("UPDATE topDownGameMob SET gameScore = ? WHERE ID = ?");
	
	$stmt->bind_param('ii', $playerScore, $ID);
	
	$stmt->execute();
	
}else{
	
	$stmt = $mysqli->prepare("INSERT INTO topDownGameMob(gameScore, gamePlayer) VALUES (?, ?)");
	
	$stmt->bind_param('is', $playerScore, $playerEmail);
	
	$stmt->execute();
	
}

   // 2. Query logic from listscore.php

$queryScores = "SELECT gameScore, gamePlayer FROM topDownGameMob ORDER BY gameScore DESC";

$resultScores = $mysqli->query($queryScores);

$returnAr = array();

while ($rowScores = $resultScores->fetch_assoc()) {
	
	array_push($returnAr, array('dbPlayer'=>$rowScores['gamePlayer'], 'dbScore'=>$rowScores['gameScore']));
	
}

   //print_r($returnAr);

echo json_encode($returnAr);

?>