'use strict';

angular.module('Simpleangulartest.services',['ionic', 'ngCordova'])

.service('locationservices', function($cordovaGeolocation, $q) {
	this.getmelocation = function(){
		let deferred = $q.defer();
		let posOptions = {enableHighAccuracy: false, timeout: 5000};
		$cordovaGeolocation
		.getCurrentPosition(posOptions)
		.then(function(position){ 

			deferred.resolve({lat: position.coords.latitude, lon: position.coords.longitude});
		}, function(err){
			deferred.reject(error);
		});


		return deferred.promise;
	}
})
