// Seleccionar elementos
const sectionsContainer = document.querySelector('.sections-container');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const nextSectionBtn = document.querySelector('.next-section-btn');
const servicesCarousel = document.querySelector('.shelf-items');
const portfolioCarousel = document.querySelector('.carousel-items');
const progressCircle = document.querySelector('.progress-circle');
const prevServiceBtn = document.querySelector('.prev-btn');
const nextServiceBtn = document.querySelector('.next-btn');

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

// Botón para ir a la siguiente sección
if (nextSectionBtn) {
    nextSectionBtn.addEventListener('click', () => {
        const servicesSection = document.getElementById('services');
        const sectionIndex = 1;

        if (window.innerWidth > 768) {
            sectionsContainer.style.transform = `translateX(-${sectionIndex * 20}%)`;
        } else {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Actualizar enlace activo
        navLinks.forEach(l => l.classList.remove('active'));
        document.querySelector('.nav-link[href="#services"]').classList.add('active');
    });
}

// Navegación del carrusel de servicios
if (servicesCarousel && prevServiceBtn && nextServiceBtn) {
    const items = servicesCarousel.querySelectorAll('.shelf-item');
    let currentIndex = 0;

    prevServiceBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            const itemWidth = items[0].offsetWidth + 15; // Ancho + gap
            servicesCarousel.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth'
            });
        }
    });

    nextServiceBtn.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            const itemWidth = items[0].offsetWidth + 15;
            servicesCarousel.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth'
            });
        }
    });
}

// Manejar carrusel de portafolio y barra de progreso
if (portfolioCarousel && progressCircle) {
    const items = portfolioCarousel.querySelectorAll('.portfolio-item');
    const totalItems = items.length;

    portfolioCarousel.addEventListener('scroll', () => {
        const scrollLeft = portfolioCarousel.scrollLeft;
        const itemWidth = portfolioCarousel.scrollWidth / totalItems;
        const currentIndex = Math.round(scrollLeft / itemWidth);
        const progress = (currentIndex / (totalItems - 1)) * 100;

        // Mover el círculo
        progressCircle.style.left = `${progress}%`;
    });
}

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
