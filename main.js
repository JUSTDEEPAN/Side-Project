function preload(){
}

function setup() {
    canvas = createCanvas(640, 460);
    canvas.position(450,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image (video, 0, 0, 640, 480);
    tint(tint_color);
    circle(30, 30, 50,);
    circle(30, 430, 50);
    circle(600, 30, 50);
    circle(600, 430, 50);
    rect(50, 20, 530, 20);
    rect(50, 420, 530, 20);
    rect(20, 50, 20, 360);
    rect(590, 50, 20, 360);

}

function take_snapshot(){
    save('filtered_photo.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}