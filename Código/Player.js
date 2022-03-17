let app;
const totalSongs = 2;
const songFiles = [];
let sliderVolume;

let buttomPlay;



function setup() {
  createCanvas(900, 600);
  app = new App(songFiles);
  sliderVolume = createSlider(-1,10);
  sliderVolume.position(700,500);

  buttomPlay = new Buttom({x: 450, y:500, b:50, h:50});
}

function draw() {
  background(220);
  //app.show();
  //app.song.setVolume((sliderVolume.value()/10));


  buttomPlay.show();
}

function mousePressed() {
buttomPlay.click(mouseX,mouseY);


 /* if (dist(mouseX, mouseY, 450, 500) < 25 && app.getClick() === false) {
    song.play();
    app.setClick(true)
  } else if (dist(mouseX, mouseY, 450, 500) < 25 && app.getClick() === true) {
    song.pause();
    app.setClick(false)
  }*/
}

function preload() {
  for(let i = 0; i < totalSongs; i++) {
    songFiles.push(loadSound('/Songs/cancion'+i+'.mp3'));
  }
}