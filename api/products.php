<?php

	require('./config.inc');
	// GET PRODUCTS LIST BY KEY WORD, CATEGORY OR OFFER
	function getProducts() {

		$mysqli = new mysqli(HOSTNAME,USERNAME,PASSWORD,DATABASE);
		$key 		= (!!$_GET['key']) ? $_GET['key'] : false;
		$cat 		= (!!$_GET['cat']) ? $_GET['cat'] : false;

		if(!!$key) {
			$sql = "SELECT IdProducto, NombreProd, Descripcion, PrecioLista, PrecioFailbox, CostoEnvio, Image, Categorias_IdCategoria from Productos WHERE Descripcion LIKE '%". $key ."%'";
		} else if(!!$cat) {
			$sql = "SELECT IdProducto, NombreProd, Descripcion, PrecioLista, PrecioFailbox, CostoEnvio, Image, Categorias_IdCategoria from Productos WHERE Categorias_IdCategoria = '$cat'";
		} else {
			$sql = "SELECT IdProducto, NombreProd, Descripcion, PrecioLista, PrecioFailbox, CostoEnvio, Image, Categorias_IdCategoria from Productos WHERE Oferta = 1 ORDER BY FechaAlta";
		}


		$peticion = $mysqli->query($sql);

		// IF NOT QUERY DATA FINISH WITH ERROR
		if (!$peticion) {
			echo  '{"status" : "500", "mensaje" : "Consulta no válida"}';
		    die('Consulta no válida: ' . $mysqli->error);
		}

		$mysqli->close();

		// FILL VAR $products WITH QUERY DATA 
		while($row = mysqli_fetch_assoc($peticion)){
			$products[] = array_map('utf8_decode',$row);
		}

		$peticion->free();

		header('Content-Type: application/json, charset=utf-8');
		if(count($products) > 0 ) {
			echo  '{"status" : "200", "data":'.json_encode($products).'}';
		} else {
			echo  '{"status" : "500", "mensaje" : "No hay productos que mostrar"}';
		}
	} 

	if($_SERVER['REQUEST_METHOD'] == 'GET') {
		getProducts();
	} else {
		header('Content-Type: application/json');
		echo  '{"status" : "500", "mensaje" : "Metodo no permitido"}';
	}
?>