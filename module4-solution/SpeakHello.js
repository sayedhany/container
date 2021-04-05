
(function speak(window) {
	
	var speakWordhello = {};
	var speakWord ="Hello";
	speakWordhello.say=function say(name){
  		console.log(speakWord + " " + name);
	}
	window.speakWordhello = speakWordhello;
}
)(window);
