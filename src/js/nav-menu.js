const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav");

navToggle.addEventListener("click", () => {
  console.log("click");
  nav.classList.toggle("nav--active");
});

/** auto hide toggle menu and set nav links to display: flex when the user resize the window */
window.addEventListener("resize", () => {
  if (window.innerWidth > 500) {
    nav.classList.remove("nav--active");
  }
});

// add an event listener for scroll
window.onscroll = function () {
  console.log("screenY", window.scrollY);
  if (window.scrollY > 80) {
    nav.classList.add("bg-black");
  } else {
    nav.classList.remove("bg-dark");
  }
};
