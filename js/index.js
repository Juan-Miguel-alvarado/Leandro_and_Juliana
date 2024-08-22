// document.addEventListener('DOMContentLoaded', () => {
//     const logo = document.querySelector('.logo');
//     logo.addEventListener('animationend', (event) => {
//         if (event.animationName === 'moveOut') {
//             document.body.classList.add('animation-complete');
//         }
//     });
// });

// /*==== HEADER ====*/
// document.addEventListener('DOMContentLoaded', () => {
//     const header = document.querySelector('.header');

//     const onScroll = () => {
//         if (window.scrollY > 0) {
//             header.classList.add('scrolled');
//         } else {
//             header.classList.remove('scrolled');
//         }
//     };

//     window.addEventListener('scroll', onScroll);
    
//     const logo = document.querySelector('.logo');
//     logo.addEventListener('animationend', (event) => {
//         if (event.animationName === 'moveOut') {
//             document.body.classList.add('animation-complete');
//             header.classList.add('visible');
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const main = document.querySelector('main');
    const header = document.querySelector('.header');

    logo.addEventListener('animationend', (event) => {
        if (event.animationName === 'moveOut') {
            document.body.classList.add('animation-complete');
            header.classList.add('visible');
            main.classList.add('visible'); // Muestra el contenido principal
        }
    });

    const onScroll = () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', onScroll);
});

/*==== COUNTER ====*/

    // This is an example with default parameters
    // You'll always have to call simplyCountdown using ID's, no classes.

    simplyCountdown('#counter', {
        year: 2025, // required
        month: 2, // required
        day: 22, // required
        hours: 5, // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: { singular: 'Día', plural: 'Días' },
            hours: { singular: 'Hora', plural: 'Horas' },
            minutes: { singular: 'Minuto', plural: 'Minutos' },
            seconds: { singular: 'Segundo', plural: 'Segundos' }
        },
        plural: true, //use plurals
        inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        enableUtc: true,
        onEnd: function () {
            // your code
            return;
        },
        refresh: 1000, //default refresh every 1s
        sectionClass: 'simply-section', //section css class
        amountClass: 'simply-amount', // amount css class
        wordClass: 'simply-word', // word css class
        zeroPad: false,
        countUp: false, // enable count up if set to true
});

// Also, you can init with already existing Javascript Object.
let myElement = document.querySelector('.my-countdown');
simplyCountdown(myElement, { /* options */ });

let multipleElements = document.querySelectorAll('.my-countdown');
simplyCountdown(multipleElements, { /* options */ });