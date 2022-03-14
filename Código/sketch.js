let app;
let song;
let sliderVolume;


function setup() {
  createCanvas(900, 600);
  app = new App();
  sliderVolume = createSlider(0,10);
  sliderVolume.position(700,500);
}

function draw() {
  background(220);
  app.show();
  song.setVolume((sliderVolume.value()/10));
  console.log(songPrueba.getTime());
}

function mousePressed() {
  if (dist(mouseX, mouseY, 450, 500) < 25 && app.getClick() === false) {
    song.play();
    app.setClick(true)
  } else if (dist(mouseX, mouseY, 450, 500) < 25 && app.getClick() === true) {
    song.pause();
    app.setClick(false)
  }
}

function mouseDragged(){

}