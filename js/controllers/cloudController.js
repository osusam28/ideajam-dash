dash.controller('cloudController', function($scope, dashDataSource) {
	var ctr = this;
	
	ctr.submitWords = function() {
		dashDataSource.addWords(ctr.text);
	}
});