$(document).ready(function () {
  $("#change-lang").find(html).attr("lang");
});


function autoSlide() {
  const slider = document.getElementById("cardSlider");
  if (!slider) return;

  const cardWidth = 320; // 300px card + 20px gap
  const cardCount = slider.children.length;

  let index = 0;

  function slide() {
    gsap.to(slider, {
      x: -cardWidth * index,
      duration: 1,
      ease: "power1.inOut",
      onComplete: () => {
        index++;
        if (index >= cardCount) {
          index = 0;
          gsap.set(slider, { x: 0 });
        }
        setTimeout(slide, 2500);
      },
    });
  }

  setTimeout(slide, 2500);
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var t1 = gsap.timeline();
  t1.to(".load-screen", {
    duration: 1.3,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  });
  t1.to(".load-screen", {
    duration: 1,
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  });
  t1.set(".load-screen", {
    left: "-100%",
    width: "0%",
  });
}

function contentAnimation() {
  const t1 = gsap.timeline();
  t1.from(".animate-this", {
    duration: 1,
    y: 30,
    stagger: 0.3,
    delay: 0.2,
  });
}

function initVideoAutoplay() {
  const video = document.querySelector("video");
  if (video) {
    video.play().catch(() => {});
  }
}

function initImageSlider() {
  const heroImage = document.getElementById("hero-image");
  if (!heroImage) return;

  const imageList = [
    "../images/img1.avif",
    "../images/img2.avif",
    "../images/img3.avif",
    "../images/img4.avif",
  ];

  let current = 0;

  if (window.imageSliderInterval) {
    clearInterval(window.imageSliderInterval);
  }

  window.imageSliderInterval = setInterval(() => {
    current = (current + 1) % imageList.length;
    heroImage.style.opacity = 0;
    setTimeout(() => {
      heroImage.src = imageList[current];
      heroImage.style.opacity = 1;
    }, 250);
  }, 2000);
}

$(function () {
  barba.init({
    sync: true,

    transitions: [
      {
        async leave(data) {
          const done = this.async();
          pageTransition();
          await delay(1000);
          done();
        },

        async enter(data) {
          contentAnimation();
          initImageSlider();
          initVideoAutoplay();
          autoSlide(); // ✅ Call here to reinitialize slider on new page
        },

        async once() {
          contentAnimation();
          initImageSlider();
          initVideoAutoplay();
          autoSlide(); // ✅ Initial call
        },
      },
    ],
  });
});
