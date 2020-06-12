const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

//Definition of next button
const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    //check if there is another slides(siblings)
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    }
    else {
        slides[0].classList.add('current');
    }
    setTimeout(()=> current.classList.remove('current'));

}

//Definition of previous button
const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    //check if there is another slides(siblings)
    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    }
    else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(()=> current.classList.remove('current'));

}

//adding eventlistener to buttons
prev.addEventListener('click', e => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

//Autoslide
if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime)
}