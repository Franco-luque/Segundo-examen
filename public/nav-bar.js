function menuDesplegable() {
  const btnMenu = document.querySelector("#btnMenu");
  const menuMobile = document.querySelector("#mobile-menu");
  btnMenu.addEventListener("click", () => {
    menuMobile.classList.toggle("hidden");
  });
}

menuDesplegable();
