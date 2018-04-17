var state; // 0, 1, or 2
var instruments; // s0
var sounds; // s0
var remixSounds;
var pictures;

function preload() {
	sounds = [];
	sounds.push(loadSound('sounds/edited/instruments/flute.mp3')); // 1
	sounds.push(loadSound('sounds/edited/instruments/birdWhistle.mp3')); // 2
	sounds.push(loadSound('sounds/edited/instruments/ocarina.mp3')); // 3
	sounds.push(''); // 4 - not there
	sounds.push(loadSound('sounds/edited/instruments/shellTrumpet.mp3')); // 5
	sounds.push(loadSound('sounds/edited/instruments/panpipe.mp3')); // 6
	sounds.push(''); // 7 - not there
	sounds.push(loadSound('sounds/edited/instruments/peyoteRattle.mp3')); // 8
	soundFormats('ogg','mp3');

	remixSounds = [];
	remixSounds.push(loadSound('sounds/edited/remixSounds/70BPM_SimpleStraightBeat.mp3'));
	remixSounds.push(loadSound('sounds/edited/remixSounds/bellRing.mp3'));
	remixSounds.push(loadSound('sounds/edited/remixSounds/birdChirping.mp3'));
	remixSounds.push(loadSound('sounds/edited/remixSounds/bossaNova_DrumGroove.mp3'));
	remixSounds.push(loadSound('sounds/edited/remixSounds/caxixiShakerSolo.mp3'));
	remixSounds.push(loadSound('sounds/edited/remixSounds/dubstepBeat.mp3'));
	remixSounds.push(loadSound('sounds/edited/remixSounds/flowingStream.mp3'));
	remixSounds.push(loadSound('sounds/edited/remixSounds/guiro_Cha.mp3'));
	remixSounds.push(loadSound('sounds/edited/remixSounds/hipHop.mp3'));
	remixSounds.push(loadSound('sounds/edited/remixSounds/ocean.mp3'));
	remixSounds.push(loadSound('sounds/edited/remixSounds/soulRnB.mp3'));
	remixSounds.push(loadSound('sounds/edited/remixSounds/tboxDrum.mp3'));

	pictures = [];
	for (var i = 0; i < 8; i++) {
		pictures.push(loadImage('images/' + String(i+1) + '.png'));
	}
	pictures.push(loadImage('images/drumIcon.png'));
	pictures.push(loadImage('images/treeIcon.png'));
}

function setup() {
	createCanvas(800,600);
	background(255,0,0);
	imageMode(CENTER);
	state = 0;

	// s0
	instruments = [];
	var x = 70;
	var y = 150;
	for (var i = 0; i < 8; i++) {
		instruments.push(new Instrument(x,y,i));
		if (i == 3) { // for two rows of four
			x = 70;
			y = 350;
		}
		else {
			x += 120;
		}
	}
}

function draw() {
	if (state == 0) {
		background(255,0,0);
		text("Play", 25,25);

		for (var i = 0; i < 8; i++) {
			instruments[i].display();
		}
	}
	else if (state == 1) {
		background(0,255,0);
	}
	else if (state == 2) {
		background(0,0,255);
	}
}

function keyPressed() {
	if (keyCode === 39 && state !== 2) {
		state++;
	}
	else if (keyCode === 37 && state !== 0) {
		state--;
	}
}

// s0
class Instrument { // maybe i could have play/pause right on the ellipse? like the play/pause graphic, gray it or change opacity when it plays?
	constructor(x,y,i) {
		this.x = x;
		this.y = y;
		this.i = i;
		this.startMillis = 0;
		if (sounds[this.i] != '') {
			this.enabled = true;
			this.hasSound = true;
		}
		else {
			this.enabled = false;
			this.hasSound = false;
		}
	}

	display() {
		if (this.hasSound && sounds[this.i].isPlaying()) {
			fill(128);
		}
		else if (!this.hasSound) {
			fill(0);
		}
		else {
			fill(255);
		}
		ellipse(this.x, this.y, 100,100);
		image(pictures[this.i], this.x,this.y,75,75);
		fill(255);
		this.clicked();
	}

	clicked() {
		if (dist(mouseX, mouseY, this.x, this.y) < 50 && mouseIsPressed && this.hasSound) {
			if (this.enabled) {
				this.enabled = false;
				sounds[this.i].play();
				this.startMillis = millis();
			}
			else if (!this.enabled && (millis() - this.startMillis) > 250) { // it has to be a really light click right now
				sounds[this.i].stop();
				this.enabled = true;
				this.startMillis = 0;
			}
		}
	}

}
