gsap.registerPlugin(ScrollTrigger);

gsap.to(".section", {
  y: "-100vh",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true
  }
});


let index = 0;
const slider = document.getElementById("slider");
const totalSlides = slider.children.length;

function moveSlide(step) {
  index += step;
  if (index < 0) index = 0;
  if (index > totalSlides - 1) index = totalSlides - 1;

  slider.style.transform = `translateX(-${index * 270}px)`; // card width + margin
}