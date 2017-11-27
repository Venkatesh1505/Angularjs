var castApp = angular.module('voteCast' ,['ngRoute']);
		castApp.controller('castControl',function($scope){
			$scope.partyChoice = 'None';
			$scope.venky = function(){$scope.partyChoice = 'venky'};
			$scope.nagarjun = function(){$scope.partyChoice = 'Nagarjun'};
			$scope.raja = function(){$scope.partyChoice = 'Raja'};
			$scope.dheepak = function(){$scope.partyChoice = 'Dheepak'};
		})
	castApp.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl: 'ang1.html'
		})
		.when('/women',{
			template: 'Hello mam'
		})
		.otherwise({
			redirectTo: '/'
		});
	});