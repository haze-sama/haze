document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const dropdown = document.querySelector('.dropdown');
    const links = document.querySelectorAll('.dropdown a');

    // Toggle menú hamburguesa
    toggle.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });

    // Navegación suave y cerrar menú
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
            dropdown.classList.remove('active'); // Cierra el menú al hacer clic
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});