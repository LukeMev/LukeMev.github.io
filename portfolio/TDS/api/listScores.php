<?php
header('Content-Type: application/json');
require('../../../../conn.inc.php'); 
$queryScores = "SELECT gameScore, gamePlayer FROM topDownGame ORDER BY gameScore DESC";
$resultScores = $mysqli->query($queryScores);
$returnAr = array();
while ($rowScores = $resultScores->fetch_assoc()) {
	array_push($returnAr, array('dbPlayer'=>$rowScores['gamePlayer'], 'dbScore'=>$rowScores['gameScore']));
}
echo json_encode($returnAr);

?>