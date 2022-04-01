let app;
const totalSongs = 6;
const songFiles = [];
let sliderVolume;





function setup() {
  createCanvas(1280, 720);
  app = new App(songFiles);




}

function draw() {
  background(220);
  //app.song.setVolume((sliderVolume.value()/10));

  app.draw();



}

function mousePressed() {
  app.pressed();

  /*console.log(songFiles)
  if (dist(mouseX, mouseY, 450, 500) < 25 && buttomPlay.click === false) {
    songFiles[0].play();
    //   app.setClick(true)
  } else if (dist(mouseX, mouseY, 450, 500) < 25 && buttomPlay.click === true) {
    songFiles[0].pause();

    // app.setClick(false)
  }*/
}

function mouseReleased() {}

function preload() {
  for (let i = 0; i < totalSongs; i++) {
    songFiles.push(loadSound('/Songs/cancion' + i + '.mp3'));
  }
}