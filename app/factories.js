'use strict';

angular.module('pthf')
  .service('util', function($http) {
  	// GET PERCENTAGE BETWEEN TWO VALUES  
  	this.getDiscount = function(realPrice, currentPrice ) {

  		var res = ( currentPrice / realPrice ) * 100;
  		res = parseInt(100 - res);

  		return res;
  	}
  })