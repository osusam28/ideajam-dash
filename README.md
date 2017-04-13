# ideajam-dash
Dashboard application for Idea Jams

AngularJS application project experimenting with the authentication functionality offered by Google Firebase.  The application uses the [angularFire](https://github.com/firebase/angularfire) library to interact with Firebase's realtime database and email/password authentication services.  

There are three accounts, corresponding with the 3 functionalities of this application

__music / musicpj15__
This takes the user to a dialog that allows him/her to submit song requests, one at a time

__wordcloud / wcpapa22__
This takes the user to a dialog that allows him/her to enter phrases/sentences/words to add to the word cloud functionality

__admin / adminpj15__
This is the main dashboard that displays the rendered word cloud, as well as the songs that have been submitted and their count.  

Also uses an adaptation of [d3 layout](https://github.com/jasondavies/d3-cloud) word cloud library.  This functionality is still in progress.  
