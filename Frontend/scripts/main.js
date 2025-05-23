/* document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("video");
    if (video) {
        video.play();
    }
});
 */


const imageList = [
    "../images/img1.avif",
    "../images/img2.avif",
    "../images/img3.avif",
    "../images/img4.avif",
  ];

  let current = 0;
  const heroImage = document.getElementById("hero-image");

  setInterval(() => {
    current = (current + 1) % imageList.length;
    heroImage.style.opacity = 0;
    setTimeout(() => {
      heroImage.src = imageList[current];
      heroImage.style.opacity = 1;
    }, 250);
  }, 1500);

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
  t1 = gsap.timeline();
  t1.from(".animate-this", {
    duration: 1,
    y: 30,
    stagger: 0.3,
   /*  opacity: 0, */
    delay: 0.2,
  });
}

$(function () {
  barba.init({
    sync: true,

    transitions: [
      {
        async leave(data) {
          done = this.async();
          pageTransition();
          await delay(1000);
          done();
        },

        async enter(data) {
          contentAnimation();
        },

        async once() {
          contentAnimation();
        },
      },
    ],
  });
});

