//star generator
document.addEventListener("DOMContentLoaded", function () {
  const numDots = (window.innerHeight * window.innerWidth) / 10000;
  const body = document.body;

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement("img");
    dot.classList.add("dot");
    dot.src = "/img/star.png";

    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const rotate = Math.random() * 90;

    dot.style.rotate = `${rotate}deg`;
    dot.style.left = `${posX}px`;
    dot.style.top = `${posY}px`;
    const size = Math.floor(Math.random() * (15 - 2 + 1)) + 2;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    console.log("Size:", size);
    body.appendChild(dot);
  }

  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => body.insertBefore(dot, body.firstChild));

  body.addEventListener("mousemove", (event) => {
    console.log(event.pageX);
  });
});
