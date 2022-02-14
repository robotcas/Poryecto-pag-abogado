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

const open_modaldos = document.getElementById("open_modaldos");

const fondo_modaldos = document.querySelector(".fondo_modaldos");
const modaldos = document.querySelector(".modaldos");

// seleccionamos todos los botones de la modal
const close_modaldos_btns = document.querySelectorAll(".close_modaldos");

// evento click
open_modaldos.addEventListener("click", () => {
  fondo_modaldos.classList.remove("hiddendos");
  modaldos.classList.remove("hiddendos");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modaldos of close_modaldos_btns) {
  btn_modaldos.addEventListener("click", () => {
    fondo_modaldos.classList.add("hiddendos");
    modaldos.classList.add("hiddendos");
  });
}

const open_modaltres = document.getElementById("open_modaltres");

const fondo_modaltres = document.querySelector(".fondo_modaltres");
const modaltres = document.querySelector(".modaltres");

// seleccionamos todos los botones de la modal
const close_modaltres_btns = document.querySelectorAll(".close_modaltres");

// evento click
open_modaltres.addEventListener("click", () => {
  fondo_modaltres.classList.remove("hiddentres");
  modaltres.classList.remove("hiddentres");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modaltres of close_modaltres_btns) {
  btn_modaltres.addEventListener("click", () => {
    fondo_modaltres.classList.add("hiddentres");
    modaltres.classList.add("hiddentres");
  });
}

