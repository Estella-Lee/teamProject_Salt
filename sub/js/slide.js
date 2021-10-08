var slideWrapper = document.querySelector('.slideContainer');
var slides = document.querySelectorAll('.item');
var totalSlides = slides.length;


var sliderWidth = slideWrapper.clientWidth;
var slideIndex = 0;
var slider = document.querySelector('.slider');

slider.style.width = sliderWidth * totalSlides + 'vw';

showSlides()

function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slider.style.left = -(100 * slideIndex) + 'vw';
    }
    slideIndex++;
    if (slideIndex === totalSlides) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 2000);
}