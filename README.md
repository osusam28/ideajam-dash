# ideajam-dash
Very simple web application for Idea Jam hackathons - used to consoladate common themes and topics, as well as manage song requests.  

AngularJS application project experimenting with the authentication functionality offered by Google Firebase.  The application uses the [angularFire](https://github.com/firebase/angularfire) library to interact with Firebase's realtime database and email/password authentication services.  

Also uses an adaptation of [d3 layout](https://github.com/jasondavies/d3-cloud) word cloud library.  This functionality is still in progress.  


## Instructions and Use
Navigate to the root of the application "ideajam-dash/" to open it up.  It will redirect to the login screen if any other path is entered instead.

There are three accounts, corresponding with the 3 functionalities of this application

__music / musicpj15__
This takes the user to a dialog that allows him/her to submit song requests, one at a time

__wordcloud / wcpapa15__
This takes the user to a dialog that allows him/her to enter phrases/sentences/words to add to the word cloud functionality

__admin / adminpj22__
This is the main dashboard that displays the rendered word cloud, as well as the songs that have been submitted and their count.  
