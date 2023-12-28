function setup(){
    video = createCapture(VIDEO);
    video.size(650, 500);
    video.position(200, 150);

    canvas = createCanvas(550, 500);
    canvas.position(1250, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#969A97");
}

function modelLoaded(){
    console.log("poseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}