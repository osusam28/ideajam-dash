var dash = angular.module('dash',['ngRoute', 'firebase'])

.config(function($routeProvider) {
  $routeProvider
	  .when("/login", {
		  templateUrl: 'templates/dash-login.html',
		  controller: 'dashLogin',
		  controllerAs: 'login',
	  })
	  .when ("/", {
		  templateUrl: 'templates/dash-router.html',
		  controller: 'dashRouter',
		  controllerAs: 'router',
		  resolve: {
			"currentAuth": ["dashAuth", function(dashAuth) {
				return dashAuth.auth.$requireSignIn();
			}]
		  }
	  })
	  .otherwise ({
		  redirectTo: '/login'
	  });
	  
}).run(function($rootScope, $location) {
	$rootScope.$on("$routeChangeError", function(event, next, previous, error) {
		if(error === "AUTH_REQUIRED") {
			$location.path("/login");
		}
	})
});
