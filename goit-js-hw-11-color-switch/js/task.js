"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector("body");
const startBtn = document.querySelector("button[data-action='start']");
const stopBtn = document.querySelector("button[data-action='stop']");

const changeBodyColor = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.colorId = setInterval(() => {
      let index = randomIntegerFromInterval(0, colors.length);
      body.style.backgroundColor = colors[index];
    }, 1000);
  },
  stop() {
    clearInterval(this.colorId);
    this.isActive = false;
  },
};

startBtn.addEventListener("click", changeBodyColor.start.bind(changeBodyColor));
stopBtn.addEventListener("click", changeBodyColor.stop.bind(changeBodyColor));
