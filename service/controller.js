var app = angular.module('serviceApp',[]);
app.service('randomNoService',function(){
	var num = Math.floor(Math.random()*10);
	this.generate = function(){
		return num;
	}
});
app.controller('serviceCtrl',function($scope,randomNoService){
	$scope.generateRandom = function(){
		$scope.randomNo = randomNoService.generate();
	}
});