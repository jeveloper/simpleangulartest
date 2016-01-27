'use strict';


angular.module('Simpleangulartest', ['ionic', 'ngCordova', 'ngResource'])
.directive('quotes', function () {
    return {
    	restrict: 'E',

        template: '<li></li>'
    };
});