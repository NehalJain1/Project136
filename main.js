status = "";
input = "";
function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,480);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input = document.getElementById("object_input").value;
    console.log("Input = " + input);
}

function modelLoaded() {
    console.log("Model has loaded");
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 380);
}
