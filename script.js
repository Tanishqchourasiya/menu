document.addEventListener("DOMContentLoaded", function() {

    // --- Floating Menu Logic ---
    const floatingMenu = document.querySelector('.floating-menu');
    const mainButton = document.querySelector('.floating-menu .main-button');

    mainButton.addEventListener('click', function() {
        // Toggles the 'open' class on the main container
        floatingMenu.classList.toggle('open');
    });


    // --- Original Fade-in Logic (Still works!) ---
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const targets = document.querySelectorAll('.fade-in');
    
    targets.forEach(target => {
        observer.observe(target);
    });

});