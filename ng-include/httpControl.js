var app = angular.module('httpApp',[]);
app.controller('httpCtrl',function($scope,$http){
	$http({
    method: 'get', 
    url: 'http://127.0.0.1/ngjs/ng-include/database.json'
	}).then(function (response) {
    $scope.persons = response.data.records;
},function (error){
    alert('error');
});
});