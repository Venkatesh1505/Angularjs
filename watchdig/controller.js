var app = angular.module('watchApp',[]);
app.controller('btnCtrl',function($scope){
	$scope.count = 0;
	$scope.edits=-1;
	document.querySelector('button').addEventListener('click',function(){
		console.log('button clicked');
		$scope.count++;
		$scope.$digest();
	},false);
	$scope.$watch('myText',function(newValue,oldValue){
		$scope.edits++;
	});
});