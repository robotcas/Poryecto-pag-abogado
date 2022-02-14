let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

const open_modal = document.getElementById("open_modal");

const fondo_modal = document.querySelector(".fondo_modal");
const modal = document.querySelector(".modal");

// seleccionamos todos los botones de la modal
const close_modal_btns = document.querySelectorAll(".close_modal");

// evento click
open_modal.addEventListener("click", () => {
  fondo_modal.classList.remove("hidden");
  modal.classList.remove("hidden");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modal of close_modal_btns) {
  btn_modal.addEventListener("click", () => {
    fondo_modal.classList.add("hidden");
    modal.classList.add("hidden");
  });
}

