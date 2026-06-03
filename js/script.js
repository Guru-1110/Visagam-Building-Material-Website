document.addEventListener('DOMContentLoaded', () => {
    /* 
    * Navigation Toggle for Mobile
    */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const setMenu = (open) => {
        navMenu.classList.toggle('active', open);
        navToggle.classList.toggle('active', open);
        navToggle.setAttribute('aria-expanded', String(open));
        // Prevent background scroll while the mobile menu is open
        document.body.style.overflow = open ? 'hidden' : '';
    };

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            setMenu(!navMenu.classList.contains('active'));
        });

        // Close on Escape for keyboard users
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                setMenu(false);
            }
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => setMenu(false));
    });

    /* 
    * Header Scroll Effect
    */
    const header = document.getElementById('header');
    
    const scrollHeader = () => {
        if (window.scrollY >= 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', scrollHeader);

    /* 
    * Active Link on Scroll
    */
    const sections = document.querySelectorAll('section[id]');

    const scrollActive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-list a[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', scrollActive);

    /*
    * Contact Form -> WhatsApp
    * Builds a pre-filled message and opens the business WhatsApp chat,
    * so inquiries reach the team instantly instead of being lost.
    */
    const contactForm = document.getElementById('contactForm');
    const WHATSAPP_NUMBER = '919751401651';

    const interestLabels = {
        materials: 'Raw Materials',
        equipment: 'Equipment Rental',
        bulk: 'Bulk Order',
        other: 'Other Inquiry'
    };

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;

            const name = contactForm.name.value.trim();
            const phone = contactForm.phone.value.trim();
            const interestKey = contactForm.interest.value;
            const interest = interestLabels[interestKey] || interestKey;
            const message = contactForm.message.value.trim();

            const text =
                `*New Inquiry — Visagam Building Material*%0A%0A` +
                `*Name:* ${encodeURIComponent(name)}%0A` +
                `*Phone:* ${encodeURIComponent(phone)}%0A` +
                `*Interested In:* ${encodeURIComponent(interest)}%0A` +
                `*Details:* ${encodeURIComponent(message)}`;

            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

            // Open WhatsApp (new tab) with the inquiry ready to send
            window.open(waUrl, '_blank', 'noopener');

            submitBtn.textContent = 'Opening WhatsApp…';
            submitBtn.disabled = true;

            setTimeout(() => {
                contactForm.reset();
                submitBtn.textContent = 'Opened in WhatsApp ✓';
                submitBtn.style.backgroundColor = 'var(--success)';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 800);
        });
    }

    /*
    * Product / Service "Inquire" buttons -> prefill contact form
    */
    const inquiryButtons = document.querySelectorAll('.inquire-btn');
    inquiryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const product = btn.getAttribute('data-product');
            const interest = btn.getAttribute('data-interest');
            const interestSelect = document.getElementById('interest');
            const messageField = document.getElementById('message');

            if (interest && interestSelect) {
                interestSelect.value = interest;
            }
            if (product && messageField) {
                messageField.value = `Hi, I'm interested in ${product}. Please share availability and pricing.`;
            }
            // Gentle highlight so the user sees the form was pre-filled
            if (messageField) {
                setTimeout(() => {
                    messageField.focus({ preventScroll: true });
                }, 600);
            }
        });
    });

    /*
    * Back-to-top button
    */
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        const toggleBackToTop = () => {
            backToTop.classList.toggle('show', window.scrollY > 600);
        };
        window.addEventListener('scroll', toggleBackToTop);
        toggleBackToTop();

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    /* Request Quote Button Interaction */
    const navCtaBtn = document.getElementById('nav-cta');
    if(navCtaBtn) {
        navCtaBtn.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if(contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                // If on mobile, close menu
                if(navMenu.classList.contains('active')) {
                    setMenu(false);
                }
            }
        });
    }

    /* 
    * Scroll Reveal Animations
    */
    const revealElements = document.querySelectorAll('.reveal, .reveal-left');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    /* 
    * Number Counting Animation
    */
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // The lower the slower

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target >= 1000 ? (target/1000) + 'k' : target;
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    /*
    * FAQ Accordion
    */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all items (single-open accordion)
            faqItems.forEach(other => {
                other.classList.remove('open');
                other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                other.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Open the clicked item if it was closed
            if (!isOpen) {
                item.classList.add('open');
                question.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    /*
    * Scroll Progress Bar
    */
    const scrollProgress = document.getElementById('scrollProgress');

    if (scrollProgress) {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            scrollProgress.style.width = progress + '%';
        };
        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
    }

});

/*
* Service Worker registration (PWA: offline support + faster repeat loads)
*/
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch((err) => {
            console.warn('Service worker registration failed:', err);
        });
    });
}
