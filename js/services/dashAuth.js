dash.factory('dashAuth', function($firebaseAuth) {
	var callbacks = [];
	
	var auth = $firebaseAuth();
	
	var login = function(email,pass,callback) {
			auth.$signInWithEmailAndPassword(email,pass)
		.then(function(authData) {
			callback();
			console.log("logged in as: ", authData.uid);
		}).catch(function(error) {
			callback();
			console.log("Authentication failed: ", error);
		});
	}
	
	var logout = function() {
		auth.$signOut().then(function() {
			console.log("signed out.");
		}).catch(function(error) {
			
		});
	}
	
	var addChangeCallback = function(callback) {
		callbacks.push(callback);
	}
	
	auth.$onAuthStateChanged(function(user) {
		callbacks.forEach(function(callback) {
			callback(user);
		});
	});
	
	return {
		auth: auth,
		login: login,
		logout: logout,
		addChangeCallback: addChangeCallback
	}
});