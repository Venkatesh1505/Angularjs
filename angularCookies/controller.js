var app = angular.module('cookieApp',['ngCookies']);
app.controller('cookieCtrl',function($scope,$cookies){
	$scope.cookieValue = $cookies.get('cookie');
	$scope.setCookie=function(){
		$cookies.put('cookie',$scope.cookieText);
	}
});