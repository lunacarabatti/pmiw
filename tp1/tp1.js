//Carabatti Luna
//tp1 comision (p5.js)
//https://youtu.be/9D8T1u-Cwjg

let rombos;
     
function preload() {
  rombos = loadImage('data/rombos.jpg'); // ahora es data/imagen.formato
}
         
function setup() {
  createCanvas(800, 400);
  fill(255); // Fondo
  rect(400, 0, 400, 800);
}

function draw() {
  if (mouseIsPressed) {
    let mx = map(mouseX, 400, width, 250, 150);
    background(mx, 220);
  }

  let ancho = width / 10;
  let alto = height / 5;

  for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
      let centerX = width / 2 + ancho * (2 * b + 1);
      let centerY = alto * (2 * a + 1);   
      Rombos(ancho * 2, alto * 2, centerX, centerY);  
    }
  }

let anchor = width / 10; // Segundo rombo
 let altor = height / 5;

  for (let a = 0; a < 3; a++) {
   for (let b = -1; b < 4; b++) {
     let centerX = width / 2 + anchor * (2 * b + 2);
      let centerY = altor * (2 * a + 1);
      Rombos(anchor * 2, altor * 2, centerX, centerY);
    }
  }

 image(rombos, 0, 0, 400, 400);
}
