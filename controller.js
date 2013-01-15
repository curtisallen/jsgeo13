
function NodewsosCtrl($scope, $log, $http, $injector) {
	var map = $injector.get('az.services.layers');

	$scope.findPark = function() {
		$log.log("I see this map " + map.getMapLayers());
		$http.get('');
	}
}

