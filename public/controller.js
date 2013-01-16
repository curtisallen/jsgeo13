
function NodewsosCtrl($scope, $log, $http, $injector) {
	var map = $injector.get('az.services.layers');

	function onMapClick(e) {
		$log.log("Map Event! " + e.latlng);
	}
	$scope.findPark = function() {
		$log.log("I see this map " + map.getMapLayers());
		map.on('click', onMapClick);
	}
}

