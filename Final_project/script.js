
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
gsap.from('#taskbuddy-wrap', {
    scrollTrigger: {
        trigger: "#taskbuddy-wrap",
        toggleActions: 'restart none none none',
        // takes in 4 arguments
        // play, pause, resume, reverse, restart, reset, complete, none
    },
    duration: 0.8,
    scale: .95,
    opacity: 0,
    ease: 'power1.out',
});

gsap.from('#nyushuttle-wrap', {
    scrollTrigger: {
        trigger: "#nyushuttle-wrap",
        toggleActions: 'restart none none none',
    },
    duration: 0.8,
    scale: .95,
    opacity: 0,
    ease: 'power1.out',
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
        toggleActions: 'play none none none',
    },
    duration: .7,
    scale: .6,
    opacity: 0,
    ease: 'power4.out',
});
gsap.from('#bio-1', {
    scrollTrigger: {
        trigger: "#bio-1",
        toggleActions: 'play none none none',
    },
    duration: .7,
    opacity: 0,
    scale: .7,
    ease: 'power4.out',
});

gsap.from('#bio-2', {
    scrollTrigger: {
        trigger: "#bio-2",
        toggleActions: 'play none none',
    },
    duration: .7,
    delay: .5,
    opacity: 0,
    scale: .7,
    ease: 'power4.out',
});

gsap.from('#audrey-2', {
    scrollTrigger: {
        trigger: "#audrey-2",
        toggleActions: 'play none none none',
    },
    duration: .7,
    opacity: 0,
    scale: .7,
    ease: 'power4.out',
});

// Play page
gsap.from(['#play-title-card', '.categories'], {
    duration: 1.2,
    opacity: 0,
    ease: 'power1.inOut',
});
gsap.from('#letterA', {
    rotate: 18,
    duration: .8,
    delay: 1.2,
    ease: 'bounce.out',
});