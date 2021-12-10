NoseX=0;
NoseY=0;

function preload() {
  img=loadImage("https://i.postimg.cc/T1gQB06P/4-2-moustache-png-hd.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function modelLoaded(){
    console.log("posenet Ready");
}
function gotPoses(results){
    if(results.length > 0){
      console.log(results);
      NoseX=results[0].pose.nose.x-25;
      NoseY=results[0].pose.nose.y+1;
      console.log("NoseX ="+results[0].pose.nose.x);
      console.log("NoseY ="+results[0].pose.nose.y);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(img, NoseX, NoseY, 60, 60);
}
function take_snapshot(){
    save('myImage.jpg');
}