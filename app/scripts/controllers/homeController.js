'use strict';

/**
 * @ngdoc function
 * @name Simpleangulartest.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('Simpleangulartest')
  .controller('HomeController', function($scope, sillyquote) {

    $scope.myHTML = sillyquote.data.text;

    // just an example...
    // $scope.fetchRandomText = function() {
    //   ExampleService.doSomethingAsync()
    //     .then(ExampleService.fetchSomethingFromServer)
    //     .then(function(response) {
    //         $scope.myHTML = response.data.text;
    //         // close pull to refresh loader
    //         $scope.$broadcast('scroll.refreshComplete');
    //     });
    // };

    // $scope.fetchRandomText();

  });
