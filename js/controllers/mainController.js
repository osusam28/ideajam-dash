dash.controller('mainController', function($scope, dashDataSource) {
	var ctr = this;
	
	var music_list = dashDataSource.getMusicNode();
	var words_list = dashDataSource.getWordsNode();
	
	//Create a new instance of the word cloud visualisation.
	var myWordCloud = wordCloud('.wordcloud');
	
	music_list.$loaded().then(function(data) {
		ctr.music = music_list;
		
	}).catch(function(error) {
		console.log("Error:", error);
	});
	
	words_list.$loaded().then(function(data) {
		
		words_list.forEach(function(phrase) {
			parseNewWords(phrase.$value);
		});

		showNewWords(myWordCloud);
		
	}).catch(function(error) {
		console.log("Error:", error);
	});
});