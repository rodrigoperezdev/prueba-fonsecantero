const mouseImage = document.getElementById("mouse-image");

const onMouseMove = (e) => {
  const posX = e.clientX + 10;
  const posY = e.clientY + window.scrollY + 10;

  mouseImage.style.left = `${posX}px`;
  mouseImage.style.top = `${posY}px`;
};

document.addEventListener("mousemove", (e) => {
  onMouseMove(e);
});

document.addEventListener("scroll", (e) => {
  onMouseMove(e);
});

setTimeout(() => {
  mouseImage.textContent = "hola";

  setTimeout(() => {
    mouseImage.textContent = "me llamo pongi";

    setTimeout(() => {
      mouseImage.textContent = "te voy a acompañar";
      setTimeout(() => {
        mouseImage.textContent = "mejor no para no distraerte";
        setTimeout(() => {
          mouseImage.textContent = "adios! :)";
          setTimeout(() => {
            mouseImage.textContent = ":)";
          }, 5000);
        }, 5000);
      }, 5000);
    }, 5000);
  }, 5000);
}, 5000);
