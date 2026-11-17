
/* =====================================
   EASHAAN TANEJA — PORTFOLIO INTERACTIONS
===================================== */

// 1. Reveal sections smoothly as they enter the screen

const revealElements = document.querySelectorAll(
    ".section, .experience-card, .achievement-card, .timeline-item"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// 2. Highlight the navigation link for the current section

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active-link");

                    if (
                        link.getAttribute("href") ===
                        "#" + entry.target.id
                    ) {
                        link.classList.add("active-link");
                    }
                });
            }
        });
    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);

sections.forEach(section => {
    sectionObserver.observe(section);
});


// 3. Update footer year automatically

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        "Designed with purpose. © " +
        new Date().getFullYear() +
        " Eashaan Taneja.";
}


// 4. Smoothly close mobile navigation after clicking a link

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => {
            item.classList.remove("active-link");
        });

        link.classList.add("active-link");
    });
});
