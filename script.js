function toggleMenu() {
    const nav = document.getElementById('nav');
    const overlay = document.querySelector('.nav-overlay');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productGrid = document.querySelector('.product-grid');
    const productCards = document.querySelectorAll('.product-card');

    // Simple Swiggy Redirect
    const swiggyUrl = "https://www.swiggy.com/city/morena/kokam-sweets-jiwaji-ganj-rest1134304";

    productCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            window.location.href = swiggyUrl;
        });
    });

    // Tab filtering logic
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); 
            const category = this.dataset.category;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            productCards.forEach(product => {
                if (category === 'all' || product.dataset.category === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Scroll Reveal Logic
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const backToTop = document.getElementById('backToTop');
        const scrollProgress = document.getElementById('scrollProgress');
        
        // Update Scroll Progress Bar
        const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollCurrent = window.scrollY;
        if (scrollProgress) {
            scrollProgress.style.width = (scrollCurrent / scrollTotal) * 100 + '%';
        }

        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }

        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = prompt('What are you looking for?');
            if (query) {
                alert('Searching for: ' + query);
            }
        });
    }
});