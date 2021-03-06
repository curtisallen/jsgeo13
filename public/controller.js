
function NodewsosCtrl($scope, $log, $http, $injector) {
	var mapService = $injector.get('az.services.layers');
	$scope.map = null;

	$scope.findPark = function() {
		$log.log("I see this mapLayers " + mapService.getMapLayers());
		
	}

	$scope.mapClick = function(e) {
		$log.log("Map click event at " + e.latlng);
		var limit = 10; // limit of points to return 
		$http.get('/ws/parks/near?lat=' + e.latlng.lat + '&lon=' + e.latlng.lng 
			+ '&limit=' + limit)
			.success(function(response) {
				//$log.log("Got this response: " + angular.toJson(response));
				angular.forEach(response, function(park) {
					console.log(park.pos);
					L.marker([park.pos[1], park.pos[0]]).addTo($scope.map)
						.bindPopup('<p>' + park.Name + '</p>');
				});
				//L.marker([-105.68962, 40.414]).addTo($scope.map);
			});
	}
}

