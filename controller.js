
	var cg = angular.module('ChartGrid', []);
	cg.controller('ctrl', function($scope) {
		//$scope.sizeWatcher = 500;
		$scope.sizeWatcher = {"width": 0, "height": 0};
		
		GridBuilder($scope);
		
	});


	cg.directive('resizableChart', function() {
		return {
			restrict: 'A',
			scope: {width: '=', id: '='},
			link: function (scope, element, attr){ 
				chartRender(scope.width, scope.id);

			}
		};
	});