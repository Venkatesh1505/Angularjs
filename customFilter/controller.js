var application = angular.module('customFilterApp',[]);
application.filter('base',function(){
	var result = function(input,base){
		var parsed = parseInt(input,10);
		var based = parseInt(base,10);
		if(isNaN(parsed) || isNaN(based) || based<2 || based >36){
			return "Error";
		}
		return parsed.toString(based);
	}
	return result;
});
application.controller('customFilterCtrl',function($scope){

});