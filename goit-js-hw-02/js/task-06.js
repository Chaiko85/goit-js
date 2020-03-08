let input;

const numbers = [];

let total = 0;

while (true) {
  input = prompt("Введите своё счастливое число!");
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  if (input === null) {
    for (const number of numbers) {
      total += Number(number);
    }
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  }
  numbers.push(input);
}
