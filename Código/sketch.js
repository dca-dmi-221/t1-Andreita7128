let app;
function setup() {
  createCanvas(1200, 700);
  app = new App();
}

function draw() {
  background(220);
  let s = second();
text('Current second: \n' + s, 5, 50);
let millisecond = millis();
text('Milliseconds \nrunning: \n' + millisecond, 5, 100);
}
