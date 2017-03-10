dash.controller('dashRouter', function($scope, dashAuth, dashDataSource, $location) {
	var ctr = this;
	
	var obj = dashDataSource.getUserNode(dashAuth.auth);
	
	obj.$loaded().then(function() {
		ctr.loc = obj.$value;
	});
	
	ctr.logout = function() {
		dashAuth.logout();
		$location.path('/login');
	}
	
	dashAuth.addChangeCallback(function(user) {
		if(user == null) {
			obj.$destroy();
		}
	});
})