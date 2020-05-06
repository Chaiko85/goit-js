"use strict";

const items = [...document.querySelectorAll(".item")];
console.log(`В списке ${items.length} категории`);

items.forEach((item) => {
  const heading = item.querySelector("h2");
  const element = item.querySelectorAll("li");
  console.log(`Категория: ${heading.textContent}`);
  console.log(`Количество элементов: ${element.length}`);
});
