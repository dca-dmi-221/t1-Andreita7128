let app;
let sliderVolume;
let screen = 0;
let bg;



function setup() {
  createCanvas(1280,720);
  app = new App();
  sliderVolume = createSlider(-1, 10);
  sliderVolume.position(700, 500);
  bg = loadImage('/Images/Backg1.jpg')
}

function draw() {
  background(220);
  //app.song.setVolume((sliderVolume.value()/10));
  //app.showSongs();


  if(screen === 0){
    app.screen0();
  }
}

function mousePressed() {
  if(screen === 0){
    app.click0(mouseX,mouseY);
    
  }
  


}

function mouseReleased() {}

