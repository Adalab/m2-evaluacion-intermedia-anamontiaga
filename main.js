"use strict";

// al pulsar el botón de "prueba", acceder al contenido del input y mostrarlo en la consola

// recojo los elementos que voy a necesitar

const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input-number");
const messageEl = document.querySelector(".page__message");

// handler para recoger el número y mostrarlo en la consola
function getImputValue() {
  console.log(inputEl.value);
}

// listener al btn para que ejecute  getImputValue y showConsole
btnEl.addEventListener("keyup", getImputValue);
