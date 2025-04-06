document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const dropdown = document.querySelector('.dropdown');
    const links = document.querySelectorAll('.dropdown a');
    const sections = document.querySelectorAll('.section');

    toggle.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            dropdown.classList.remove('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});
