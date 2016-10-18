'use strict';

angular.module('pthf')
  .directive('menuNav', function() {
  return {
  	restrict: 'E',
  	templateUrl: './app/menu/menu.html',
  	controller :  function ($scope, serviceCategory) {
      // GET MENU CATEGORY LIST
  		serviceCategory.getCategories()
        .then(function(result){
          $scope.categories = result;
      });
  		$scope.open = false;
      // SHOW and HIDE TOOGLE MENU 
  		$scope.toggle = function(){
  			$scope.open = ($scope.open) ? false : true;
  		}
  	}
  };
})
