"use strict";

// al pulsar el botón de "prueba", acceder al contenido del input y mostrarlo en la consola

// Nomeo elementos que voy a necesitar
const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input-number");
const messageEl = document.querySelector(".page__message");

// Declaro función que recoge todas las acciones
const compareNumberAndShow = function(ev) {
  ev.preventDefault();
  getImputValue();
  showMessage();
};

// handler para generar número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const myRandomNumber = getRandomNumber(100);

// console.log(`Mi número aleatorio es ${myRandomNumber}`);

// handler para recoger el número y mostrarlo en la consola
function getImputValue() {
  console.log(inputEl.value);
}

// Declaro función con condicional para pintar un mensaje diferente según si número del imputValue es mayor o menor que el número aleatorio generado
function showMessage() {
  if (inputEl.value === myRandomNumber) {
    messageEl.innerHTML = "¡HAS GANADO, CAMPEONA!";
  } else if (inputEl.value > myRandomNumber) {
    messageEl.innerHTML = "demasiado alto";
  } else {
    messageEl.innerHTML = "demasiado bajo";
  }
}

// listener al btn para que ejecute  getImputValue y showConsole
btnEl.addEventListener("click", compareNumberAndShow);
