
function NodewsosCtrl($scope, $log, $http, $injector) {
	var map = $injector.get('az.services.layers');

	$scope.findPark = function() {
		$log.log("I see this map " + map.getMapLayers());
		
	}

	$scope.mapClick = function(e) {
		$log.log("Map click event at " + e.latlng);
		$http.get('/ws/parks/near', {lat: e.latlng.lat, lon: e.latlng.lng})
			.success(function(response) {
				$log.log("Got this response: " + angular.toJson(response));
			});
	}
}

