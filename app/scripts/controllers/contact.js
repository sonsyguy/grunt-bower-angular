'use strict';

/**
 * @ngdoc function
 * @name heheApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the heheApp
 */
angular.module('heheApp')
  	   .controller('ContactCtrl', ContactCtrl)
  	   ContactCtrl.$inject = ['$scope']
  	   function ContactCtrl($scope){
  	   		$scope.secret = "contact page";
  	   }