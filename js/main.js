
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
