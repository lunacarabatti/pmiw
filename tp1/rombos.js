function Rombos(width, height, centerX, centerY) {
  fill(220);
  fill(0, 2);
  let ancho = width / 2;
  let alto = height / 2;

  quad(centerX, centerY - alto, // Punto superior
       centerX + ancho, centerY,  // Punto derecho
       centerX, centerY + alto, // Punto inferior
       centerX - ancho, centerY); // Punto izquierdo
}
