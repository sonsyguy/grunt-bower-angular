'use strict';

/**
 * @ngdoc function
 * @name heheApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the heheApp
 */
angular.module('heheApp')
  	   .controller('AboutCtrl', AboutCtrl)
  	   AboutCtrl.$inject = ['$scope'];
  	   function AboutCtrl($scope){
  	   		$scope.message = "about page";
  	   }