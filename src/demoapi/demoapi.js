var demoapi =  angular.module('demoapi',['ngRoute']);

demoapi.controller('demoapiController',function($scope,demoapiService){
	
	$scope.searchBooks = function(bookName){
		if (bookName) {
			demoapiService.getBooksDetailsFromGoogle(bookName)
	        .success(function(data) {
	            console.log(data);
	            $scope.books = data.items;
	         })
	        .error(function(data) {
	            alert("Error");
	        });
	    }
	};
	
});

demoapi.factory('demoapiService',['$http', function($http){
 var demoapiService = {};

 	demoapiService.getBooksDetailsFromGoogle = function (bookName) {
		var googleBooksApi="https://www.googleapis.com/books/v1/volumes?q="+bookName;
       	return $http.get(googleBooksApi);
	};

	return demoapiService;

}]);