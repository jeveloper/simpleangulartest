'use strict';


angular.module('Simpleangulartest.directives', ['ionic'])
.directive('location', function ($ionicGesture,locationservices) {
    return {
    	restrict: 'EA',
        template: '<a href="#" > <strong>I am located at ... {{location}}, tap to refresh location</strong></a> ',
        link: function ($scope, $element, $attrs) {
            
        	var handleTap = function (e) {
        		//get new location
                console.log(" tapped or clicked");
                
                //call location services 
                //data is lat and lon
                locationservices.getmelocation().then(function(loc){
                    $scope.location = loc;
                }, function(err){
                    console.error('ouch');
                    console.error(err);
                });
                // $scope.location = "Toronto";

        	};

           
        	 var tap = $ionicGesture.on('tap', handleTap, $element);
         
        }
    };
});