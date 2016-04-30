(function() {
	'use strict';
	angular
		.module('app')
		.controller('mainCtrl', mainCtrl);
	
	function mainCtrl($scope, pageFactory) {
		$scope.page = pageFactory;
	}
	
})();