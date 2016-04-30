(function() {
	'use strict';
	angular
		.module('app')
		.config(config);
	
	function config($stateProvider, $urlRouterProvider, $locationProvider) {
  
		$urlRouterProvider.otherwise(function($injector) {
			var $state = $injector.get('$state');
			$state.go('404', null, {
				location: false
			});
		});
	  
		$locationProvider.html5Mode(true).hashPrefix('!');
	  
		$stateProvider
		.state('index', {
			url: "/",
			templateUrl: "/views/index.tpl",
			resolve:{
				book_array:  function(bookFactory){
					return bookFactory.query();
				}
			},
			controller: function($scope, book_array, pageFactory){
				$scope.book_array=book_array;
				pageFactory.setTitle('Главная');
			},
		})
		.state('book_item_page', {
			url: "/book/:id/",
			templateUrl: "/views/book_item.tpl",
			resolve:{
				book_item: function(bookFactory, $stateParams){
					var id=$stateParams.id;
					return bookFactory.get({id: id});
				},
				bundle_array: function($resource, $stateParams, bundleFactory){
					var id=$stateParams.id;
					//var bundle_resource = $resource(baseUrl+'/catalog/'+id+'/bundles/');
					return bundleFactory.query({id: id});
				},
				book_array:  function(bookFactory){
					return bookFactory.query();
				}
			},
			controller: function($scope, $stateParams, book_item, bundle_array, book_array, pageFactory){
				$scope.book_item=book_item;
				$scope.bundle_array=bundle_array;
				$scope.book_array=book_array;
				$scope.id=$stateParams.id;
				
				$scope.$watch("book_item.title.default", function (newValue) {
					if(newValue!==undefined){
						pageFactory.setTitle(newValue);
					}
				});
				
			}
		})
		.state('404', {
			url: "/404/",
			template: [
				"<div class='page_error'>",
					"<h1>404 Страница не найдена</h1>",
					"<div>",
						"<p>К сожалению запрошенная страница не найдена на сервере.</p>",
						"<p>Вернуться на <a href='/'>главную</a></p>",
					"</div>",
				"</div>",
			].join(''),
			controller: function(pageFactory){
				pageFactory.setTitle('404 Страница не найдена');
			}
		});
		
	}	
	
})();