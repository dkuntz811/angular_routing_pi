//[] below is the dependency injection array
//brings in Angular Route   ngRoute is a variable
var myApp = angular.module('myApp', ['ngRoute']);
//configure myApp
myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
			when('/home', {
				templateUrl: '/views/partials/home.html'
			}).
			when('/cats', {
				templateUrl: '/views/partials/cats.html'
			}).
			when('/lizards', {
				templateUrl: '/views/partials/lizards.html'
			}).
			otherwise({
				redirectTo: '/home'
			});
}]);



console.log('meow');
