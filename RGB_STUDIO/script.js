// Captura los 3 sliders del HTML
const sR = document.getElementById('rojo');
const sG = document.getElementById('verde');
const sB = document.getElementById('azul');

// Captura el fondo y el código HEX
const fondo = document.getElementById('fondo');
const hexOut = document.getElementById('hexOut');

function toHex(n) {
  /* parseInt convierte a número entero, toString(16) lo pasa a hexadecimal, 
  padStart agrega un "0" si tiene 1 solo dígito, 
  toUpperCase lo pone en mayúsculas — ejemplo: 10 → "0A"*/
  return parseInt(n).toString(16).padStart(2, '0').toUpperCase();
}

// Función principal que actualiza todo al mover un slider
function actualizar() {
  // Lee los valores actuales de cada slider
  const r = sR.value;
  const g = sG.value;
  const b = sB.value;

  // Muestra los números en pantalla
  document.getElementById('nR').textContent = r;
  document.getElementById('nG').textContent = g;
  document.getElementById('nB').textContent = b;

  // Cambia el color del fondo
  fondo.style.background = `rgb(${r}, ${g}, ${b})`;

  // Muestra el código HEX
  hexOut.textContent = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Escucha cuando el usuario mueve cada slider
sR.addEventListener('input', actualizar);
sG.addEventListener('input', actualizar);
sB.addEventListener('input', actualizar);

// Ejecuta al cargar la página para mostrar el color por defecto
actualizar();



