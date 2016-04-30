(function() {
	'use strict';
	angular
		.module('app')
		.directive('imageChecker', imageChecker);
	
	function imageChecker(){
		return {
			scope: {
				file:'@file',
			},
			template: '<div class="preloader"></div>',
			replace: true,
			link: function($scope, element, attr) {
				$scope.$watch("file", function (newValue) {
					if($scope.file!==undefined && $scope.file!='https://storage.aggregion.com/api/files//shared/data'){
						checkImage($scope.file);
					}
				});
				function checkImage(file){
					element.append('<img style="display:none;" src="'+file+'">');
					element.find('img').on('load', function(event) {
						element.replaceWith('<img src="'+file+'" />');
					});
					element.find('img').on('error', function(event) {
						//element.replaceWith('<img src="https://storage.aggregion.com/api/files/12ce171be47031a58f6d12ddefca93d52bda709b1b720d50cf48747d6cd44cb6/shared/data" />');
						element.replaceWith('<div class="preloader not_found"></div>');
					});
				}//END
			}//END link
		};
	}
	
})();