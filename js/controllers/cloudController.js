dash.controller('cloudController', function($scope, dashDataSource) {
	var ctr = this;
	ctr.submitted = false;
	ctr.submitWords = function() {
		dashDataSource.addWords(ctr.text.toUpperCase());
		ctr.submitted = true;
	}
	
	ctr.addAnother = function() {
		ctr.text = "";
		ctr.submitted = false;
	}
});