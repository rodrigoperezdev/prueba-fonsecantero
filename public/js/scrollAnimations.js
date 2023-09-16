const left = document.querySelector(".reveal-left");

const animarElemento = () => {
  const distancia = left.getBoundingClientRect().top;
  const alturaVentana = window.innerHeight;

  if (distancia < alturaVentana) {
    left.classList.add("animate-left");
  }
};

window.addEventListener("scroll", animarElemento);
