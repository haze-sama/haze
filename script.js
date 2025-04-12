// Seleccionar todos los enlaces del menú
const navLinks = document.querySelectorAll('.nav-link');
// Seleccionar todas las secciones de la página
const sections = document.querySelectorAll('.section');

// Función para remover la clase 'active' de todos los enlaces
function removeActiveClasses() {
    // Itera sobre cada enlace y elimina la clase 'active'
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Función para detectar la sección visible y activar el enlace correspondiente
function setActiveLink() {
    // Obtiene la posición actual del scroll, ajustada por el header
    let scrollPosition = window.scrollY + 100;

    // Itera sobre cada sección para determinar cuál está visible
    sections.forEach(section => {
        // Obtiene la posición superior de la sección
        const sectionTop = section.offsetTop;
        // Obtiene la altura de la sección
        const sectionHeight = section.clientHeight;
        // Obtiene el ID de la sección
        const sectionId = section.getAttribute('id');

        // Verifica si la posición del scroll está dentro de los límites de la sección
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remueve la clase 'active' de todos los enlaces
            removeActiveClasses();
            // Añade la clase 'active' al enlace correspondiente
            document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
        }
    });
}

// Desplazamiento suave al hacer clic en un enlace del menú
navLinks.forEach(link => {
    // Añade un evento de clic a cada enlace
    link.addEventListener('click', (e) => {
        // Previene el comportamiento por defecto del enlace
        e.preventDefault();
        // Obtiene el ID de la sección a la que apunta el enlace
        const targetId = link.getAttribute('href').substring(1);
        // Selecciona la sección objetivo
        const targetSection = document.getElementById(targetId);

        // Desplaza la página suavemente hasta la sección objetivo
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Ajusta la posición para el header
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});

// Escuchar el evento de scroll para actualizar el enlace activo
window.addEventListener('scroll', setActiveLink);

// Llamar a la función al cargar la página para establecer el enlace activo inicial
window.addEventListener('load', setActiveLink);