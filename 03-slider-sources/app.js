const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mailSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
const slidesCount = mailSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    chanegeSlide('up');
});

downBtn.addEventListener('click', () => {
    chanegeSlide('down');
});

function chanegeSlide(direction) {
    
    switch(direction) {
        case 'up':
            activeSlideIndex++;
            if (activeSlideIndex === slidesCount) activeSlideIndex = 0;
            break;
        case 'down':
            activeSlideIndex--;
            if (activeSlideIndex < 0) activeSlideIndex = slidesCount - 1;
            break;
        default: return;
    }
    const height = container.clientHeight;
    mailSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}