'use strict';

/**
 * @ngdoc function
 * @name Simpleangulartest.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('Simpleangulartest')
  .controller('HomeController', function($scope, sillyquote) {

    //this is cleaner than before
    $scope.myHTML = sillyquote.data.text;


  });
