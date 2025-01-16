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

// slider
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const indicators = document.querySelectorAll(".indicator");
let currentSlide = 0;
const totalSlides = slides.length;

// Initialize first slide and indicator
slides[0].classList.remove("translate-x-full");
indicators[0].classList.add("bg-white");
indicators[0].classList.remove("bg-white/50");

function updateSlides(direction) {
	// Remove active indicator
	indicators[currentSlide].classList.remove("bg-white");
	indicators[currentSlide].classList.add("bg-white/50");

	// Calculate next slide index
	if (direction === "next") {
		currentSlide = (currentSlide + 1) % totalSlides;
	} else {
		currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	}

	// Update active indicator
	indicators[currentSlide].classList.add("bg-white");
	indicators[currentSlide].classList.remove("bg-white/50");

	// Update slides position
	slides.forEach((slide, index) => {
		if (index === currentSlide) {
			slide.classList.remove("translate-x-full", "-translate-x-full");
		} else if (
			(direction === "next" && index > currentSlide) ||
			(direction === "prev" && index < currentSlide)
		) {
			slide.classList.remove("-translate-x-full");
			slide.classList.add("translate-x-full");
		} else {
			slide.classList.remove("translate-x-full");
			slide.classList.add("-translate-x-full");
		}
	});
}

// Event listeners
prevButton.addEventListener("click", () => updateSlides("prev"));
nextButton.addEventListener("click", () => updateSlides("next"));

// Indicator clicks
indicators.forEach((indicator, index) => {
	indicator.addEventListener("click", () => {
		if (index > currentSlide) {
			currentSlide = index - 1;
			updateSlides("next");
		} else if (index < currentSlide) {
			currentSlide = index + 1;
			updateSlides("prev");
		}
	});
});

// Auto play
setInterval(() => updateSlides("next"), 5000);
