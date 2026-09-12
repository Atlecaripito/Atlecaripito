/*.::ESCUELA DE FÚTBOL ATLÉTICO CARIPITO 11/09/2026::.*/
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-nav]");
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", nav.classList.contains("open"));
        });
    }

    document.querySelectorAll("[data-filter]").forEach((button) => {
        button.addEventListener("click", () => {
            document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
            button.classList.add("active");
            const filter = button.dataset.filter;
            document.querySelectorAll("[data-category]").forEach((card) => {
                card.hidden = filter !== "all" && card.dataset.category !== filter;
            });
        });
    });

    const modal = document.querySelector("[data-modal]");
    if (modal) {
        const modalImage = modal.querySelector("[data-modal-image]");
        const modalName = modal.querySelector("[data-modal-name]");
        const modalRole = modal.querySelector("[data-modal-role]");
        document.querySelectorAll("[data-person]").forEach((button) => {
            button.addEventListener("click", () => {
                modalImage.src = button.dataset.image;
                modalImage.alt = button.dataset.name;
                modalName.textContent = button.dataset.name;
                modalRole.textContent = `${button.dataset.role} · ${button.dataset.team}`;
                modal.classList.add("open");
                modal.setAttribute("aria-hidden", "false");
            });
        });
        const close = () => {
            modal.classList.remove("open");
            modal.setAttribute("aria-hidden", "true");
        };
        modal.querySelector("[data-close-modal]").addEventListener("click", close);
        modal.addEventListener("click", (event) => { if (event.target === modal) close(); });
        document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
    }

    document.querySelectorAll("[data-year]").forEach((element) => { element.textContent = new Date().getFullYear(); });

    const footer = document.querySelector("footer");
    if (footer && !footer.querySelector("[data-social-footer]")) {
        const footerContainer = footer.querySelector(".container") || footer;
        footerContainer.classList.add("footer-layout");
        footerContainer.innerHTML = `
            <div class="footer-brand"><img src="imagen/logo.png" alt="Escudo Atlético Caripito"></div>
            <div class="footer-center"><strong>Atlético Caripito</strong><span>Formando futuras estrellas dentro y fuera de la cancha.</span><small>© ${new Date().getFullYear()} · Escuela de fútbol · Monagas</small></div>
            <div class="social-footer" data-social-footer="true">
                <div class="social-copy"><strong>Síguenos</strong><span>La familia atlética en movimiento.</span></div>
                <div class="social-links">
                <a class="social-link" data-tooltip="Facebook" href="https://www.facebook.com/atleticocaripito" target="_blank" rel="noopener" aria-label="Facebook Atlético Caripito"><span class="social-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1Z"/></svg></span><span class="social-label">Facebook</span></a>
                <a class="social-link" data-tooltip="Instagram" href="https://www.instagram.com/atleticocaripito/" target="_blank" rel="noopener" aria-label="Instagram Atlético Caripito"><span class="social-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 12 16.5 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 12 14.5 2.5 2.5 0 0 0 12 9.5ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></span><span class="social-label">Instagram</span></a>
                <a class="social-link" data-tooltip="TikTok" href="https://www.tiktok.com/@atleticocaripito" target="_blank" rel="noopener" aria-label="TikTok Atlético Caripito"><span class="social-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3h3c.2 2 1.4 3.5 3 4v3c-1.2 0-2.3-.3-3.3-.9V15a6 6 0 1 1-6-6c.4 0 .8 0 1.2.1v3.1A3 3 0 1 0 15 15V3Z"/></svg></span><span class="social-label">TikTok</span></a>
                <a class="social-link" data-tooltip="WhatsApp" href="https://wa.me/?text=Hola%20Atl%C3%A9tico%20Caripito" target="_blank" rel="noopener" aria-label="WhatsApp Atlético Caripito"><span class="social-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.8 9.8 0 0 0-8.5 14.7L2 22l5.5-1.4A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 6.8 12.2l-.3.4.2.8-2.7-.7-.4.2A8 8 0 1 1 12 4Zm-3 3.5c-.3 0-.6.1-.8.4-.3.3-1 1-1 2.2 0 1.3 1 2.5 1.1 2.7 1.6 2.5 3.8 3.4 4.7 3.6.9.3 1.7.2 2.3-.1.6-.3 1-.9 1.1-1.4.1-.3 0-.5-.2-.6l-1.5-.7c-.2-.1-.4-.1-.6.1l-.6.8c-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.1-1.2-.8-.7-1.2-1.5-1.4-1.8-.1-.2 0-.3.1-.4l.4-.5c.1-.2.1-.3 0-.5l-.6-1.5c-.1-.2-.2-.2-.4-.2Z"/></svg></span><span class="social-label">WhatsApp</span></a>
                </div>
            </div>`;
    }

    const carousel = document.querySelector("[data-carousel]");
    if (carousel) {
        const slides = [...carousel.querySelectorAll(".home-slide")];
        const dots = [...carousel.querySelectorAll("[data-carousel-dot]")];
        const counter = carousel.querySelector("[data-carousel-counter]");
        let currentSlide = 0;
        let autoplay;
        let touchStartX = 0;
        const showSlide = (index) => {
            currentSlide = (index + slides.length) % slides.length;
            slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === currentSlide));
            dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === currentSlide));
            if (counter) counter.textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
        };
        const startAutoplay = () => { autoplay = window.setInterval(() => showSlide(currentSlide + 1), 5000); };
        const stopAutoplay = () => window.clearInterval(autoplay);
        carousel.querySelector("[data-carousel-prev]").addEventListener("click", () => showSlide(currentSlide - 1));
        carousel.querySelector("[data-carousel-next]").addEventListener("click", () => showSlide(currentSlide + 1));
        dots.forEach((dot) => dot.addEventListener("click", () => showSlide(Number(dot.dataset.carouselDot))));
        carousel.addEventListener("mouseenter", stopAutoplay);
        carousel.addEventListener("mouseleave", startAutoplay);
        carousel.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") showSlide(currentSlide - 1);
            if (event.key === "ArrowRight") showSlide(currentSlide + 1);
        });
        carousel.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
        carousel.addEventListener("touchend", (event) => {
            const distance = event.changedTouches[0].screenX - touchStartX;
            if (Math.abs(distance) < 40) return;
            showSlide(currentSlide + (distance < 0 ? 1 : -1));
        }, { passive: true });
        startAutoplay();
    }

    const revealTargets = document.querySelectorAll("main h1, main h2, main .section-heading, main .panel, main .auth-intro, main .category-card, main .card, main .paper, main .story-photo, main .about-image, main .home-carousel, main .category-image");
    if (!("IntersectionObserver" in window)) {
        revealTargets.forEach((element) => element.classList.add("is-visible"));
        return;
    }
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });
    revealTargets.forEach((element, index) => {
        if (element.classList.contains("history-reveal")) return;
        element.classList.add("reveal-auto");
        if (element.matches(".story-photo, .about-image, .home-carousel, .category-image, .panel")) {
            element.classList.add("from-right");
        } else if (index % 3 === 1) {
            element.classList.add("from-left");
        } else if (index % 3 === 2) {
            element.classList.add("from-right");
        }
        element.style.transitionDelay = `${Math.min(index * 35, 210)}ms`;
        revealObserver.observe(element);
    });
});
/*.::ESCUELA DE FÚTBOL ATLÉTICO CARIPITO 11/09/2026::.*/