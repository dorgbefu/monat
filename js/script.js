document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlides() {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");
        index = (index + 1) % slides.length;
    }

    if (slides.length > 0) {
        slides[0].classList.add("active"); // Ensure the first slide is visible
        setInterval(showSlides, 4000); // Change every 4 seconds
    } else {
        console.error("No slides found. Check your HTML structure.");
    }
});
