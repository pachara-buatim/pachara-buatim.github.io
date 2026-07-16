const light = document.querySelector(".cursor-light");

window.addEventListener("mousemove", (e) => {
    light.style.setProperty("--x", `${e.clientX}px`);
    light.style.setProperty("--y", `${e.clientY}px`);
});

const sections = document.querySelectorAll("#about-section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-link[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}, {
    threshold: 0.5
});

sections.forEach(section => {
    observer.observe(section);
});