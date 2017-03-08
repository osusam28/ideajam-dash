dash.controller('dashRouter', function($scope, $firebaseObject, dashAuth, dashDataSource, $location) {
	var ctr = this;
	ctr.message = "redirecting..."
	
	var obj = dashDataSource.getUserNode(dashAuth.auth);
	
	obj.$loaded().then(function() {
		ctr.message = null;
		ctr.loc = obj.$value;
	});
})