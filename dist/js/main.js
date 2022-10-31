let tl = gsap.timeline();
tl.to(".logo", {y:0, duration: 1});

tl.to(".menu-link", {y:0, x:0, duration: 0.7, stagger: 0.2} );

tl.to(".icons-item", {y:0, duration: 1, stagger: 0.2});
