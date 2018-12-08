'use strict'

let userInput;
const numbers = [];
let total = 0;

do{
    userInput = prompt('Введите число');

    numbers.push(Number(userInput));
    console.log(numbers);

} while(userInput !== null);

for (let i = 0; i < numbers.length; i += 1) {
    const currentNumber = numbers[i];
  
    total = currentNumber + total;
  }

console.log("total: ", total);

if(total === null){
    alert ('Пусто');
} else {
    alert (`Общая сумма чисел равна ${total}`);
}
