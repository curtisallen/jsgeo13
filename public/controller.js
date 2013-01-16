
function NodewsosCtrl($scope, $log, $http, $injector) {
	var map = $injector.get('az.services.layers');

	$scope.findPark = function() {
		$log.log("I see this map " + map.getMapLayers());
		
	}

	$scope.mapClick = function(e) {
		$log.log("Map click event at " + e.latlng);
	}
}

