(function() {
	'use strict';
	angular
		.module('app')
		.factory('pageFactory', pageFactory)
		.factory('bookFactory', bookFactory)
		.factory('bundleFactory', bundleFactory);
	
	function pageFactory() {
	   var title = 'App';
	   return {
		title: function() { 
			return title; 
		},
		setTitle: function(newTitle) {
			title = newTitle;
		}
	   };
	}

	function bookFactory($resource, $cacheFactory, baseUrl, $state) {
		var cache = $cacheFactory('bookFactory');
		function resourceErrorHandler() {
			$state.go('404', null, {
				location: false
			});
		}
		return $resource(baseUrl+'/catalog/:id', 
			{ id: '@id' }, 
			{
				'get': { 
					method: 'GET', 
					cache: cache  ,  
					interceptor : {responseError : resourceErrorHandler}
				},
				'query': { method: 'GET', cache: cache, isArray: true }
			}
		);
	}
	
	function bundleFactory($resource, $cacheFactory, baseUrl) {
		var cache = $cacheFactory('bundleFactory');
		return $resource(baseUrl+'/catalog/:id/bundles/', 
			{ id: '@id' }, 
			{
				'query': { method: 'GET', cache: cache, isArray: true }
			}
		);
	}
	
})();