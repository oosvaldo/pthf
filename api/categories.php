<?php

	require('./config.inc');
	// GET CATEGORIES LIST
	function getCategories() {

		$mysqli = new mysqli(HOSTNAME,USERNAME,PASSWORD,DATABASE);

		$peticion = $mysqli->query("SELECT * FROM Categorias");

		// IF NOT QUERY DATA FINISH WITH ERROR
		if (!$peticion) {
			echo  '{"status" : "500", "mensaje" : "Consulta no válida"}';
		    die('Consulta no válida: ' . $mysqli->error);
		}

		$mysqli->close();

		// FILL VAR $categories WITH QUERY DATA 
		while($row = $peticion->fetch_array(MYSQLI_ASSOC)){
			$categories[] = array_map('utf8_decode',$row);
		}

		$peticion->free();

		header('Content-Type: application/json');

		if(count($categories) > 0 ) {
			echo  '{"status" : "200", "data":'.json_encode($categories).'}';
		} else {
			echo  '{"status" : "500", "mensaje" : "No hay productos que mostrar"}';
		}
	} 

	if($_SERVER['REQUEST_METHOD'] == 'GET') {
		getCategories();
	} else {
		header('Content-Type: application/json');
		echo  '{"status" : "500", "mensaje" : "Metodo no permitido"}';
	}
?>