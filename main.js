WristR = 0
WristL = 0
Difference = 0

function setup() {
    canvas = createCanvas(400, 400);
    video = createCapture(VIDEO);
    video.size(500, 500)
    canvas.position(600, 100)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Good Job! Pose Net is working !')
}

function draw() {
    background("grey")
    fill("green")
    textSize(Difference)
    text(‘Mudit’, 100, 100)
    
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        WristR = results[0].pose.rightWrist.x;
        WristL = results[0].pose.leftWrist.x;
        console.log("Right Wrist Is On " + WristR + "Left Wrist Is On " + WristL);
        Difference = floor(WristL - WristR)
    }
}
