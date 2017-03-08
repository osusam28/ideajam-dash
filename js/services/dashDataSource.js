dash.factory('dashDataSource', function($firebaseObject, $firebaseArray) {
	var getUserNode = function(auth) {
		var ref = firebase.database().ref("/users/" + auth.$getAuth().uid);
		return $firebaseObject(ref);
	}
	
	var getMusicNode = function() {
		var ref = firebase.database().ref("/music");
		return $firebaseArray(ref);
	}
	
	var getWordsNode = function() {
		var ref = firebase.database().ref("/words");
		return $firebaseArray(ref);
	}
	
	return {
		getUserNode: getUserNode,
		getMusicNode: getMusicNode,
		getWordsNode: getWordsNode
	}
});