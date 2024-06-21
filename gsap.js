  // lenis

  const lenis = new Lenis({
    duration: 1,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    syncTouch: true,
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 1,
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  
// gsap

gsap.from ('.nav', .5 , {
    y: -20,
    opacity: 0,
})

gsap.from ('.acquaintance__logo', {
    scale: 0.1 ,
    duration: 1.5 ,
})

gsap.from ('.acquaintance__container--title', {
    x: 700 ,
    duration: 1 ,
    delay: 0.4,
})

gsap.from ('.acquaintance__container--btn', {
    x: -500 ,
    duration: 1 ,
    
})

// Scroll trigger animation
  document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!

// Animation portfolio
const elements = document.querySelectorAll('.portfolio__container--item');
elements.forEach((element, index) => {
  const direction = index % 1 === 0 ? -1 : 1;

  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "center 40%",
      scrub: true, // Привязка анимации к прокрутке
    },
    opacity: 0,
    x: direction * 600,
    duration: 1 + index
  });
});

// Animation right button
const fixed__btn = document.querySelectorAll('.fixed__btn');
gsap.from(fixed__btn, {
  
  scrollTrigger: {
    trigger: ".portfolio__container-title",
    start: "top center",
    scrub: true, // Привязка анимации к прокрутке
    // end: "bottom 50%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  duration: 1,
});


 });