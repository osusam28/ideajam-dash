dash.controller('musicController', function($scope, dashDataSource) {
	var ctr = this;
	
	ctr.submitSong = function() {
		dashDataSource.addSong(ctr.title, ctr.artist);
	}
});