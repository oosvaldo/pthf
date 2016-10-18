'use strict';

angular.module('pthf')
  .directive('theHeader', function() {
  return {
  	restrict: 'E',
  	templateUrl: './app/header/header.html',
  	controller :  function ($scope, $rootScope, $location, serviceProduct) {
  		$scope.key = '';

      // REDIRECT TO PRODUCTS BY KEY WORD USING SEARCH FIELD
	  	$scope.search = function() {
	  		if($scope.key != '') {
	  			$rootScope.key = $scope.key.replace(" ", "_");
		  		$location.path( "/products/"+ $rootScope.key );
	  		}
	  	};
      // CALL search FUNCTION WHEN PRESS ENTER IN HEADER INPUT 
      $scope.checkEnter = function(event) {
        if(event.which == 13) {
          $scope.search();
        }
      };
      
  	}	
  };
})
