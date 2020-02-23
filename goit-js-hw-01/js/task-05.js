"use strict";

let country = prompt("Укажите страну для доставки");

country = country.toLowerCase();

let credits;

let message;

switch (country) {
  case "китай":
    credits = 100;
    message = `Доставка в Китай будет стоить ${credits} кредитов`;
    break;
  case "чили":
    credits = 250;
    message = `Доставка в Чили будет стоить ${credits} кредитов`;
    break;
  case "австралия":
    credits = 170;
    message = `Доставка в Австралию будет стоить ${credits} кредитов`;
    break;
  case "индия":
    credits = 80;
    message = `Доставка в Индию будет стоить ${credits} кредитов`;
    break;
  case "ямайка":
    credits = 120;
    message = `Доставка в Ямайку будет стоить ${credits} кредитов`;
    break;
  default:
    message = `В вашей стране доставка не доступна`;
}

alert(message);
