var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Box() {
    this.x = 10;
    this.y = 10;
    this.width = 100;
    this.height = 100;
}

var box = new Box();
var boxes = [];
var totalBoxes = 100;

for(var i=0; i<100; i++){
    boxes[i] = new Box();
}

function update() {
  boxes.forEach(function(box, i){
    box.x = Math.random() < 0.5 ? -1 : 1;
    box.y = Math.random() < 0.5 ? -1 : 1;
  });  
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //x, y, width, height
    
    boxes.forEach(function(box, i) {
        context.fillRect(box.x, box.y, box.width, box.height);
    });

}

function loop() {
    update();
    draw();
    window.requestAnimationFrame(loop);
    //This will call the loop function on every frame, i.e. 30 fs or 60 fps
    //according to the browser speed.
}

loop();
