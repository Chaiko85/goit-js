"use strict";

let credits = 23580;

const pricePerDroid = 3000;

const question = prompt("Какое количество дроидов Вы бы хотели приобрести?");

let message;

if (question === null) {
  message = "Отменено пользователем!";
} else {
  let totalPrice = pricePerDroid * question;
  if (totalPrice <= credits) {
    message = `Вы купили ${question} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`;
  } else {
    message = "Недостаточно средств на счету!";
  }
}

alert(message);
