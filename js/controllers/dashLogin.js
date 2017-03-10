dash.controller('dashLogin', function($scope, $location, dashAuth) {
	var ctr = this;

	ctr.login = function() {
		dashAuth.login(ctr.email + "@papajohns.com",ctr.pass, function() {
			$location.path('/');
		});
	}
})