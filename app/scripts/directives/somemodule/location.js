'use strict';


angular.module('Simpleangulartest.directives', ['ionic'])
.directive('location', function ($ionicGesture,locationservices,$ionicLoading) {
    return {
    	restrict: 'EA',
        template: '<a href="#" > <strong>I am located at ... {{location}}, tap to refresh location</strong></a> ',
        controller: function($scope){
             $scope.show = function() {
                $ionicLoading.show({
                  template: 'Loading...'
              });
            };
            $scope.hide = function(){
                $ionicLoading.hide();
            };
        },
        link: function ($scope, $element, $attrs) {
            
        	var handleTap = function (e) {
        		//get new location
                $scope.show();
                console.log(" tapped or clicked");
                
                //call location services 
                //data is lat and lon
                locationservices.getmelocation().then(function(loc){
                    $scope.location = 'Latitude: '+loc.lat + ' , Longitude: '+ loc.lon ;
                    $scope.hide();
                }, function(err){
                    console.error('ouch');
                    console.error(err);
                    $scope.location = "OH no!";
                    $scope.hide();
                });
                
        	};

           
        	 var tap = $ionicGesture.on('tap', handleTap, $element);
         
        }
    };
});