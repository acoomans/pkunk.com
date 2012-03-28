var greetings = [
	"<p>Welcome to our home stars. We are the Pkunk. Pkunk we are.</p><p>Seekers of the deepest truths, askers of interesting and significant questions.</p><p>Even now a question of great transcendental significance comes unbidden to our minds:</p><p>`Who are you and what do you want?'</p>",
	"<p>Greetings and various apropos felicitations!  We are Pkunk.</p><p>Hatchlings of light, spritual soul beings of the vast cosmic oneness wayfarers on the river of destiny, students of the mystical dimensions,purveyors of blissful love, birdlike manifestations of glorious light energies from the astral plane.</p><p>How about yourselves?</p>",
	"<p>Do not be frightened.  We are powerful creatures, yes, but we could not hurt you any more than we could squish the helpless Pootworm.</p><p>We love the Pootworm.  We are one with the Pootworm.  We are one with you.</p><p>Of course you realize this means you are one with the Pootworm. Rejoice!!</p><p>To be one with the Pootworm is to be alive, and why not be alive?</p><p>Is that not what living is for?</p>"
];

var angry = "I have no patience for this absurd idiocy. Prepare yourselves for battle!";

var insults;

var videoElement = document.createElement('audio');
var audioType = false;
if (videoElement.canPlayType('audio/ogg')) {
	audioType = ".ogg";
} else if (videoElement.canPlayType('audio/ogg')) {
	audioType = ".mp3";
} else if (videoElement.canPlayType('audio/x-wav')) {
	audioType = ".wav";
}
				

for (var i=1; i<=14; i++) {
	var audioElement = document.createElement('audio');
	if (audioType) {
		audioElement.setAttribute('src', "sounds/insult"+(i<10?"0":"")+i+audioType);
	}
	insults[i-1] = audioElement;
}


var mode = "normal";

$(document).ready(function() {
	$("div#greetings").html(greetings[Math.round(Math.random()*10) % 3]);
	try {
		modInit();
	} catch(err) {}
	
	setTimeout('modLoadRemote("pkunk.mod");', 500);
	
	
	$("div#pkunk").click(function() {
		stop();
		if (mode=="normal") {
			setTimeout('modLoadRemote("battle.mod");', 500);
			$("div#greetings").html(angry);
			setTimeout('speak();', 2000);
			mode="battle";
		} else {
			setTimeout('modLoadRemote("pkunk.mod");', 500);
			$("div#greetings").html(greetings[Math.round(Math.random()*10) % 3]);
			shutup();
			mode="normal";
			if ( Math.random() > 0.7) {
				setTimeout('soundPlay("rebirth");', 500);
			}
		}
	});
	
	
});

var s = null;

function speak() {
	
	var i = (Math.round(Math.random()*100) % 14);
	var soundName = "insult"+(i<10?"0":"")+i;
	playMusic(i);
	
	$("#speaking").show();
	setTimeout('$("#speaking").hide();', 100 + ((Math.random()*1000) % 100) );
	
	setTimeout('$("#speaking").show();', 300);
	setTimeout('$("#speaking").hide();', 400 + ((Math.random()*1000) % 100) );
	
	setTimeout('$("#speaking").show();', 500);
	setTimeout('$("#speaking").hide();', 600 + ((Math.random()*1000) % 100) );
	
	s = setTimeout('speak();', 1500);
}

function shutup() {
	clearTimeout(s);
}







	