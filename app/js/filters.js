(function() {
	'use strict';
	angular
		.module('app')
		.filter('join', join)
		.filter('toList', toList)
		.filter('html', html);
	
	function join() {
		return function (value) {
			if( angular.isArray(value) ){
				return value.join(', ');
			}
			else{
				return value;
			}
		};
	}
	
	function toList() {
		return function (value) {
			var str='';
			for(var i in value) {
				if (!value.hasOwnProperty(i)) continue;
				str+='<li><span class="ch">'+i+':</span> '+value[i]+'</li>';
			}
			if(str){
				str='<ul>'+str+'</ul>';
				return str;
			}
			else{
				return value;
			}
		};
	}
	
	function html($sce) { 
		return function (text) {
			return $sce.trustAsHtml(text);
		};    
	}
	
})();