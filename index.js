document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    logo.addEventListener('animationend', (event) => {
        if (event.animationName === 'moveOut') {
            document.body.classList.add('animation-complete');
        }
    });
});
