const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav");

navToggle.addEventListener("click", () => {
  console.log("click");
  nav.classList.toggle("nav--active");
});

/** auto hide toggle menu and overlay when the user resize the window */
window.addEventListener("resize", () => {
  if (window.innerWidth > 500) {
    nav.classList.remove("nav--active");
  }
});
