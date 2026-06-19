const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const faqButtons = document.querySelectorAll(".faq-item button");
const leadForm = document.querySelector("#lead-form");
const formSuccess = document.querySelector("#form-success");
const revealItems = document.querySelectorAll(".reveal");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navMenu && navToggle) {
            navMenu.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        }
    });
});

faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const item = button.closest(".faq-item");
        const isOpen = item.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(isOpen));
    });
});

if (leadForm && formSuccess) {
    leadForm.addEventListener("submit", (event) => {
        event.preventDefault();
        formSuccess.textContent = "Gracias, hemos recibido tu solicitud. Te contactaremos pronto.";
        leadForm.reset();
    });
}

// Reveals each block once, keeping the animation light and inexpensive.
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));
