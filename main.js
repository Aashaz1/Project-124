function setup(){
    video = createCapture(VIDEO);
    video.size(550, 450);
    video.position(200, 150)

    canvas = createCanvas(550, 450);
    canvas.position(900, 180);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background("grey"); 
}

function modelLoaded(){
    console.log("PoseNet is Initialized")
}

function gotPoses(results){
    if(results > 0){
        console.log(results);
    }
}