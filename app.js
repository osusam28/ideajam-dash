var dash = angular.module('dash',['ngRoute'])

.config(function($routeProvider) {
  $routeProvider.when("/", {
	  templateUrl: 'templates/dash-main.html',
	  controller: 'dashMain',
	  controllerAs: 'main'
  });
})
