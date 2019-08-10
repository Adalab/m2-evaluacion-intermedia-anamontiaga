"use strict";

// Nomeo elementos que voy a necesitar
const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input-number");
const messageEl = document.querySelector(".page__message");
const counterEl = document.querySelector(".page__counter");

const compareNumberAndShow = function(ev) {
  ev.preventDefault();
  updateCounter();
  showMessage();
};

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const myRandomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${myRandomNumber}`);

function write(element, text) {
  element.innerHTML = text;
}

function showMessage() {
  let inputNumber = parseInt(inputEl.value);
  if (inputNumber === myRandomNumber) {
    write(messageEl, "¡HAS GANADO, CAMPEONA!");
  } else if (inputNumber > myRandomNumber) {
    write(messageEl, "demasiado alto");
  } else {
    write(messageEl, "demasiado bajo");
  }
}

let counter = 0;

function updateCounter() {
  counter = counter + 1;
  write(counterEl, counter);
}

btnEl.addEventListener("click", compareNumberAndShow);
