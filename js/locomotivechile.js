
let contactos = document.querySelector('#seccion-contacto');

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smartphone: { smooth: true,},
    getDirection: true,

  });

let scrollMoving = document.querySelectorAll(".scroll-moving");
let scrollContacto = document.querySelector("#my-sectionsss");
let scrollprueba = document.querySelector("#servicios--");
let mensaje = document.querySelector("#seccion-contactoss");
let target4 = document.querySelector('#my-sectionsss');
let targetTeam = document.querySelector('.team-section');
let scrollContainer = document.querySelector("[data-scroll-container]");
let mobileMenu = document.querySelectorAll('.mobile-nav a');
let targetLogoNavbar = document.querySelector('#logo-navbar');
let target5 = document.querySelector('#inicio');


for (let index = 0; index < scrollMoving.length; index++) {
    const scroll = scrollMoving[index];
    scroll.addEventListener('click', function() {
      if (index === 1){
        locoScroll.scrollTo(targetTeam)
      } else if (index === 2){
        locoScroll.scrollTo(target4); 
      }
    });
  };
  targetLogoNavbar.addEventListener('click', () => {
    locoScroll.scrollTo(target5)
    });
mensaje.addEventListener('click', function(){
  locoScroll.scrollTo(target4)
});
imagesLoaded(scrollContainer, { background: true }, function () {
  setTimeout(() => {
    locoScroll.update();
  }, 5000); 
});

for (let i = 0; i < mobileMenu.length; i++) {
  console.log(mobileMenu[i])
  mobileMenu[i].addEventListener('click', () => {
    if (i === 2){
      locoScroll.scrollTo(targetTeam)
      console.log(target2)
      } else if (i === 4){
        locoScroll.scrollTo(target4); 
      }
  });
}





// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});
ScrollTrigger.create({
  start: 'top -80',
  end: 99999,
  toggleClass: {className: 'navbarr', targets: 'navbarr'}
});


  let tl= gsap.timeline({
    scrollTrigger: {
      trigger: ".servicios",
      start: " top top",
      end: "bottom bottom",
      scroller: ".smooth-scroll",
    }
  })
  tl.from(".imagen-1", {x:-200, opacity:0, duration:1.5})
      .from(".row-diseño-coordinador",{x:-200, opacity:0, duration:1.5})
    .from(".servicios-content", { opacity:0, duration:1}, "-=1")

let tl2= gsap.timeline({
      scrollTrigger: {
        trigger: ".section-team",
        start: " bottom center",
        scroller: ".smooth-scroll",
      }
    })
    tl2.from(".imagen-2", {x:-200, opacity:0, duration:1.5})
    .from(".team-content", { opacity:0, duration:1}, "-=1")


let tl3= gsap.timeline({
      scrollTrigger: {
        trigger: "#servicios-",
        start: " center center",
        scroller: ".smooth-scroll",
      }
    })
    tl3.from("#imagen--1", {x:-200, opacity:0, duration:1})
    .from(".contenido-portafolio", {y:210, opacity:0, duration:1}, "-=1")

let tl4= gsap.timeline({
      scrollTrigger: {
        trigger: "#my-sectionsss",
        start: " center center",
        scroller: ".smooth-scroll",
      }
    })
    tl4.from("#ayudarte-footer", {x:-200, opacity:0, duration:1.5})
        .from(".redes-sociales", {y:210, opacity:0, duration:1}, "-=1")
        .from(".formulario", {x:-210, opacity:0, duration:1}, "-=1")

        let tl5= gsap.timeline({
          scrollTrigger: {
            trigger: ".splide",
            start: " center center",
            scroller: ".smooth-scroll",
          }
        })
        tl5.from("#splide_trackk", {x:-200, opacity:0, duration:1.5});

let tl55= gsap.timeline({
          scrollTrigger: {
            trigger: ".servicios",
            start: " center center",
            scroller: ".smooth-scroll",
          }
        })
        tl55.from(".titulo-", {x:-200, opacity:0, duration:1.5});

        
// Animaciones MDN - Chile
let tl6= gsap.timeline({
  scrollTrigger: {
    trigger: ".texto-nosotros",
    // start: " top center",
    scroller: ".smooth-scroll",
  }
});
tl6.from(".titulo-nosotross", {x:-200, opacity:0, duration:1.5});
tl6.from(".nosotros-p", {y:200, opacity:0, duration:1.5},"-=1");

let tl7= gsap.timeline({
  scrollTrigger: {
    trigger: ".nosotros",
    // start: " top center",
    scroller: ".smooth-scroll",
  }
});
tl7.from(".titulos-nosotros", {x:-200, opacity:0, duration:1.5},);
tl6.from(".contenido-nosotros", {y:200, opacity:0, duration:1.5}, "-=1");

let tl8= gsap.timeline({
  scrollTrigger: {
    trigger: ".ayudarte-todo",
    scroller: ".smooth-scroll",
  }
});
tl8.from(".ayudarte", {x:-200, opacity:0, duration:1.5});
tl8.from(".contenido-ayudarte", {x:-200, opacity:0, duration:1.5}, "-=1");
tl8.from(".imagen-banderas", {x:-200, opacity:0, duration:1.5}, "-=1");

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
