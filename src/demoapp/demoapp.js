var demoapp =  angular.module('demoapp',['ngRoute','demoapi']);

demoapp.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/demoapp',{
		templateUrl: 'src/demoapp/demoapp.html',
        controller: 'demoController'
		
	}).when('/demoapi',{
		templateUrl: 'src/demoapi/demoapi.html',
        controller: 'demoapiController'
		
	}).otherwise({ redirectTo: '/demoapi' });
}]);

demoapp.controller('demoController',function($scope){
	//controller code here...
});