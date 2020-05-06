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

const createLI = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("js-item");

  return li;
});

ourIngredients.append(...createLI);
