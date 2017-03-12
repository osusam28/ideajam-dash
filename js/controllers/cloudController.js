dash.controller('cloudController', function($scope, dashDataSource) {
	var ctr = this;
	ctr.submitted = false;
	ctr.submitWords = function() {
		dashDataSource.addWords(ctr.text);
		ctr.submitted = true;
	}
	
	ctr.addAnother = function() {
		ctr.text = "";
		ctr.submitted = false;
	}
});