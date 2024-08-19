/* =====styky header===== */
const Header = document.getElementById("header");

window.addEventListener("scroll", function () {
  Header.classList.toggle("sticky", window.scrollY > 0);
});

/* =====button menu===== */
const navbarMenu = document.getElementById("navbar-menu"),
  btnMenu = document.getElementById("btn-menu"),
  btnClose = document.getElementById("btn-close");

/*  show menu */
btnMenu.addEventListener("click", (e) => {
  navbarMenu.classList.add("show-menu");
  e.preventDefault();
});
window.onscroll = () => {
  navbarMenu.classList.remove("show-menu");
};
/*  hide menu */
btnClose.addEventListener("click", () => {
  navbarMenu.classList.remove("show-menu");
});
/*  hide menu */
// menu
document.addEventListener("click", function (e) {
  if (!btnMenu.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("show-menu");
  }
});
