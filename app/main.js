'use strict';

angular.module('pthf', ['ngRoute', 'ksSwiper'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider
    // MAIN PAGE ( LIST OF PRODUCTS )
    .when('/', {
        templateUrl : './app/products/products.html',
        controller  : 'productsController'
    })
    // PRODUCTS BY CATEGORY
    .when('/categoria/:cat', {
        templateUrl : './app/products/products.html',
        controller  : 'productsController'
    })
    // PRODUCTS BY KEY WORD
    .when('/products/:key', {
        templateUrl : './app/products/products.html',
        controller  : 'productsController'
    })
    // DETAILS OF PRODUCT BY ID
    .when('/product/:id', {
        templateUrl : './app/product/product.html',
        controller  : 'productController'
    })
    // REDIRECT TO MAIN PAGE WHEN INVALID URL
    .otherwise({redirectTo:'/'});
})