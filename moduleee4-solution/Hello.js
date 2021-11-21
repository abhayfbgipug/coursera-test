

(function(window) {
	var speakWord = "Hello";
	var hiiSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = hiiSpeaker;

})(window);