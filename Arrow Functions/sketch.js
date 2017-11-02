function Circle(){
    noStroke();
    fill(random(255), random(255), random(255));
    ellipse(random(400), random(400), 20, 20);
}

function setup(){
    let canvas = createCanvas(400,400);
    background(0);
    stroke(255);
    fill(255);
    text('CLICK THE SCREEN', 175, 185, 30);
    canvas.mousePressed(() => circle = new Circle());

}
