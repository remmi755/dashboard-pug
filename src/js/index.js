const block = document.querySelector(".block");
const menuOpen = document.querySelector(".mobile-menu__open");
const menuClose = document.querySelector(".mobile-menu__close");
const navMenu = document.querySelector(".nav-menu");
const mainContent = document.querySelector(".main");

const tl = gsap.timeline({ paused: true });
tl.to(mainContent, { duration: 1, display: "none" });
tl.to(navMenu, { duration: 3, display: "block", width: "100%" });
tl.to(menuClose, { duration: 2, opacity: 1 });

menuOpen.addEventListener("click", () => {
  tl.restart();
});

menuClose.addEventListener("click", () => {
  tl.reverse();
});
