//  Esta función genera un color hexadecimal aleatorio
// No recibe nada y devuelve un color como: #a3f2b1
function colorAleatorio() {

  // Math.random() genera un número decimal entre 0 y 1, ejemplo: 0.4567
  // 0xFFFFFF es el número 16777215 en hexadecimal (total de colores posibles)
  // Al multiplicarlos obtenemos un número entre 0 y 16,777,215
  // Math.floor() elimina los decimales, ejemplo: 7,654,321
  let numero = Math.floor(Math.random() * 0xFFFFFF);

  // toString(16) convierte el número a hexadecimal, ejemplo: 74c5b1
  // padStart(6, '0') asegura que siempre tenga 6 caracteres
  // si el hex tiene menos de 6 letras, rellena con ceros a la izquierda
  // ejemplo: 'a3f' se convierte en '000a3f'
  let hex = numero.toString(16).padStart(6, '0');

  // Devolvemos el color completo con el # adelante
  // ejemplo: '#74c5b1'
  return '#' + hex;
}


// 🖱️ Esta función se ejecuta cada vez que el usuario hanotce clic en el botón
function cambiarColor() {

  // Llamamos colorAleatorio() y guardamos el resultado en una variable
  // ejemplo: nuevoColor = '#74c5b1'
  let nuevoColor = colorAleatorio();

  // document.body accede al <body> del HTML
  // .style.backgroundColor le cambia el color de fondo
  document.body.style.backgroundColor = nuevoColor;

  // document.getElementById('codigoColor') busca el elemento con id="codigoColor"
  // .textContent cambia el texto que se muestra dentro de ese elemento
  document.getElementById('codigoColor').textContent = nuevoColor;
}