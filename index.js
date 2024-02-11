let slideIndex = 0;
const slidesToShow = 3;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slider img');
    slideIndex += n;
    if (slideIndex >= slides.length - slidesToShow + 1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - slidesToShow;
    }
    const offset = -slideIndex * (100 / slidesToShow);
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}


document.querySelector('.toggle-button').addEventListener('click', function() {
    document.querySelector('.navbar .list').classList.toggle('active');
});
