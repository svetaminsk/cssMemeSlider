window.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const imgs = document.querySelector('.slider_imgs');
    const img = document.querySelectorAll('.slider_img');
    const dots = document.querySelectorAll('.slider_dot');
    const text = document.querySelectorAll('.slider_text');
    const texts = document.querySelector('.slider_texts');

    function slideToNext(n) {
        imgs.style.transform = `translateX(-${n * img[0].offsetWidth}px)`;
        texts.style.transform = `translateX(-${n * text[0].offsetWidth}px)`;
        dots[n].classList.add('slider_dot_active');
    }

    function reset() {
        dots.forEach(d => {
            d.classList.remove('slider_dot_active');
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', (e) => {
            reset();
            slideToNext(i);
        })
    })
})