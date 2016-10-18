'use strict';

angular.module('pthf')
.controller('productController', function($scope, $http, $routeParams, serviceProduct, util) {

	// GET PRODUCT DATA ( PRODUCT ID IN URL ) 
    serviceProduct.getById($routeParams.id)
      .then(function(result){
        $scope.product =  result;
        $scope.product.discount = util.getDiscount($scope.product.PrecioLista, $scope.product.PrecioFailbox);
    });
})