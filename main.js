noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('posenet is intialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY= " +noseY);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        difference = floor(leftWristX - rightWristX);

        console.log("leftwristX = " + leftWristX +"rightwristX" + rightWristX + "difference = " + difference);
    }
}

function draw(){
    background(color(0, 0, 255));
    document.getElementById("square_side").innerHTML = "Width and Height of a square will be = " + difference + "px";
    fill("#00008b");
    stroke("#FFD700");
    square(noseX, noseY, difference);
    }