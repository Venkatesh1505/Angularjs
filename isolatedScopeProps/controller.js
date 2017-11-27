var app = angular.module('customDirectiveApp',[]);
app.directive('myDirective',function(){
	return{
		restrict: 'EA',
		scope:{
			name : '@',
			age : '=',
			func : '&'
		},
		template : ['<p>Name in directive : {{name}}</p>',
					'<p>Enter new name : <input type="text" ng-model="name"></p>',
					'<p>Age in directive : {{age}}</p>',
					'<p>Enter new age : <input type="text" ng-model="age"></p>',
					'<p><input type="button" value="from directive" ng-click="func()"></p>'
				].join('')
	}
});
app.controller('customDirectiveCtrl',function($scope){
	$scope.name = "venky";
	$scope.age = 20;
	$scope.showNameAlert=function(){
		alert($scope.name);
	}
});