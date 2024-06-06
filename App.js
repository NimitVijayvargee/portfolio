document.addEventListener('DOMContentLoaded', function() {
    const numDots = 60; // Number of dots to create
    const body = document.body;

    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        // Random position
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
        const size = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        console.log('Size:', size);
        body.appendChild(dot);
    }

    // Reorder dots in DOM to ensure they appear behind other content
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => body.insertBefore(dot, body.firstChild));
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const dots = document.querySelectorAll('.dot');

    container.addEventListener('mousemove', function(event) {
        const containerRect = container.getBoundingClientRect();
        const containerX = containerRect.left;
        const containerY = containerRect.top;

        const mouseX = event.clientX - containerX;
        const mouseY = event.clientY - containerY;

        dots.forEach(dot => {
            const rect = dot.getBoundingClientRect();
            const dotCenterX = rect.left + rect.width / 2;
            const dotCenterY = rect.top + rect.height / 2;

            const dx = mouseX - dotCenterX;
            const dy = mouseY - dotCenterY;

            // Calculate distance from dot to mouse
            const distance = Math.sqrt(dx * dx + dy * dy);
            dot.style.posX = dx
            dot.style.posY = dy

        });
    });
});



