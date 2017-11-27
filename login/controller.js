var loginApp = angular.module('loginApp',['ngRoute']);
loginApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'login.html'
	})
	.when('/dashboard', {
		resolve: {
			"check": function($location,$rootScope){
				if(! $rootScope.logginIn){
					$location.path('/');
				}
			}
		},
		templateUrl: 'dashboard.html'
	})
	.otherwise({
		redirectTo:'/'
	});
})
loginApp.controller('loginCtrl',function($location,$scope,$rootScope){
	$scope.submit=function(){
			if($scope.username == "admin" && $scope.password == "admin"){
				$rootScope.logginIn = true;
				$location.path('/dashboard');
		}
	}
	
});