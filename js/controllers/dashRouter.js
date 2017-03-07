dash.controller('dashRouter', function($scope, $firebaseObject, dashAuth, $location) {
	var ctr = this;
	
	var ref = firebase.database().ref("/users/" + dashAuth.auth.$getAuth().uid);
	var obj = $firebaseObject(ref);
	
	obj.$loaded().then(function() {
		ctr.loc = obj.$value;
	});
})