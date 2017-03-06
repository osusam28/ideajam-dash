dash.controller('dashLogin', function($scope, dashAuth) {
	var ctr = this;

	ctr.login = function() {
		dashAuth.login(ctr.email,ctr.pass);
	}
})