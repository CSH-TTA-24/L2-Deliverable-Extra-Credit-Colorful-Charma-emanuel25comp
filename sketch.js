let red = 0
let green = 0
let blue = 0

function setup() {
  createCanvas(700, 450);
  background(240);
  rectMode(CENTER);
  noStroke();

  // charmander's face
  fill(247, 186, 133);
  rect(350, 225, 200, 200, 20);

  // charmander's eyes
  fill(29, 45, 49);
  rect(292.5, 182.5, 35, 65);
  rect(407.5, 182.5, 35, 65);
  fill(60, 109, 126);
  rect(292.5, 205, 35, 20)
  rect(407.5, 205, 35, 20)
  fill(26, 33, 41);
  rect(292.5, 185, 15, 40);
  rect(407.5, 185, 15, 40);
  fill(255, 255, 255);
  rect(300, 165, 10, 20);
  rect(400, 165, 10, 20);

  // charmander's mouth
  fill(160, 111, 141);
  rect(350, 272.5, 150, 55);
  fill(201, 153, 191);
  rect(350, 285, 120, 30);
  fill(255, 255, 255);
  rect(307.5, 292.5, 15, 15);
  rect(392.5, 292.5, 15, 15);
  rect(294, 254, 18, 18);
  rect(406, 254, 18, 18);

  // charmander's nose
  fill(206, 152, 116);
  rect(342.5, 231, 5, 12)
  rect(357.5, 231, 5, 12)
  
}
function mouseClicked() {

  function draw() {
    // charmander's face
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
    fill(red, green, blue);
    rect(350, 225, 200, 200, 20);

    // charmander's eyes
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
    fill(red, green, blue);
    rect(292.5, 182.5, 35, 65);
    rect(407.5, 182.5, 35, 65);
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
    fill(red, green, blue);
    rect(292.5, 205, 35, 20)
    rect(407.5, 205, 35, 20)
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
    fill(red, green, blue);
    rect(292.5, 185, 15, 40);
    rect(407.5, 185, 15, 40);
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
    fill(red, green, blue);
    rect(300, 165, 10, 20);
    rect(400, 165, 10, 20);

    // charmander's mouth
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
    fill(red, green, blue);
    rect(350, 272.5, 150, 55);
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
    fill(red, green, blue);
    rect(350, 285, 120, 30);
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
    fill(red, green, blue);
    rect(307.5, 292.5, 15, 15);
    rect(392.5, 292.5, 15, 15);
    rect(294, 254, 18, 18);
    rect(406, 254, 18, 18);

    // charmander's nose
    red = random(0,255);
    green = random(0,255);
    blue = random(0,255);
    fill(red, green, blue);
    rect(342.5, 231, 5, 12)
    rect(357.5, 231, 5, 12)
  }
  draw()
}
