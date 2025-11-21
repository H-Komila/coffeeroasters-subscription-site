
    const bars = document.querySelector('.bars');
    const navList = document.querySelector('.nav__list');

    bars.addEventListener('click', () => {
        bars.classList.toggle('open');
        navList.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav__item .nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            bars.classList.remove('open');
            navList.classList.remove('active');
        });
    });
    

//     const hamburger = document.querySelector('.hamburger');
// const menu = document.querySelector('.navigation__list'); // navList o'rniga menu

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     menu.classList.toggle('active'); // navList o'rniga menu
// });



