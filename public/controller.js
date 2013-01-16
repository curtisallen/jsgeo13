
function NodewsosCtrl($scope, $log, $http, $injector) {
	var mapService = $injector.get('az.services.layers');
	$scope.map = null;

	$scope.findPark = function() {
		$log.log("I see this mapLayers " + mapService.getMapLayers());
		
	}

	$scope.mapClick = function(e) {
		$log.log("Map click event at " + e.latlng);

		$http.get('/ws/parks/near?lat=' + e.latlng.lat + '&lon=' + e.latlng.lng)
			.success(function(response) {
				//$log.log("Got this response: " + angular.toJson(response));
				angular.forEach(response, function(park) {
					console.log(park.pos);
					L.marker([park.pos[1], park.pos[0]]).addTo($scope.map);
				});
				//L.marker([-105.68962, 40.414]).addTo($scope.map);
			});
	}
}

