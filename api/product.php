<?php

	require('./config.inc');
	// GET PRODUCT BY ID
	function getProduct() {

		$mysqli 	= new mysqli(HOSTNAME,USERNAME,PASSWORD,DATABASE);
		$data 		= json_decode( file_get_contents('php://input') );
		$id 		= (!!$_GET['id']) ? $_GET['id'] : false;

		if(!!$id) {
			$peticion 	= $mysqli->query("SELECT * FROM Productos WHERE IdProducto = ". $id );

			// IF NOT QUERY DATA FINISH WITH ERROR
			if (!$peticion) {
				echo  '{"status" : "500", "mensaje" : "Consulta no válida"}';
			    die('Consulta no válida: ' . $mysqli->error);
			}

			$mysqli->close();

			// SET VAR $product WITH QUERY DATA 
			$product  = array_map('utf8_decode',$peticion->fetch_array(MYSQLI_ASSOC));

			$peticion->free();

			header('Content-Type: application/json');

			if(count($product) > 0 ) {
				echo  '{"status" : "200", "data":'.json_encode($product).'}';
			} else {
				echo  '{"status" : "500", "mensaje" : "No existe el producto especificado"}';
			}
		} else {
			echo  '{"status" : "500", "mensaje" : "Id invalido"}';
		}
		
	} 

	if($_SERVER['REQUEST_METHOD'] == 'GET') {
		getProduct();
	} else {
		header('Content-Type: application/json');
		echo  '{"status" : "500", "mensaje" : "Metodo no permitido"}';
	}	
?>