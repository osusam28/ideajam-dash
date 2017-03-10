dash.controller('mainController', function($scope, dashDataSource, dashAuth) {
	var ctr = this;
	
	var track_list = dashDataSource.getMusicNode();
	var words_list = dashDataSource.getWordsNode();
	
	//Create a new instance of the word cloud visualisation.
	var myWordCloud = wordCloud('.wordcloud');
	
	//load the list of songs
	track_list.$loaded().then(function(data) {
		ctr.track_list = track_list;
		
	}).catch(function(error) {
		console.log("Error:", error);
	});
	
	//load the list of words
	words_list.$loaded().then(function(data) {
		
		words_list.forEach(function(phrase) {
			parseNewWords(phrase.data);
		});

		showNewWords(myWordCloud);
		
	}).catch(function(error) {
		console.log("Error:", error);
	});
	
	dashAuth.addChangeCallback(function(user) {
		if(user == null) {
			track_list.$destroy();
			words_list.$destroy();
		}
	});
	
	ctr.deleteSong = function(songName) {
		dashDataSource.deleteSong(track_list, songName);
	}
});