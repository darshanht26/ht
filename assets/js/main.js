gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  smooth: 1.5,
  smoothTouch: 0,
});

document.addEventListener("DOMContentLoaded", function () {
  // marquee init
  Marquee3k.init();

  const observer = lozad();
  observer.observe();

  // when lazyload image load scrolltrigger refresh
  // gsap.utils.toArray(".lazyload").forEach(img => {
  //   img.addEventListener("load", () =>  smoother.scrollTrigger.refresh())
  // });

  document.querySelector(".site_menu_modal").style.display = "none";
  var menuOpen = new TimelineLite({ paused: true });
  menuOpen.to(".site_menu_modal", {
    duration: 1.25,
    ease: "circ.out",
    yPercent: 100,
    yoyo: true,
  });

  var menuLine = new TimelineLite({ paused: true });
  menuLine.to(".site_navbar li .site_nav_line", {
    duration: 0.5,
    stagger: 0.2,
    backgroundColor: "#000",
    width: "100%",
    ease: "easy.out",
  });

  var menuList = new TimelineLite({ paused: true });
  menuList.to(".site_navbar li .site_nav_content", {
    duration: 0.6,
    stagger: 0.25,
    opacity: 1,
    ease: "easy.out",
    y: 0,
  });

  // Mega menu
  document.querySelector(".menu_toggle_open").addEventListener("click", () => {
    menuOpen.play();
    menuList.play();
    menuLine.play();
    //document.body.setAttribute('data-modal', true)
    document.body.setAttribute("data-overflow", true);
  });

  document.querySelector(".menu_toggle_close").addEventListener("click", () => {
    menuLine.reverse();
    menuList.reverse();
    menuOpen.reverse().duration(0.75);
    //document.body.removeAttribute('data-modal')
    document.body.removeAttribute("data-overflow");
  });
});

const siteHeader = document.querySelector(".site_header");

// sticky header
function stickyOnScroll() {
  if (window.scrollY >= siteHeader.offsetHeight) {
    siteHeader.classList.add("sticky_header");
  } else {
    siteHeader.classList.remove("sticky_header");
  }
}

// Apply for window scroll
window.addEventListener("scroll", function () {
  stickyOnScroll();
});

// Apply for window reisze
// window.addEventListener('resize', () => {
//   stickyOnScroll();
// });

// Apply for window load complete
window.addEventListener("load", () => {
  document.querySelector(".site_menu_modal").style.display = null;
});