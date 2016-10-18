'use strict';

angular.module('pthf')
	.controller('productsController', function($scope, $rootScope, $http, $routeParams, util, serviceProduct) {

		//FIX NUMBER OF VISIBLE PRODUCTS TO WIDTH SCREEN 
		if(window.innerWidth < 700 && window.innerWidth > 500 ) {
			$scope.slides = 2;
		} else if(window.innerWidth < 500 ) {
			$scope.slides = 1;
		} else {
			$scope.slides = 4;
		}

		// GET PERSENTAGE DISCOUNT FOR EVERY PRODUCT
		$scope.getDiscount = function(product) {
			return util.getDiscount(product.PrecioLista, product.PrecioFailbox);
		}

		// IF URL HAS KEY WORD CALL getByKey
		if(!!$routeParams.key) {
			serviceProduct.getByKey($routeParams.key)
				.then(function(result){
				    $scope.products = result;
				});
		// IF URL HAS CATEGORY ID CALL getByCat
		} else if(!!$routeParams.cat) {
			serviceProduct.getByCat($routeParams.cat)
				.then(function(result){
				    $scope.products = result;
				});
		// IF URL HAS NOT KEY WORD OR CATEGORY ID CALL getOffers
		} else {
			serviceProduct.getOffers()
			  	.then(function(result){
			    	$scope.products = result;
				});
		}
	})