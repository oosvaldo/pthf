'use strict';

angular.module('pthf')
  .directive('mainSlider', function() {
  return {
  	restrict: 'E',
    templateUrl: './app/main-slider/main-slider.html',
  	controller :  function ($scope, serviceBanner) {
      // GET HOME SLIDER IMAGES 
  		serviceBanner.getBanners()
        .then(function(result){
          $scope.images =  result;
      });
  	}
  };
})
