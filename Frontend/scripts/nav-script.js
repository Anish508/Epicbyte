const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const btnClose = document.querySelector('.btn-close');

function toggleMenu() {
  const isActive = menu.classList.toggle('active');
  menuBtn.setAttribute('aria-expanded', isActive);
  menu.setAttribute('aria-hidden', !isActive);
}

menuBtn.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);

// Optional: Close menu on link click
document.querySelectorAll('.links-container a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', false);
    menu.setAttribute('aria-hidden', true);
  });
});


function loader(){
var tl = gsap.timeline()

tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1
})

tl.to("#loader h3",{
  opacity:0,
  x:-10,
  duration:1,
  stagger:0.1
})

tl.to("#loader",{
  opacity:0,
})

tl.from(".sub-hero h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay: -0.5
})

tl.to("#loader",{
  display:"none",
})
}
loader();


