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

// Scroll trigger animation Portfolio
  document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

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
    x: direction * 1000,
    duration: 1 + index
  });
});

// Animation price

const elementMen = document.querySelectorAll('.men-pricelist--item');
elementMen.forEach((elementMen, index) => {
  const direct = index % 1 === 0 ? -1 : 1;

  gsap.from(elementMen, {
    scrollTrigger: {
      trigger: elementMen,
      start: "top bottom",
      end: "center 80%",
      scrub: true,
    },
    opacity: 0,
    x: direct * 600,
    duration: 1 + index
  });
});


const elementWomen = document.querySelectorAll('.men-pricelist--item1');
elementWomen.forEach((elementWomen, index) => {
  const direct1 = index % 1 === 0 ? -1 : 1;

  gsap.from(elementWomen, {
    scrollTrigger: {
      trigger: elementWomen,
      start: "top bottom",
      end: "center 80%",
      scrub: true, // Привязка анимации к прокрутке
    },
    opacity: 0,
    x: direct1 * -600,
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
    toggleActions: "play none none none"
  },
  opacity: 0,
  duration: 1,
});

const myJob = document.querySelectorAll('.my-job');
gsap.from(myJob, {
  
  scrollTrigger: {
    trigger: ".my-job",
    start: "top 80%",
    scrub: true, // Привязка анимации к прокрутке
    toggleActions: "play none none none"
  },
  opacity: 0,
  duration: 2,
});

const spanText = document.querySelectorAll('.span-text');
gsap.from(spanText, {
  
  scrollTrigger: {
    trigger: ".span-text",
    start: "top 80%",
    scrub: true, // Привязка анимации к прокрутке
    toggleActions: "play none none none"
  },
  opacity: 0,
  duration: 2,
});



 });