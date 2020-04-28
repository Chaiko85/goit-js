"use strict";

const inputFont = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

inputFont.addEventListener("input", () => {
  spanText.style.fontSize = `${inputFont.value}px`;
});
