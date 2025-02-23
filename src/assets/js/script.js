// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik luar hamburger
window.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Pindahkan posisi toggle sesuai mode
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// coba
// Toggle the opening of the submenu in the dropdown menu
const submenu_link = document.querySelector(".submenu-link");
const submenu = document.querySelector(".submenu");
submenu_link.addEventListener("click", () => {
  if (submenu.classList.contains("active-submenu")) {
    submenu.classList.remove("active-submenu");
    submenu.classList.add("inactive-submenu");
  } else {
    submenu.classList.remove("inactive-submenu");
    submenu.classList.add("active-submenu");
  }
});

// Change the pages submenu to be active or not based on the mouse over in the element
const pages = document.querySelector("#pages");
const pages_list = document.querySelector("#pages-list");
pages.addEventListener("mouseover", () => {
  pages_list.classList.remove("pages-submenu-inactive");
});

pages.addEventListener("mouseout", () => {
  pages_list.classList.add("pages-submenu-inactive");
});

// When the vertical scroll reach 100px the header fix in the top of the web page
const main = document.querySelector("main");
const header = document.querySelector("#header");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY >= 10) {
      header.classList.remove("relative");
      header.classList.add("fixed");
      header.classList.remove("h-[100px]d");
      header.classList.remove("md:h-[110px]");
      header.classList.add("h-20");
      main.classList.add("pt-[100px]");
      nav.classList.add("mt-4");
    } else {
      header.classList.add("relative");
      header.classList.remove("fixed");
      header.classList.add("h-[100px]d");
      header.classList.add("md:h-[110px]");
      header.classList.remove("h-20");
      main.classList.remove("pt-[100px]");
      nav.classList.remove("mt-4");
    }
  },
  { passive: true },
);

// Toggle the opening of the dropdown menu and the menu icon
const menu_icon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");
menu_icon.addEventListener("click", () => {
  menu_icon.childNodes[1].getAttribute("d") == "M4 6h36M4 12h8m-8 6h36"
    ? menu_icon.childNodes[1].setAttribute("d", "M6 18L18 6M6 6l12 12")
    : menu_icon.childNodes[1].setAttribute("d", "M4 6h36M4 12h8m-8 6h36");

  if (nav.classList.contains("active-menu")) {
    nav.classList.remove("active-menu");
    nav.classList.add("inactive-menu");
    nav.removeAttribute("aria-label", "dropdown");
  } else {
    nav.classList.remove("inactive-menu");
    nav.classList.add("active-menu");
    nav.setAttribute("aria-label", "dropdown");
  }
});

// When a nav link is clicked, the nav is closed with the animation
const dropwdown_nav_li = document.querySelectorAll('.nav ul li a[href^="#"]');
dropwdown_nav_li.forEach((li) => {
  li.addEventListener("click", () => {
    nav.classList.remove("active-menu");
    nav.classList.add("inactive-menu");

    menu_icon.childNodes[1].setAttribute("d", "M4 6h16M4 12h8m-8 6h16");
  });
});
