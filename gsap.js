  // lenis

  const lenis = new Lenis({
    duration: 2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
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


 // use A Script Tag Or An External Js File
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!


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



 });