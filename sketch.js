var state; // 0, 1, or 2

function preload() {

}

function setup() {
	createCanvas(500,500);
	background(255,0,0);
	state = 0;
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
