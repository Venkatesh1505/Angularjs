var app = angular.module('providerApp',[]);
app.provider('date',function(){
	var greet;
	return{
		setGreeting:function(value){
			greet = value;
		},
		$get: function(){
			return{
				showDate:function(){
						var date = new Date();
						return greet+". It's "+date.getHours();
				},
				devshowDate:function(){
					var date = new Date();
					return date.getHours();
					
				}
			}
			
		}
	}
});
app.config(function(dateProvider){
	var time = dateProvider.$get().devshowDate();
	if(time>0 && time<12){
		dateProvider.setGreeting("Good morning !");
	}
	else if(time>12 && time<16){
		dateProvider.setGreeting("Good afternoon !");
	}
	else if(time>16 && time<19){
		dateProvider.setGreeting("Good evening !");
	}
	else{
		dateProvider.setGreeting("Good night !");
	}
});
app.controller('providerCtrl',function($scope,date){
	$scope.greetMessage = date.showDate();
})