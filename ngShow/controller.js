var app = angular.module('ngShowApp',[]);
app.controller('ngShowCtrl',function($scope){
	$scope.show='msg1';
	$scope.toggle=function(){
		$scope.show = $scope.show=='msg1' ? 'msg2' : 'msg1';
	}
});