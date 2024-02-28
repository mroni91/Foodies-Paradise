let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-" + slideIndex * 100 + "%)";
    }
}

function changeSlide(n) {
    let slides = document.getElementsByClassName("carousel-item");
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides();
    
    const reservationForm = document.getElementById('reservation-form');
    reservationForm.addEventListener('submit', function(event) {
        // Add validation code here
        event.preventDefault(); // Prevent form submission for demonstration
        alert('Reservation form submitted!');
    });

    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(event) {
        // Add validation code here
        event.preventDefault(); // Prevent form submission for demonstration
        alert('Newsletter form submitted!');
    });
    
});
