let app;
let visual;
const totalSongs = 5;
const songFiles = [];
let sliderVolume;

let screen = 0;



function setup() {
  createCanvas(1280, 720);
  app = new App(songFiles);
  visual = new Visual(screen);

  

}

function draw() {
  background(220);
  //app.song.setVolume((sliderVolume.value()/10));
  app.showSongs();
    visual.screen0();
    visual.screen1();
    visual.screen2();
  


}

function mousePressed() {

  visual.click0(mouseX,mouseY);
  visual.clickHome(mouseX,mouseY)

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