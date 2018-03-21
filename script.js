var socket = io.connect();
var color;

function handleCoords(coords) {
    fill(coords.color[0], coords.color[1], coords.color[2]);
    ellipse(coords.x, coords.y, 32, 32);
}

socket.on('display coords', handleCoords);

function setup() {
    color = [random(255), random(255), random(255)];
    createCanvas(windowWidth, windowHeight);
    background("#acacac");
}

function mouseDragged() {
    socket.emit('send coords', {x: mouseX, y:mouseY,color:color});
}