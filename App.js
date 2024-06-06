document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function(event) {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left; 
            const y = event.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (centerY - y) / centerY * 20;const rotateY = (x - centerX) / centerX * 20;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    });
});