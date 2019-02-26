var r = 127; // r value variable
var g = 127; // g value variable
var b = 127; // b value variable
var time = 0; // time variable
var button; // button variable

function setup() { // sets up the work area
  createCanvas(100, 100); // sets canvas to specified dimensions
  noStroke();
}

function draw() { // function to produce the objects involved
  background(0, 10); // creates a black background woth low opacity to leave trails

  // creates ellipse mesh along with the waves
  for (var y = 0; y <= width; y = y + 100) {
    for (var x = 0; x <= width; x = x + 10) {
      // the waves starting point varies on mouse location
      var angleX = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      var angleY = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also based on the location of the particle
      var angle = angleX * (x / width) + angleY * (y / height);

      // each particle moves in an oscillation
      var movementX = x + 10 * cos(2 * PI * time + angle);
      var movementY = y + 10 * sin(2 * PI * time + angle);

      var size = 3 // size variable
      fill(r, g, b); // fill particle
      ellipse(movementX, movementY, size, size); // draw particle
      fill(r, g, b); // fill particle
      ellipse(movementY, movementX, size, size); // draw particle
    }
  }
  time = time + 0.01; // updates time
}
