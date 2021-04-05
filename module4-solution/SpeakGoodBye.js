

(function speak(window) {
	
	var speakWordgood = {};
	var speakWord = "Good Bye";
	
	speakWordgood.say=function say(name){
  		console.log(speakWord + " " + name);
	}
	window.speakWordgood = speakWordgood;
}
)(window);
