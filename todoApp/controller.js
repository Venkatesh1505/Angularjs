var application = angular.module('todoApp',[]);
application.controller('todoCtrl',function($scope){
	$scope.tasks = [];
	var taskdata = localStorage['taskLists'];
	if(taskdata!= undefined){
		$scope.tasks = JSON.parse(taskdata);
	}
	$scope.addTask = function(){
		if(event.which == 13 && $scope.task!=""){
			$scope.tasks.push({'task':$scope.task,'status':false});
			$scope.task='';
			localStorage['taskLists'] = JSON.stringify($scope.tasks);
		}
	};
	
	$scope.editContent = function(){
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	};
});