document.addEventListener('DOMContentLoaded', () => {
    // Update time dynamically
    function updateTime() {
        const now = new Date();
        const dateSpan = document.querySelector('.datetime .date');
        const timeSpan = document.querySelector('.datetime .time');

        const optionsDate = { weekday: 'short', day: '2-digit', month: 'short' };
        dateSpan.textContent = now.toLocaleDateString('en-US', optionsDate);

        const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };
        timeSpan.textContent = now.toLocaleTimeString('en-US', optionsTime);
    }

    setInterval(updateTime, 1000);
    updateTime();

    // Add some simple hover effects for butterflies if they exist
    const butterflies = document.querySelectorAll('.butterfly');
    butterflies.forEach(b => {
        b.addEventListener('mouseover', () => {
            b.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
        });
    });

    // Handle image error gracefully by showing placeholder
    const heroImg = document.querySelector('.hero-image');
    if (heroImg) {
        heroImg.addEventListener('error', () => {
            heroImg.style.display = 'none';
            const placeholder = document.querySelector('.placeholder-image');
            if (placeholder) placeholder.style.display = 'flex';
        });
    }
    // Parallax Tilt Effect for Hero Image
    const heroContainer = document.querySelector('.hero-image-container');
    const heroImage = document.querySelector('.hero-image');

    document.addEventListener('mousemove', (e) => {
        if (!heroImage) return;

        // Disable parallax on mobile/tablet to prevent wobbling
        if (window.innerWidth <= 1024) {
            heroImage.style.transform = 'none';
            return;
        }

        const { clientX, clientY } = e;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Calculate cursor position relative to center (range -1 to 1)
        const xPos = (clientX / windowWidth) - 0.5;
        const yPos = (clientY / windowHeight) - 0.5;

        // Apply rotation and subtle translation
        // RotateX is based on Y position (tilt up/down)
        // RotateY is based on X position (tilt left/right)
        const rotateY = xPos * 20; // Max 10 deg rotation
        const rotateX = -yPos * 20; // Max 10 deg rotation
        const translateX = xPos * 20; // Move slightly
        const translateY = yPos * 20;

        heroImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(${translateX}px, ${translateY}px) scale(1.05)`;
    });

    // Reset transform on resize to clean up inline styles
    window.addEventListener('resize', () => {
        if (heroImage) {
            heroImage.style.transform = '';
        }
    });
    // Disable Developer Tools and View Source
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('keydown', (e) => {
        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'J') ||
            (e.ctrlKey && e.key === 'u') ||
            (e.ctrlKey && e.key === 'U')
        ) {
            e.preventDefault();
        }
    });
});
