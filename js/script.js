let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlides() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

setInterval(showSlides, 4000); // Changes every 4 seconds
