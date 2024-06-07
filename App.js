document.addEventListener('DOMContentLoaded', function() {
    const numDots = window.innerHeight * window.innerWidth / 10000;
    const body = document.body;
    
    const docWidth = Math.max(document.documentElement.scrollWidth, window.innerWidth);
    const docHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);
    body.style.width = `${docWidth}px`;
    body.style.height = `${docHeight}px`;

    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('img');
        dot.classList.add('dot');
        dot.src = "/img/star.png";

        const posX = Math.random() * docWidth;
        const posY = Math.random() * docHeight;
        const rotate = Math.random() * 90;

        dot.style.transform = `rotate(${rotate}deg)`;
        dot.style.position = 'absolute';
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
        dot.setAttribute('data-multiplier', Math.random() / 50);
        const size = Math.floor(Math.random() * (15 - 2 + 1)) + 2;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        console.log('Size:', size);
        body.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => body.insertBefore(dot, body.firstChild));
});

window.addEventListener("scroll", () => {
    const x = window.scrollX;
    const y = window.scrollY;
    console.log(x, y);

    const dots = document.getElementsByClassName('dot');
    Array.from(dots).forEach(dot => {
        parallax(dot, x, y);
    });
});

function parallax(dot, x, y) {
    const multiplier = parseFloat(dot.getAttribute("data-multiplier"));
    const posX = parseFloat(dot.style.left);
    const posY = parseFloat(dot.style.top);
    dot.style.left = `${posX - x * multiplier}px`;
    dot.style.top = `${posY - y * multiplier}px`;
}
