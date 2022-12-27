let servicios = document.querySelector('#boton-servicios');
let iconoServicio = document.querySelector('.icono-servicios');
// let boton1 = document.querySelector('#boton---1');
let icono = document.querySelector('.icono');
let botones = document.querySelectorAll('.loading');
let target3 = document.querySelector('#section-3');
let target = document.querySelector('#servicios--');
let logofolio = document.querySelectorAll('.portafolio');
let teamprueba = document.querySelector('#team-prueba')
let contacto = document.querySelector('#seccion-contacto')
let mobileMenu = document.querySelectorAll('.mobile-nav a');
let target5 = document.querySelector('#inicio');
let target2 = document.querySelector('#my-section-');
let targetLogoNavbar = document.querySelector('#logo-navbar');

let scrollContainer = document.querySelector("[data-scroll-container]");
imagesLoaded(scrollContainer, { background: true }, function () {
  setTimeout(() => {
    locoScroll.update();
  }, 5000); 
});

// Set timeout for resie viewport.
setTimeout(locomotiveHeightBug, 3500);
function locomotiveHeightBug(){
  window.dispatchEvent(new Event('resize'));
}

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smartphone: { smooth: true,},
    getDirection: true,

  });

  

  // $(window).load(function () { locoScroll.update(); ScrollTrigger.update; });

servicios.addEventListener('click', () => {
  setTimeout(() => {
    locoScroll.update();
 }, 1000); 
});

iconoServicio.addEventListener('click', () => {
  setTimeout(() => {
    locoScroll.update();
  }, 1000);
  locoScroll.scrollTo(target)
  });

  targetLogoNavbar.addEventListener('click', () => {
    locoScroll.scrollTo(target5)

    });
  boton1.addEventListener('click', () => {
    setTimeout(() => {
      locoScroll.update();
    }, 1000);
    });
icono.addEventListener('click', () => {
      setTimeout(() => {
        locoScroll.update();
      }, 1000);
      locoScroll.scrollTo(target3)
      });
      
      for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', () => {
          setTimeout(() => {
            locoScroll.update();
          }, 1000);
          });
      }
for (let i = 0; i < logofolio.length; i++) {
  logofolio[i].addEventListener('click', () => {
    setTimeout(() => {
      locoScroll.update();
    }, 1000);
    locoScroll.scrollTo(target3)

    });
}
for (let i = 0; i < mobileMenu.length; i++) {
  mobileMenu[i].addEventListener('click', () => {
    if (i === 1){
      locoScroll.scrollTo(target)
      } else if (i === 2){
        locoScroll.scrollTo(target2)
  
      } else if (i === 3){
        locoScroll.scrollTo(target3)
  
      } else if(i === 4){
        locoScroll.scrollTo(target4)
  
      }else if(i === 0){
        locoScroll.scrollTo(target5)
      }
  });
}

icono.addEventListener('click', () => {
          setTimeout(() => {
            locoScroll.update();
          }, 1000);
          });   


let links = document.querySelectorAll(".nav-link");
let target4 = document.querySelector('#my-sectionsss');

for (let index = 0; index < links.length; index++) {
    const link = links[index];
    link.addEventListener('click', function() {


    if (index === 1){
    locoScroll.scrollTo(target)
    } else if (index === 3){
      locoScroll.scrollTo(target3)

    } else if(index === 4){
      locoScroll.scrollTo(target4)

    }else if(index === 0){
      locoScroll.scrollTo(target5)
    }
    });
  }
  contacto.addEventListener('click', () => {
    locoScroll.scrollTo(target4)
  });
// MDN CHILE

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

// Esto estaba comentado
// let tl4= gsap.timeline({
//       scrollTrigger: {
//         trigger: "#my-sectionsss",
//         start: " top center",
//         scroller: ".smooth-scroll",
//       }
//     })
//     tl4.from("#ayudarte-footer", {x:-200, opacity:0, duration:1.5})
//         .from(".redes-sociales", {y:210, opacity:0, duration:1}, "-=1")
//         .from(".formulario", {x:-210, opacity:0, duration:1}, "-=1")

//         let tl5= gsap.timeline({
//           scrollTrigger: {
//             trigger: ".splide",
//             start: " center center",
//             scroller: ".smooth-scroll",
//           }
//         })
//         tl5.from("#splide_trackk", {x:-200, opacity:0, duration:1.5});

let tl55= gsap.timeline({
          scrollTrigger: {
            trigger: ".servicios",
            start: " center center",
            scroller: ".smooth-scroll",
          }
        })
        tl55.from(".titulo-", {x:-200, opacity:0, duration:1.5});

        let tl56= gsap.timeline({
          scrollTrigger: {
            trigger: ".section2-",
            start: " center center",
            scroller: ".smooth-scroll",
          }
        })
        tl55.from("#boton-servicios", {x:60, opacity: 0,duration:1.4,});

        let tl57= gsap.timeline({
          scrollTrigger: {
            trigger: ".section3",
            start: " center center",
            scroller: ".smooth-scroll",
          }
        })
        tl57.from("#boton-team--", {x:60, opacity: 0,duration:1.4,});
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

// let tl8= gsap.timeline({
//   scrollTrigger: {
//     trigger: ".ayudarte-todo",
//     scroller: ".smooth-scroll",
//   }
// });
// tl8.from(".ayudarte", {x:-200, opacity:0, duration:1.5});
// tl8.from(".contenido-ayudarte", {x:-200, opacity:0, duration:1.5}, "-=1");
// tl8.from(".imagen-banderas", {x:-200, opacity:0, duration:1.5}, "-=1");

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
