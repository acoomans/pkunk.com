
var insults = new Array();

function playMusic(nm) {
	var audioElement = insults[nm];
	console.log(audioElement);
	audioElement.play();
}