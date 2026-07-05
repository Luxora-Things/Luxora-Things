document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const revealElements = document.querySelectorAll('section, .home-sec-texts, .home-links, .story, .project-card, .work-content, .contact-section, footer');

    const updateNavbarState = () => {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 18);
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
    });

    revealElements.forEach((el, index) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${index * 70}ms`;
        revealObserver.observe(el);
    });

    updateNavbarState();
    window.addEventListener('scroll', updateNavbarState);

});
