let app;
const totalSongs = 5;
const songFiles = [];
let sliderVolume;

let buttomPlay;

let screen = 0;



function setup() {
  createCanvas(900, 600);
  app = new App(songFiles);
  sliderVolume = createSlider(-1, 10);
  sliderVolume.position(700, 500);

  buttomPlay = new Buttom({
    x: 450,
    y: 500,
    b: 50,
    h: 50
  });
}

function draw() {
  background(220);
  //app.song.setVolume((sliderVolume.value()/10));
  app.showSongs();


  buttomPlay.show();
}

function mousePressed() {
  buttomPlay.clicker(mouseX, mouseY);

  console.log(songFiles)
  if (dist(mouseX, mouseY, 450, 500) < 25 && buttomPlay.click === false) {
    songFiles[0].play();
    //   app.setClick(true)
  } else if (dist(mouseX, mouseY, 450, 500) < 25 && buttomPlay.click === true) {
    songFiles[0].pause();

    // app.setClick(false)
  }
}

function mouseReleased() {}

function preload() {
  for (let i = 0; i < totalSongs; i++) {
    songFiles.push(loadSound('/Songs/cancion' + i + '.mp3'));
  }
}