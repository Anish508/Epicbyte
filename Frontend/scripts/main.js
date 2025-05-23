/* document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("video");
    if (video) {
        video.play();
    }
});



document.addEventListener("DOMContentLoaded", function(){
  const arr = ["img/img6.jpg", "img/img5.jpg", "img/img4.jpg", "img/img3.jpg"]
  currentIndex = 0
  let slider = document.getElementById('slider')

  setInterval(()=>{
    currentIndex = (currentIndex+1) % arr.length
    slider.src = arr[currentIndex]
  },1000)
}) */

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

