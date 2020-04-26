"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ourIngredients = document.querySelector("ul#ingredients");

const createLI = ingredients
  .map(
    (ingredient) =>
      (document.createElement("li").textContent = `<li>${ingredient}</li>`)
  )
  .join("");

const total = ourIngredients.insertAdjacentHTML("afterbegin", createLI);

console.log(ourIngredients);
