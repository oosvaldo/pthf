<?php

	require('./config.inc');
	// GET HOME BANNERS LIST
	function getBanners() {

		$mysqli = new mysqli(HOSTNAME,USERNAME,PASSWORD,DATABASE);

		$peticion = $mysqli->query("SELECT * FROM BannersHome");

		// IF NOT QUERY DATA FINISH WITH ERROR
		if (!$peticion) {
			echo  '{"status" : "500", "mensaje" : "Consulta no válida"}';
		    die('Consulta no válida: ' . $mysqli->error);
		}

		$mysqli->close();

		// FILL VAR $banners WITH QUERY DATA 
		while($row = $peticion->fetch_array(MYSQLI_ASSOC)){
			$banners[] = array_map('utf8_decode',$row);
		}

		$peticion->free();

		header('Content-Type: application/json');

		if(count($banners) > 0 ) {
			echo  '{"status" : "200", "data":'.json_encode($banners).'}';
		} else {
			echo  '{"status" : "500", "mensaje" : "No hay productos que mostrar"}';
		}
	} 

	if($_SERVER['REQUEST_METHOD'] == 'GET') {
		getBanners();
	} else {
		header('Content-Type: application/json');
		echo  '{"status" : "500", "mensaje" : "Metodo no permitido"}';
	}
?>