document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const dropdown = document.querySelector('.dropdown');
    const links = document.querySelectorAll('.dropdown a');
    const sections = document.querySelectorAll('.section');

    // Toggle menú hamburguesa
    toggle.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });

    // Cambiar vistas
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');

            // Cambiar sección activa
            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');

            // Cambiar link activo
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Cerrar menú en móviles
            dropdown.classList.remove('active');

            // Desplazar al inicio del contenedor
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});