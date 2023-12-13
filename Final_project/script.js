
gsap.registerPlugin(ScrollTrigger);

// ANIMATIONS FOR HOME PAGE
gsap.from('.navbar', {
    duration: 1.6,
    y: '-100%',
    ease: 'power2.out'
});
gsap.from('.navbar', {
    duration: 1.4,
    opacity: 0,
    ease: 'power2.in',
});

gsap.from('.welcome', {
    duration: 1.6,
    y: '100%',
    ease: 'power2.out',
});

gsap.from('.welcome', {
    duration: 1.6,
    opacity: 0,
    ease: 'power3.in',
});

gsap.from('.avatar-wrapper', {
    duration: .4,
    scale: .9,
    delay: 1.4,
    ease: 'power4.out'
})
gsap.from('.avatar-wrapper', {
    duration: .3,
    opacity: 0,
    delay: 1.4
});

gsap.from('#avatar-caption', {
    duration: 1.6,
    y: '100%',
    ease: 'power2.out',
});
gsap.from('#avatar-caption', {
    duration: 1.6,
    opacity: 0,
    ease: 'power3.in',
});

// projects scrolltrigger
gsap.from('.featured-container-1', {
    scrollTrigger: {
        trigger: ".featured-container-1",
        toggleActions: 'restart none none none',
        // takes in 4 arguments
        // play, pause, resume, reverse, restart, reset, complete, none
    },
    duration: 2,
    scale: .96,
    opacity: 0,
    ease: 'power3.out',
});

// contact page
gsap.from('.greeting, .email', {
    duration: 1,
    y: '100%',
    ease: 'power2.out',
});

gsap.from('.greeting, .email', {
    duration: 1,
    opacity: 0,
    ease: 'power3.in',
});

gsap.from('.connect-social', {
    y: '200%',
    duration: 1.6,
    delay: .7,
    stagger: .1,
    ease: 'power4.out'
})
gsap.from('.connect-social', {
    duration: .8,
    opacity: 0,
    delay: .7,
    stagger: .4,
    ease: 'power3.in',
});

// about page scrolltriggers
gsap.from('#audrey-1', {
    scrollTrigger: {
        trigger: "#audrey-1",
        toggleActions: 'restart none none none',
    },
    duration: .5,
    scale: .6,
    ease: 'power4.out',
});
gsap.from('#audrey-1', {
    scrollTrigger: {
        trigger: "#audrey-1",
        toggleActions: 'restart none none none',
    },
    duration: .7,
    opacity: 0,
    ease: 'power4.out',
});
gsap.from('#bio-1', {
    scrollTrigger: {
        trigger: "#bio-1",
        toggleActions: 'restart none none none',
    },
    duration: .5,
    scale: .6,
    ease: 'power4.out',
});
gsap.from('#bio-1', {
    scrollTrigger: {
        trigger: "#bio-1",
        toggleActions: 'restart none none none',
    },
    duration: .7,
    opacity: 0,
    ease: 'power4.out',
});

gsap.from('#bio-2', {
    scrollTrigger: {
        trigger: "#bio-2",
        toggleActions: 'restart none none none',
    },
    duration: .5,
    scale: .6,
    ease: 'power4.out',
});
gsap.from('#bio-2', {
    scrollTrigger: {
        trigger: "#bio-2",
        toggleActions: 'restart none none none',
    },
    duration: .7,
    opacity: 0,
    ease: 'power4.out',
});
gsap.from('#audrey-2', {
    scrollTrigger: {
        trigger: "#audrey-2",
        toggleActions: 'restart none none none',
    },
    duration: .5,
    scale: .6,
    ease: 'power4.out',
});
gsap.from('#audrey-2', {
    scrollTrigger: {
        trigger: "#audrey-2",
        toggleActions: 'restart none none none',
    },
    duration: .7,
    opacity: 0,
    ease: 'power4.out',
});
