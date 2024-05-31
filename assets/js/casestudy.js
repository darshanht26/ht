document.addEventListener("DOMContentLoaded", function (event) {
  new Flickity(".casestudy_featured_carousel", {
    // options
    cellAlign: "left",
    contain: true,
    draggable: true,
    freeScroll: false,
    prevNextButtons: false,
    pageDots: false,
    watchCSS: true,
  });

  smoother.effects(".casestudy_mobile_image.img_1", {
    speed: 0.985,
  });

  smoother.effects(".casestudy_mobile_image.img_2", {
    speed: 1.005,
  });

  smoother.effects(".casestudy_mobile_image.img_3", {
    speed: 1.003,
  });

  smoother.effects(".casestudy_mobile_image.img_4", {
    speed: 0.935,
  });

  // scale image animation
  const scaleImages = document.querySelectorAll('[data-animation="scale"]');
  scaleImages.forEach(scaleImage => {
    gsap.to(scaleImage, {
      scale: 1.15,
      duration: 1.5,
      ease: "back.out",
      scrollTrigger: {
        trigger: scaleImage,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  const headerImage = document.querySelector('.cs_anim_header');
  const logo = document.querySelector('.cs_anim_logo');
  const heading = document.querySelector('.cs_anim_heading');
  const restSection = document.querySelector('.rest_of_the_section');
  const animationClass = "scroll-animation";
  const logoAnimationClass = "scroll-animation-logo";
  const restAnimationClass = "scroll-animation-rest";
  const headingAnimationClass = "scroll-animation-heading";
  var scrollPosition = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > scrollPosition) {
      if (!headerImage.classList.contains(animationClass)) {
        headerImage.classList.add(animationClass);
      }

      if (logo) {
        if (!logo.classList.contains(logoAnimationClass)) {
          logo.classList.add(logoAnimationClass);
        }
      }

      if (!heading.classList.contains(headingAnimationClass)) {
        heading.classList.add(headingAnimationClass);
      }

      if (!restSection.classList.contains(restAnimationClass)) {
        restSection.classList.add(restAnimationClass);
      }
    } else {
      // Scrolling back to the top
      if (headerImage.classList.contains(animationClass)) {
        headerImage.classList.remove(animationClass);
      }

      if (logo) {
        if (logo.classList.contains(logoAnimationClass)) {
          logo.classList.remove(logoAnimationClass);
        }
      }

      if (heading.classList.contains(headingAnimationClass)) {
        heading.classList.remove(headingAnimationClass);
      }

      if (restSection.classList.contains(restAnimationClass)) {
        restSection.classList.remove(restAnimationClass);
      }
    }
    scrollPosition = currentScroll;
  });
});