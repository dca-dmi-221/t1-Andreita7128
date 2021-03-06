let app;
const totalSongs = 6;
const songFiles = [];

function setup() {
  createCanvas(1280, 720);
  app = new App(songFiles);
}

function draw() {
  background(220);
  app.draw();
}

function mousePressed() {
  app.pressed();
}

function preload() {
  for (let i = 0; i < totalSongs; i++) {
    songFiles.push(loadSound('./Songs/cancion' + i + '.mp3'));
  }
}