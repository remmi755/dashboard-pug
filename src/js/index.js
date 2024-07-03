const block = document.querySelector(".block");
const menuOpen = document.querySelector(".mobile-menu__open");
const menuClose = document.querySelector(".mobile-menu__close");
const navMenu = document.querySelector(".nav-menu");
const mainContent = document.querySelector(".main");

const tl = gsap.timeline({ paused: true });
tl.to(mainContent, { duration: 1, display: "none" });
tl.to(navMenu, { duration: 3, width: "100%", display: "block", opacity: 1 });

tl.to(menuClose, { duration: 2, opacity: 1 });

menuOpen.addEventListener("click", () => {
  tl.restart();
});

const closeTl = gsap.timeline({ paused: true });
closeTl.to(menuClose, { duration: 1, opacity: 0 });
closeTl.to(navMenu, { duration: 3, width: "0%", display: "none", opacity: 0 });
closeTl.to(mainContent, { duration: 1, display: "block" });

menuClose.addEventListener("click", () => {
  closeTl.restart();
});
