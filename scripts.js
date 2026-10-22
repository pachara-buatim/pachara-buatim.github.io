
const navLinks = document.querySelectorAll('.nav-links a');
const navItems = document.querySelectorAll('.nav-item');

const sections = [
    document.querySelector('#about-section'),
    document.querySelector('#project-section'),
    document.querySelector('#blog-section')
];

// Set the active navigation link
function setActiveLink(targetId) {
    navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${targetId}`;

        link.classList.toggle('active', isActive);

        const line = link.closest('.nav-item').querySelector('.line');
        line.classList.toggle('active', isActive);
    });
}

// Default active section: About
setActiveLink('about-section');

// Update active link when clicking navigation
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('href').slice(1);
        setActiveLink(targetId);
    });
});

// Update active link while scrolling
function updateActiveSection() {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    let currentSection = sections[0];

    sections.forEach(section => {
        if (section) {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;

            if (scrollPosition + viewportHeight * 0.35 >= sectionTop) {
                currentSection = section;
            }
        }
    });

    if (currentSection) {
        setActiveLink(currentSection.id);
    }
}

window.addEventListener('scroll', updateActiveSection);
window.addEventListener('resize', updateActiveSection);
