"use strict";

const delay = (ms) => {
  const promise = new Promise((resolved) => {
    setTimeout(() => {
      resolved(`${ms}`);
    }, ms);
  });
  return promise;
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
