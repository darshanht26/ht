
// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  // // Get a reference for the target element
  // let element = document.querySelector('.intro_hero');
  // // Get the offset position of the element
  // let handleIntersection = function (entries) {
  //   for (let entry of entries) {
  //     // Check if the element is not in intersecting the viewport
  //     if (!entry.isIntersecting) {
  //       document.querySelectorAll(".lazyload").forEach(img => {
  //         img.addEventListener("load", () => smoother.scrollTrigger.refresh())
  //       });
  //     }
  //   }
  // }

  // if (element) {
  //   const observer = new IntersectionObserver(handleIntersection);
  //   observer.observe(element);
  // }

  // home HT text animation
  gsap.to(".intro_hero .intro_footer .ht_text", {
    //xPercent: -40,
    x: () => -(document.querySelector('.ht_text').offsetWidth - window.innerWidth),
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".intro_hero",
      scrub: true,
      start: "top top",
      invalidateOnRefresh: true,
    },
  });

  gsap.fromTo(
    ".intro_text",
    0.4,
    {
      autoAlpha: 0,
      y: -200,
    },
    {
      autoAlpha: 1,
      y: 0,
    },
    0.1
  );

  new SplitType(".intro_subtext", {
    types: "words, chars",
  });

  TweenMax.staggerFromTo(
    ".intro_subtext .char",
    0.3,
    {
      autoAlpha: 0,
      scale: 3,
    },
    {
      autoAlpha: 1,
      scale: 1,
    },
    0.15
  );

  TweenMax.staggerFromTo(
    ".intro_image",
    0.5,
    {
      autoAlpha: 0,
      scale: 3,
    },
    {
      autoAlpha: 1,
      scale: 1,
    },
    0.15
  );

  // wwd section hover image
  if (window.innerWidth > 992) {
    document.querySelectorAll(".text_block").forEach((element) => {
      const hoverImg =
        element.parentElement.parentElement.parentElement.querySelector(
          ".hover_img"
        );
      element.addEventListener("mouseenter", (e) => {
        const offRight =
          window.innerWidth - e.clientX - hoverImg.offsetWidth - 100;
        hoverImg.style.opacity = 1;
        hoverImg.style.scale = 1;
        hoverImg.style.right = `${offRight}px`;
      });

      element.addEventListener("mouseleave", (e) => {
        hoverImg.style.opacity = null;
        hoverImg.style.scale = null;
      });
    });
  }
});


