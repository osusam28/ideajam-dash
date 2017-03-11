dash.controller('musicController', function($scope, dashDataSource) {
	var ctr = this;
	ctr.submitted = false;
	
	ctr.submitSong = function() {
		dashDataSource.addSong(ctr.title, ctr.artist);
		ctr.submitted = true;
	}
	
	ctr.addAnother = function() {
		ctr.title = "";
		ctr.artist = "";
		ctr.submitted = false;
	}
});