/**
 * MAIN JAVASCRIPT — JAHID HASAN PORTFOLIO
 * Vanilla JS • Lightweight & Performant • Zero External Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Header scroll effect
    const header = document.getElementById('header');
    function updateHeader() {
        if (!header) return;
        if (window.scrollY > 25) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            document.body.classList.toggle('menu-open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                document.body.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    // 3. Scroll Progress Indicator
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        function updateProgress() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            scrollProgress.style.width = progress + '%';
        }
        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
    }

    // 4. Reveal on Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('visible'));
    }

    // 5. Typing Animation (Hero section)
    const typingText = document.getElementById('typingText');
    if (typingText) {
        const roles = [
            "WordPress Developer",
            "WooCommerce & BD eCommerce Expert",
            "PHP & Laravel Application Builder",
            "Elementor & Custom UI/UX Specialist",
            "Website Speed & Technical SEO Specialist"
        ];

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeLoop() {
            const current = roles[roleIndex];
            if (!isDeleting) {
                typingText.textContent = current.slice(0, charIndex + 1);
                charIndex++;
                if (charIndex === current.length) {
                    isDeleting = true;
                    setTimeout(typeLoop, 1800);
                    return;
                }
            } else {
                typingText.textContent = current.slice(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                }
            }
            setTimeout(typeLoop, isDeleting ? 40 : 75);
        }
        typeLoop();
    }

    // 6. Dynamic Year in Footer
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });

    // 7. Active Nav Link Detection
    const currentPath = window.location.pathname.replace(/\/$/, '');
    const navAnchors = document.querySelectorAll('.nav-links a');
    navAnchors.forEach(anchor => {
        const href = anchor.getAttribute('href');
        if (!href) return;
        const normalizedHref = href.replace(/\/$/, '').replace(/^\.\.\//, '').replace(/^\.\//, '');
        if (currentPath.endsWith(normalizedHref) && normalizedHref !== '') {
            anchor.classList.add('active');
        }
    });
});
