var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".home-slider", {
  loop:true,
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const irArriba = document.querySelector(".ir-arriba");

irArriba.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    if (window.scrollY < 500) {
        irArriba.style.right = -100 + "px";
    } else {
        irArriba.style.right = 5 + "px";
    }
});

var swiper = new Swiper(".blogs-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
     640: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     991: {
       slidesPerView: 3,
     },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});