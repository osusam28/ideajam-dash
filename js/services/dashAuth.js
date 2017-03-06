dash.factory('dashAuth', function($firebaseAuth) {
	var auth = $firebaseAuth();
	
	var login = function(email,pass) {
		auth.$signInWithEmailAndPassword(email,pass)
		.then(function(authData) {
			console.log("logged in as: ", authData.uid);
		}).catch(function(error) {
			console.log("Authentication failed: ", error);
		});
	}
	
	return {
		login: login
	}
});