document.addEventListener('DOMContentLoaded', function() {

    // --- Theme Toggler ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const sunIcon = 'fa-sun';
    const moonIcon = 'fa-moon';

    const setTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        const icon = themeToggleButton.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove(moonIcon);
            icon.classList.add(sunIcon);
        } else {
            icon.classList.remove(sunIcon);
            icon.classList.add(moonIcon);
        }
    };

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) { setTheme(savedTheme); } 
        else if (prefersDark) { setTheme('dark'); } 
        else { setTheme('light'); }
    }
    
    // --- Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- On-Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animated');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    entry.target.style.transitionDelay = `${delay}ms`;
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => observer.observe(el));
    }

    // --- Typewriter Effect ---
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const words = ["Software Developer", "Frontend Specialist", "Problem Solver"];
        let wordIndex = 0; let charIndex = 0; let isDeleting = false;
        function type() {
            const currentWord = words[wordIndex];
            const typeSpeed = isDeleting ? 75 : 150;
            typewriterElement.textContent = currentWord.substring(0, charIndex) + '|';
            if (!isDeleting && charIndex < currentWord.length) { charIndex++; } 
            else if (isDeleting && charIndex > 0) { charIndex--; } 
            else { isDeleting = !isDeleting; if (!isDeleting) { wordIndex = (wordIndex + 1) % words.length; } }
            const pause = isDeleting ? 1500 : 500;
            const time = (charIndex === currentWord.length || charIndex === 0) ? pause : typeSpeed;
            setTimeout(type, time);
        }
        type();
    }
    
    // --- FORMSPREE CONTACT FORM (CORRECTED) ---
    const form = document.getElementById('contact-form');
    
    if (form) {
        const resultDiv = document.getElementById('form-result');

        async function handleSubmit(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());

            resultDiv.innerHTML = "Sending...";
            resultDiv.style.display = "block";
            resultDiv.style.color = "var(--primary-text)";

            try {
                const response = await fetch(event.target.action, {
                    method: 'POST',
                    // =========================================================
                    // CHANGE #1: THE DATA IS CONVERTED TO A JSON TEXT STRING
                    body: JSON.stringify(data), 
                    // =========================================================
                    headers: {
                        // =========================================================
                        // CHANGE #2: THIS HEADER TELLS THE SERVER WE ARE SENDING JSON
                        'Content-Type': 'application/json',
                        // =========================================================
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    resultDiv.innerHTML = "<strong>Success!</strong> Your message has been sent.";
                    resultDiv.style.color = "#00ff7f";
                    form.reset();
                } else {
                    const responseData = await response.json();
                    if (Object.hasOwn(responseData, 'errors')) {
                        resultDiv.innerHTML = responseData["errors"].map(error => error["message"]).join(", ");
                    } else {
                        resultDiv.innerHTML = "<strong>Error!</strong> Oops! There was a problem.";
                    }
                    resultDiv.style.color = "#ff4545";
                }
            } catch (error) {
                console.error("Submission error:", error);
                resultDiv.innerHTML = "<strong>Error!</strong> Something went wrong. Please try again.";
                resultDiv.style.color = "#ff4545";
            }

            setTimeout(() => {
                resultDiv.style.display = 'none';
            }, 5000);
        }

        form.addEventListener("submit", handleSubmit);
    }
});