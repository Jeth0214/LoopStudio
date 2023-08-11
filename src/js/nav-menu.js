const navToggle = document.querySelector("#navToggle");
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const navLinks = document.querySelectorAll(".nav__link");

// toggle active state of navigation
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--active");
  header.classList.toggle("bg-black");
});

/** auto hide toggle menu and set nav links to display: flex when the user resize the window */
window.addEventListener("resize", () => {
  if (window.innerWidth > 500 || window.pageYOffset < 80) {
    nav.classList.remove("nav--active");
    header.classList.remove("bg-black");
  }
});

// add an event listener for scroll
window.onscroll = function () {
  navShrink();
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("nav--active");
    setLinkActive(link, navLinks);
    header.classList.remove("bg-black"); //! change this after all sections are finished
    header.classList.remove("nav--shrink"); //! change this after all sections are finished
  });
});

// HELPER FUNCTIONS

// always check if the scroll event is already fired
// add nav--shrink class if pageYOffset is > 80
function navShrink() {
  if (window.pageYOffset > 80) {
    header.classList.add("nav--shrink");
  } else {
    header.classList.remove("nav--shrink");
  }
}

// set a link to the active state
function setLinkActive(link, links) {
  link.classList.add("nav__link--active");
  let siblingLinks = [...links].filter((child) => child != link);
  siblingLinks.forEach((element) => {
    element.classList.remove("nav__link--active");
  });
}
