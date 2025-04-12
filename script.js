// Seleccionar elementos
const sectionsContainer = document.querySelector('.sections-container');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const nextSectionBtn = document.querySelector('.next-section-btn');
const servicesCarousel = document.querySelector('.shelf-items');
const portfolioCarousel = document.querySelector('.carousel-items');
const servicesProgressCircle = document.querySelector('#services .progress-circle');
const portfolioProgressCircle = document.querySelector('#portfolio .progress-circle');
const servicesPrevBtn = document.querySelector('#services .prev-btn');
const servicesNextBtn = document.querySelector('#services .next-btn');
const portfolioPrevBtn = document.querySelector('#portfolio .prev-btn');
const portfolioNextBtn = document.querySelector('#portfolio .next-btn');
const prevSectionBtn = document.querySelector('.prev-section-btn');
const nextSectionBtnAbout = document.querySelector('#about .next-section-btn');
const whatsappBtn = document.querySelector('.whatsapp-btn');

// Mostrar botón de WhatsApp tras 5 segundos
if (whatsappBtn) {
    setTimeout(() => {
        whatsappBtn.classList.add('show');
    }, 5000);
}

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

// Botón para ir a la siguiente sección en #home
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

// Botones de navegación en #about
if (prevSectionBtn) {
    prevSectionBtn.addEventListener('click', () => {
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

if (nextSectionBtnAbout) {
    nextSectionBtnAbout.addEventListener('click', () => {
        const portfolioSection = document.getElementById('portfolio');
        const sectionIndex = 3;

        if (window.innerWidth > 768) {
            sectionsContainer.style.transform = `translateX(-${sectionIndex * 20}%)`;
        } else {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Actualizar enlace activo
        navLinks.forEach(l => l.classList.remove('active'));
        document.querySelector('.nav-link[href="#portfolio"]').classList.add('active');
    });
}

// Navegación del carrusel de servicios
if (servicesCarousel && servicesPrevBtn && servicesNextBtn && servicesProgressCircle) {
    const items = servicesCarousel.querySelectorAll('.shelf-item');
    const totalItems = items.length;
    let currentIndex = 0;

    const updateProgress = () => {
        if (totalItems > 1) {
            const progress = (currentIndex / (totalItems - 1)) * 100;
            servicesProgressCircle.style.left = `${progress}%`;
        } else {
            servicesProgressCircle.style.left = '0%';
        }
    };

    servicesPrevBtn.addEventListener('click', () => {
        if (currentIndex === 0) {
            // Ir a #home
            const homeSection = document.getElementById('home');
            const sectionIndex = 0;

            if (window.innerWidth > 768) {
                sectionsContainer.style.transform = `translateX(-${sectionIndex * 20}%)`;
            } else {
                homeSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Actualizar enlace activo
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector('.nav-link[href="#home"]').classList.add('active');
        } else {
            currentIndex--;
            servicesCarousel.scrollTo({
                left: currentIndex * servicesCarousel.offsetWidth,
                behavior: 'smooth'
            });
            updateProgress();
        }
    });

    servicesNextBtn.addEventListener('click', () => {
        if (currentIndex === totalItems - 1) {
            // Ir a #about
            const aboutSection = document.getElementById('about');
            const sectionIndex = 2;

            if (window.innerWidth > 768) {
                sectionsContainer.style.transform = `translateX(-${sectionIndex * 20}%)`;
            } else {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Actualizar enlace activo
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector('.nav-link[href="#about"]').classList.add('active');
        } else {
            currentIndex++;
            servicesCarousel.scrollTo({
                left: currentIndex * servicesCarousel.offsetWidth,
                behavior: 'smooth'
            });
            updateProgress();
        }
    });

    servicesCarousel.addEventListener('scroll', () => {
        const scrollLeft = servicesCarousel.scrollLeft;
        const itemWidth = servicesCarousel.offsetWidth;
        currentIndex = Math.round(scrollLeft / itemWidth);
        updateProgress();
    });

    // Inicializar progreso
    updateProgress();
}

// Navegación del carrusel de portafolio
if (portfolioCarousel && portfolioPrevBtn && portfolioNextBtn && portfolioProgressCircle) {
    const items = portfolioCarousel.querySelectorAll('.portfolio-item');
    const totalItems = items.length;
    let currentIndex = 0;

    const updateProgress = () => {
        if (totalItems > 1) {
            const progress = (currentIndex / (totalItems - 1)) * 100;
            portfolioProgressCircle.style.left = `${progress}%`;
        } else {
            portfolioProgressCircle.style.left = '0%';
        }
    };

    portfolioPrevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            portfolioCarousel.scrollTo({
                left: currentIndex * portfolioCarousel.offsetWidth,
                behavior: 'smooth'
            });
            updateProgress();
        }
    });

    portfolioNextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            portfolioCarousel.scrollTo({
                left: currentIndex * portfolioCarousel.offsetWidth,
                behavior: 'smooth'
            });
            updateProgress();
        }
    });

    portfolioCarousel.addEventListener('scroll', () => {
        const scrollLeft = portfolioCarousel.scrollLeft;
        const itemWidth = portfolioCarousel.offsetWidth;
        currentIndex = Math.round(scrollLeft / itemWidth);
        updateProgress();
    });

    // Inicializar progreso
    updateProgress();
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
