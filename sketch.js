var state; // 0, 1, or 2

//images
var fluteImg;
var birdWhistleImg;
var ocarinaImg;
var hamastsaImg;
var shellTrumpetImg;
var panpipeImg;
var oysterCatcherRattleImg;
var peyoteRattleImg;

//sounds
var fluteSound;
var birdWhistleSound;
var ocarinaSound;
var shellTrumpetSound;
var panpipeSound;
var peyoteRattleSound;

function preload() {
	//images
	fluteImg = loadImage("images/1_flute.png");
	birdWhistleImg = loadImage("images/2_birdWhistle.png");
	ocarinaImg = loadImage("images/3_ocarina.png");
	hamastsaImg = loadImage("images/4_hamastsa.png");
	shellTrumpetImg = loadImage("images/5_incisedShellTrumpet.png");
	panpipeImg = loadImage("images/6_panpipe.png");
	oysterCatcherRattleImg = loadImage("images/7_oysterCatcherRattle.png");
	peyoteRattleImg = loadImage("images/8_peyoteRattle.png");

	//sounds
	fluteSound = loadSound("sounds/edited/flute.mp3");
	birdWhistleSound = loadSound("sounds/edited/birdWhistle.mp3");
	ocarinaSound = loadSound("sounds/edited/ocarina.mp3");
	shellTrumpetSound = loadSound("sounds/edited/shellTrumpet.mp3");
	panpipeSound = loadSound("sounds/edited/panpipe.mp3");
	peyoteRattleSound = loadSound("sounds/edited/peyoteRattle.mp3");
}

function setup() {
	createCanvas(800,600);
	background(255,0,0);
	state = 0;
	text('press 1 for state 1, 2 for state 2, or 3 for state 3', 0, 0);
}

function draw() {
	if (state == 0) {
		background(255,0,0);
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
