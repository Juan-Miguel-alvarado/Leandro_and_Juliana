document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    logo.addEventListener('animationend', (event) => {
        if (event.animationName === 'moveOut') {
            document.body.classList.add('animation-complete');
        }
    });
});

/*==== HEADER ====*/
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    const onScroll = () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', onScroll);
    
    const logo = document.querySelector('.logo');
    logo.addEventListener('animationend', (event) => {
        if (event.animationName === 'moveOut') {
            document.body.classList.add('animation-complete');
            header.classList.add('visible');
        }
    });
});