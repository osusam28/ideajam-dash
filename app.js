var dash = angular.module('dash',['ngRoute', 'firebase'])

.config(function($routeProvider) {
  $routeProvider
	  .when("/login", {
		  templateUrl: 'templates/dash-login.html',
		  controller: 'dashLogin',
		  controllerAs: 'login',
	  })
	  .when ("/router", {
		  templateUrl: 'templates/dash-router.html',
		  controller: 'dashRouter',
		  controllerAs: 'router'
	  })
	  .when ("/", {
	  })
	  .otherwise ({
		  redirectTo: '/login'
	  });
	  
}).run(function() {
	
});
