function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
video=createCapture(VIDEO);
video.parent("game");
video.size(800,400)
posenet=ml5.posenet(video,modelloaded);
posenet.on('pose',gotResults);
}
function modelloaded(){
	console.log("model is loaded");
}
function draw() {
	game()

}
function gotResults(results){
	if(results.length > 0){
		console.log(results);
		nose_x=results[0].pose.nose.x;
		nose_y=results[0].pose.nose.y;
		
	}
	
}







