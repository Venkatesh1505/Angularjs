var app = angular.module('factoryApp',[]);
app.factory('randomNoFactory',function(){
	var factory = {};
	var num = Math.floor(Math.random()*10);
	factory.generate = function(){
		return num;
	}
	return factory;
});
app.controller('factoryCtrl',function($scope,randomNoFactory){
	$scope.generateRandom = function(){
		$scope.randomNo = randomNoFactory.generate();
	}
});