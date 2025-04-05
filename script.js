document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const dropdown = document.querySelector('.dropdown');
    const links = document.querySelectorAll('.dropdown a');

    // Toggle menú desplegable
    toggle.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });

    // Navegación suave
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
            dropdown.classList.remove('active'); // Cierra el menú en móviles
        });
    });
});