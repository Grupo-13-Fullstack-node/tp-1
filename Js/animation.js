document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos los elementos que queremos animar
    const elements = document.querySelectorAll('.fade-in');

    // Definimos la función de animación
    const fadeIn = () => {
        elements.forEach(element => {
            // Añadimos la clase de animación a cada elemento
            element.classList.add('fadeIn');
        });
    };

    // Llamamos a la función de animación después de un retraso para dar tiempo a que los elementos se carguen
    setTimeout(fadeIn, 500);
});
