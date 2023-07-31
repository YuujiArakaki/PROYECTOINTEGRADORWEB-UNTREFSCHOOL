const enlacesNavBar = document.querySelectorAll("nav a");

enlacesNavBar.forEach(enlace => {
  enlace.addEventListener("click", function(event) {
    event.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    destino.scrollIntoView({ behavior: "smooth" });
  });
});