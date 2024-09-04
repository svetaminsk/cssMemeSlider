window.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const imgs = document.querySelector('.slider_imgs');
    const img = document.querySelectorAll('.slider_img');
    const dots = document.querySelectorAll('.slider_dot');
    const text = document.querySelectorAll('.slider_text');

    function slideToNext(n) {
        imgs.style.transform = `translateX(-${n * img[0].offsetWidth}px)`;
        dots[n].classList.add('slider_dot_active');
    }

    function reset() {
        dots.forEach(d => {
            d.classList.remove('slider_dot_active');
        });
        dots[0].classList.add('slider_dot_active');
    }

    reset();

    dots.forEach((dot, i) => {
        dot.addEventListener('click', (e) => {
            reset();
            slideToNext(i);
        })
    })
})