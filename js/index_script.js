let currentSection = 0;

function nextSection() {
    const totalSections = document.querySelectorAll('.section').length;
    if (currentSection < totalSections - 1) {
        currentSection++;
    }
    updateCarousel();
}

function prevSection() {
    if (currentSection > 0) {
        currentSection--;
    }
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    const offset = -currentSection * 100; // Shift based on current section
    carousel.style.transform = `translateX(${offset}vw)`;
}


let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages; // Cycle back to the first image
    images[currentIndex].classList.add('active');
}

// Start the carousel
setInterval(showNextImage, 8000); // Change image every 4 seconds
