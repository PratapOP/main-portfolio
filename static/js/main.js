/* =========================================
   NETFLIX ORIGINAL PORTFOLIO — MAIN JS
   Phase 4: UX-Polished Interactions
========================================= */

/* -------- DARK / LIGHT MODE -------- */
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

/* Load saved theme preference */
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }
});

/* -------- SCROLL REVEAL (ONE-TIME, OPTIMIZED) -------- */
const revealElements = document.querySelectorAll(".fade-in, .slide-up");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (
            elementTop < windowHeight - 120 &&
            !element.classList.contains("revealed")
        ) {
            element.classList.add("revealed");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* -------- HERO CTA SMOOTH SCROLL -------- */
const heroExploreBtn = document.querySelector(".hero .netflix-btn");

if (heroExploreBtn) {
    heroExploreBtn.addEventListener("click", () => {
        const aboutSection = document.querySelector(".section");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}
