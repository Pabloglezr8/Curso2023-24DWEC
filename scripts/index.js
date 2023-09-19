// Función para generar un color aleatorio en formato hexadecimal
function generarColorAleatorio() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Obtén una referencia al botón
const cambiarColorButton = document.getElementById("cambiarColorButton");

// Agrega un evento de clic al botón
cambiarColorButton.addEventListener("click", function () {
    // Genera un color aleatorio
    const nuevoColor = generarColorAleatorio();

    // Cambia el color de fondo del cuerpo del documento
    document.body.style.backgroundColor = nuevoColor;
});
