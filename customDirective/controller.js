var app = angular.module('customDirectiveApp',[]);
app.directive('myDirective',function(){
	function linkFunction($scope,elem,attrs){
		$scope.name="Hello world";
		$scope.changeName = function(newName){
			$scope.name = $scope.controllerProperty;
		}
	}
	return{
		restrict: 'EA',
		scope: {},
		link: linkFunction,
		template:'<span ng-click="changeName(\'venky\')">Current text : {{ name }} </span>'

	}
});
app.controller('customDirectiveCtrl',function($scope){
	$scope.controllerProperty = "This is controller's property";
});