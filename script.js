// Seleccionar elementos
const sectionsContainer = document.querySelector('.sections-container');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

// Alternar menú hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinksContainer.classList.toggle('open');
});

// Navegación al hacer clic en enlaces
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const sectionIndex = Array.from(document.querySelectorAll('.section')).indexOf(targetSection);

        // Deslizamiento horizontal en escritorio, scroll vertical en móvil
        if (window.innerWidth > 768) {
            sectionsContainer.style.transform = `translateX(-${sectionIndex * 20}%)`;
        } else {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Cerrar menú en móviles
        hamburger.classList.remove('open');
        navLinksContainer.classList.remove('open');

        // Actualizar enlace activo
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Actualizar enlace activo al hacer scroll en móviles
window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768) {
        const scrollPosition = window.scrollY + 100;
        document.querySelectorAll('.section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
            }
        });
    }
});

// Establecer enlace activo inicial
window.addEventListener('load', () => {
    const currentSection = document.querySelector('.section');
    if (currentSection) {
        const sectionId = currentSection.getAttribute('id');
        document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
    }
});
