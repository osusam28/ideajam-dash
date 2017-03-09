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
	
	var addSong = function(song, artist) {
		firebase.database().ref("/music/" + song.toUpperCase()).set({
			artist: artist.toUpperCase(),
			count: 1
		}).then(function(data) {
			return true;
		}).catch(function(error) {
			updateSong(song, artist);
		});
	}
	
	var updateSong = function(song, artist) {
		var count;
		
		var ref = firebase.database().ref("/music/" + song.toUpperCase() + "/count");
		var obj = $firebaseObject(ref);
		obj.$loaded().then(function(data) {
			count = Number(obj.$value);
			
			count = count + 1;
		
			obj.$value = count;
			obj.$save();
		}).catch(function(error) {
			return false;
		});
	}
	
	return {
		getUserNode: getUserNode,
		getMusicNode: getMusicNode,
		getWordsNode: getWordsNode,
		addSong: addSong,
		updateSong: updateSong
	}
});