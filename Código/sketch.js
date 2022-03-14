let app;
let songPrueba; 
let song;

function setup() {
  createCanvas(900, 600);
  app = new App();
  songPrueba = new Song({
    name: "Cóseme",
    author: "Beret",
    time: 201,
    path: 'Songs/Beret - Cóseme (LETRA).mp3'
  })
 // app.play();
song = loadSound('Songs/Beret - Cóseme (LETRA).mp3');
}

function draw() {
  background(220);
  app.show();
  console.log(app.getClick());
  /*let s = second();
  text('Current second: \n' + s, 5, 50);
  let millisecond = millis();
  text('Milliseconds \nrunning: \n' + millisecond, 5, 100);*/
}

function mousePressed() {
//  app.play(mouseX,mouseY);
if (dist(mouseX, mouseY, 450, 500) < 25 && app.getClick() === false) {
  song.play(); 
  app.setClick(true)
} else if (dist(mouseX, mouseY, 450, 500) < 25 && app.getClick() === true) {
  song.stop();
  app.setClick(false)}
}