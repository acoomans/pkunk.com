var modPlayer;
var dynamicAudio;

function modInit() {
	dynamicAudio = new DynamicAudio({'swf': 'dynamicaudio.swf'});
}

var modPlaying = false;
function modPlay() {
	try {
	modPlaying = true;
	// initially buffer 10 seconds (44100 * 2(stereo) * 10)
	//dynamicAudio.write(modPlayer.getSamples(882000));
	dynamicAudio.write(modPlayer.getSamples(44100*2*1));
	modBufferMoreData();
	} catch (err) {}
}

function modBufferMoreData() {
	if (modPlaying) {
		//dynamicAudio.write(modPlayer.getSamples(88200));
		dynamicAudio.write(modPlayer.getSamples(44100*2/10));
		setTimeout(modBufferMoreData, 90);
	}
}

function modStop() {
	modPlaying = false;
}

function modLoadRemote(path) {
	var fetch = new XMLHttpRequest();
	fetch.open('GET', path);
	fetch.overrideMimeType("text/plain; charset=x-user-defined");
	fetch.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			/* munge response into a binary string */
			var t = this.responseText || "" ;
			var ff = [];
			var mx = t.length;
			var scc= String.fromCharCode;
			for (var z = 0; z < mx; z++) {
				ff[z] = scc(t.charCodeAt(z) & 255);
			}
			var binString = ff.join("");
			
			var modFile = new ModFile(binString);
			//console.log(modFile);
			//var modFile = new ModFile(mod);
			modPlayer = new ModPlayer(modFile, 44100);
			modPlay();
			//document.getElementById('status').innerText = '';
		}
	}
	//document.getElementById('status').innerText = 'loading...';
	fetch.send();
}