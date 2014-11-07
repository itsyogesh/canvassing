var canvas = document.getElementById('game');

canvas.width = 1024;
canvas.height = 800;

var context = canvas.getContext('2d');

function Box (options) {
    this.x = (options.x) ? options.x : 10;
    this.y = (options.y) ? options.y : 10;
    this.width = (options.width) ? options.width : 100;
    this.height = (options.height) ? options.height : 100;
    this.color = (options.color) ? options.color : '#000';
}

var box = new Box();
var boxes = [];
var totalBoxes = 100;

for(var i=0; i<100; i++){
    boxes[i] = new Box({
        x: 10+i,
        y: 10+i,
        width: 2*i,
        height: 3*i,
        color: randomColor(0, 255, 0, 255, 0, 255, .5)
    });
}

function update() {

}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //x, y, width, height
    
    boxes.forEach(function(box, i) {
        context.fillStyle = box.color;
        context.fillRect(box.x, box.y, box.width, box.height);
    });

}

function loop() {
    update();
    draw();
    window.requestAnimationFrame(loop);
    //This will call the loop function on every frame, i.e. 30 fps or 60 fps
    //according to the browser speed.
}

function randomNumber(min, max){
    return Math.round(Math.random()* (max - min + 1) + min);
}

function randomColor(rmin, rmax, gmin, gmax, bmin, bmax, alpha){
    var r = randomNumber(rmin, rmax);
    var g = randomNumber(gmin, gmax);
    var b = randomNumber(bmin, gmax);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
}
loop();
