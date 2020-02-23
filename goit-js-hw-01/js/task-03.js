"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";

let message;

const pass = prompt("Enter password");

if (pass === null) {
  message = "Отменено пользователем!";
} else if (ADMIN_PASSWORD === pass) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
