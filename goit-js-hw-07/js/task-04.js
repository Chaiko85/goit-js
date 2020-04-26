"use strict";

const counter = document.querySelector("#value");
let counterValue = 0;

const decrement = function () {
  counterValue -= 1;
  counter.textContent = counterValue;
};

const increment = function () {
  counterValue += 1;
  counter.textContent = counterValue;
};

const btnMinus = document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", decrement);

const btnPlus = document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", increment);
