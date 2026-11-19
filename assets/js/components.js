/**
 * REUSABLE COMPONENTS JAVASCRIPT — JAHID HASAN PORTFOLIO
 * Project filtering, FAQ accordions, and interactive utilities
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. FAQ Accordion Interaction
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach(card => {
        const title = card.querySelector('h3');
        if (title) {
            title.style.cursor = 'pointer';
            title.addEventListener('click', () => {
                card.classList.toggle('active');
            });
        }
    });

    // 2. Project Category Filtering (For projects/index.html)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-category]');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;
                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category.includes(filter)) {
                        card.style.display = 'flex';
                        setTimeout(() => { card.style.opacity = '1'; }, 20);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => { card.style.display = 'none'; }, 250);
                    }
                });
            });
        });
    }

    // 3. Contact Form Submission (Client-Side feedback)
    const contactForm = document.getElementById('contactForm');
    const formNotice = document.getElementById('formNotice');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending message...';

            // Simulate immediate client-side handling & WhatsApp / mailto fallback
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                if (formNotice) {
                    formNotice.style.display = 'block';
                    formNotice.className = 'form-notice success';
                    formNotice.innerHTML = '<strong>Thank you!</strong> Your message has been prepared. For instant response, you can also connect via <a href="https://wa.me/8801701367333" target="_blank" rel="noopener" style="text-decoration: underline; font-weight: bold; color: var(--primary);">WhatsApp (+8801701367333)</a>.';
                }
                contactForm.reset();
            }, 800);
        });
    }
});
