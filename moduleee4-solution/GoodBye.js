


(function(window) {
	var speakWord = "Good Bye";
	var sayonaraSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.sayonaraSpeaker = sayonaraSpeaker;

})(window);