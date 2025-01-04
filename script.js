window.addEventListener('DOMContentLoaded', () => {
    VANTA.BIRDS({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundAlpha: 0.0,
        color2: 0xff00f0,
        wingSpan: 40.00,
        separation: 100.00,
        alignment: 77.00,
        cohesion: 5.00,
        quantity: 1.00
    });

    setTimeout(() => {
        const main = document.querySelector('main');
        main.style.opacity = 1;
        main.style.transform = 'translateY(0)';
    }, 500);

    // Add stagger effect to social links
    const links = document.querySelectorAll('.social-link');
    links.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = 1;
            link.style.transform = 'translateX(0)';
        }, 500 + (index * 100));
    });
});
