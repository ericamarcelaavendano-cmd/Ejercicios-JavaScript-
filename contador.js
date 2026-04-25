
 //agregar dos botones mas uno que disminuya  y el otro para reiniciar 


let cuenta = 0;
function aumentar() {
    cuenta++; 
    document.getElementById("numero").innerHTML = cuenta;
    //Aqui cambio el color de aumentar por verde
    document.getElementById("numero").style.color = "green";
}

// FUNCIÓN PARA DISMINUIR 
function disminuir() {
    cuenta--; 
    document.getElementById("numero").innerHTML = cuenta;
    //si pasa menor de cero empieza con color rojo
    if (cuenta < 0) {
        //Aqui cambiio el color tambien 
        document.getElementById("numero").style.color = "red";
    }
}

// FUNCIÓN PARA REINICIAR 
function reiniciar() {
    cuenta = 0; 
    document.getElementById("numero").innerHTML = cuenta;
    // Para que pase a otro color 
    document.getElementById("numero").style.color = "black";
}



function actualizarVista() {
    const elemento = document.getElementById("numero");
    elemento.innerHTML = cuenta;

    // Efecto de color
    if (cuenta < 0) {
        elemento.style.color = "#ff4d4d"; 
    } else if (cuenta > 0) {
        elemento.style.color = "#2ecc71"; 
    } else {
        elemento.style.color = "#333";
    }

    // Animación de "pop"
    elemento.style.transform = "scale(1.2)";
    setTimeout(() => {
        elemento.style.transform = "scale(1)";
    }, 100);
}

function aumentar() {
    cuenta++;
    actualizarVista();
}

function disminuir() {
    cuenta--;
    actualizarVista();
}

function reiniciar() {
    cuenta = 0;
    actualizarVista();
}


