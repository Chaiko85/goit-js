"use strict";

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", function () {
  if (nameInput.value === "") {
    nameOutput.textContent = "Незнакомец";
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
