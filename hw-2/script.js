'use strict'

//Задание 1
/*let input;
const numbers = [];
let total = 0;

do{
    input = prompt('Введите число');

    numbers.push(Number(input));
    console.log(numbers);

} while(input !== null);

for (let i = 0; i < numbers.length; i += 1) {
    const currentNumber = numbers[i];
  
    total = currentNumber + total;
  }

console.log("total: ", total);

if(total === null){
    alert ('Пусто');
} else {
    alert (`Общая сумма чисел равна ${total}`);
}*/

//Задание 2

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let userPassword;
let counter = 0;
let attempts;

/*do{
    userPassword = prompt('Введите свой пароль');
    counter += 1;
    if(passwords.includes(userPassword)){
        alert('Добро пожаловать!');
        break;
    } else if(!passwords.includes(userPassword)){
        attempts = attemptsLeft - counter;
        alert(`Неверный пароль, у вас осталось ${attempts} попыток!`);
    } 
    if (attempts === 0){alert('У вас закончились попытки, аккаунт заблокирован!');}
} while (!userPassword || counter < attemptsLeft);*/

while(!userPassword || counter < attemptsLeft){
    userPassword = prompt('Введите свой пароль');
    counter += 1;
    if(passwords.includes(userPassword)){
        alert('Добро пожаловать!');
        break;
    } else if(!userPassword){
        alert('Была введена отмена!');
        break;
    } else if(!passwords.includes(userPassword)){
        attempts = attemptsLeft - counter;
        alert(`Неверный пароль, у вас осталось ${attempts} попыток!`);
    }
    if(attempts === 0){
        alert(`У вас закончились попытки, аккаунт заблокирован!`);
    }
}


