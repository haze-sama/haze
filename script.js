// Seleccionar todos los enlaces del menú
const navLinks = document.querySelectorAll('.nav-link');
// Seleccionar todas las secciones de la página
const sections = document.querySelectorAll('.section');

// Función para remover la clase 'active' de todos los enlaces
function removeActiveClasses() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Función para detectar la sección visible y activar el enlace correspondiente
function setActiveLink() {
    let scrollPosition = window.scrollY + 100;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            removeActiveClasses();
            document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
        }
    });
}

// Desplazamiento suave al hacer clic en un enlace del menú
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Escuchar el evento de scroll para actualizar el enlace activo
window.addEventListener('scroll', setActiveLink);

// Llamar a la función al cargar la página para establecer el enlace activo inicial
window.addEventListener('load', setActiveLink);
