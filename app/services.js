'use strict';

angular.module('pthf')
  .service('serviceBanner', function($http) {
  	// GET JSON BANNERS 
  	this.getBanners = function() {
  		return $http.get('http://localhost/pthf/api/banners.php')
  		.then(function(result) {
  			return result.data.data;
  		}, function(error) {
  			return error;
  		});
  	}

  })

  .service('serviceCategory', function($http) {
  	//GET JSON CATEGORIES
  	this.getCategories = function() {
  		return $http.get('http://localhost/pthf/api/categories.php')
  		.then(function(result) {
  			return result.data.data;
  		}, function(error) {
  			return error;
  		});
  	}

  })

  .service('serviceProduct', function($http) {
    //GET JSON PRODUCTS IN OFFER
    this.getOffers = function() {
      return $http.get('http://localhost/pthf/api/products.php')
      .then(function(result) {
        var data = (!!result.data.data) ? result.data.data : [];
        return data;
      }, function(error) {
        return error;
      });
    }
    // GET JSON PRODUCT BY ID
    this.getById = function(id) {
      return $http.get('http://localhost/pthf/api/product.php?id=' + id)
      .then(function(result) {
        var data = (!!result.data.data) ? result.data.data : null;
        return data;
      }, function(error) {
        return error;
      });
    }

    // GET JSON PRODUCTS BY KEY WORD
    this.getByKey = function(key) {
      return $http.get('http://localhost/pthf/api/products.php?key=' + key)
      .then(function(result) {
        var data = (!!result.data.data) ? result.data.data : [];
        return data;
      }, function(error) {
        return error;
      });
    }

    // GET JSON PRODUCTS BY CATEGORY 
    this.getByCat = function(cat) {
      return $http.get('http://localhost/pthf/api/products.php?cat=' + cat)
      .then(function(result) {
        var data = (!!result.data.data) ? result.data.data : [];
        return data;
      }, function(error) {
        return error;
      });
    }

  })

