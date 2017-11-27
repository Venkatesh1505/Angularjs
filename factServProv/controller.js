var app = angular.module('factServProApp',[]);
app.service('fromService',function(){
	this.message = "THis is from service! ";
});
app.factory('fromFactory',function(){
	var factory = {};
	factory.message = "This is from factory! ";
	return factory;
});
app.provider('fromProvider',function(){
	var message = "This is from provider! ";
	return{
		$get: function(){
			return{
				getMessage:function(){
					return message;
				}
			}
		}
	}
});
app.controller('FactServProCtrl',function($scope,fromService,fromFactory,fromProvider){
	$scope.greetMessage = [fromService.message,fromFactory.message,fromProvider.getMessage()];
});