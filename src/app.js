/**
 * Fade in forwards
 */

const fadeInForwards = document.querySelectorAll('.fade-in-forwards');

const observerOverview = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear')
            observerOverview.unobserve(entry.target)
        }
    })
}, {threshold: 0.8});

fadeInForwards.forEach(fader => {
    observerOverview.observe(fader);
})

/**
 * Fade in right
 */

const fadeInRight = document.querySelectorAll('.fade-in-right');

const observerRight = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear')
            observerRight.unobserve(entry.target)
        }
    })
}, {threshold: 0.2});

fadeInRight.forEach(fader => {
    observerRight.observe(fader);
})


/**
 * Fade left
 */

const fadeInLeft = document.querySelectorAll('.fade-in-left');

const observerLeft = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear')
            observerLeft.unobserve(entry.target)
        }
    })
}, {threshold: 0.8});

fadeInLeft.forEach(fader => {
    observerLeft.observe(fader);
})

/**
 * Navbar Observer
 */

const overview = document.querySelector('#overview');
const nav = document.querySelector('.nav');

const observerNav = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add('appear')
        } else {
            nav.classList.remove('appear')
        }
    })
}, {threshold: 0.2});

observerNav.observe(overview);