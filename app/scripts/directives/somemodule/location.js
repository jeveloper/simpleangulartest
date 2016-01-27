'use strict';


angular.module('Simpleangulartest.directives', ['ionic', 'ngCordova', 'ngResource'])
.directive('location', function ($ionicGesture) {
    return {
    	restrict: 'EA',


        template: '<a href="#" > <strong>I am located at ... , tap to refresh location</strong></a> ',
        link: function ($scope, $element, $attrs) {
            console.log(" tapped");
        	var handleTap = function (e) {
        		//get new location
                console.log(" tapped or clicked")
        	};


        	var tap = $ionicGesture.on('tap', handleTap, $element);
            var click = $ionicGesture.on('click', handleTap, $element);
        }
    };
});