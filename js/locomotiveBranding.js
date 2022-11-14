let targetLogoNavbar = document.querySelector('#logo-navbar');
let target5 = document.querySelector('#team');
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smartphone: { smooth: true,},
    getDirection: true,
  });
  setTimeout(() => {
    locoScroll.update();
  }, 10000);

  targetLogoNavbar.addEventListener('click', () => {
    locoScroll.scrollTo(target5)
  });