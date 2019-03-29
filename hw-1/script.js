'use strict';

{/* Старая домашка
const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';

const MESSAGE_USER_CANCELED = 'Отменено пользователем!';
const MESSAGE_INVALID_LOGIN = 'Доступ запрещен, неверный логин!';
const ENTER_PASSWORD = 'Введите пароль';
const MESSAGE_WELCOME = 'Добро пожаловать!';

const enter = prompt('Введите логин');

if (!enter){
  alert(MESSAGE_USER_CANCELED);
}else if (enter === adminLogin){
  const enterPassword = prompt(ENTER_PASSWORD);
  if (!adminPassword){
    alert(MESSAGE_USER_CANCELED);
  } else if (enterPassword !== adminPassword){
    alert(MESSAGE_INVALID_LOGIN);
  } else if (enterPassword === adminPassword){
    alert(MESSAGE_WELCOME);
  }
}
  else{
  alert(MESSAGE_INVALID_LOGIN);
  }
*/
}
// Задача 1
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

const userInput = prompt('Введите пароль');
if(!userInput){
  message = 'Отменено пользователем!';
} else if (userInput !== ADMIN_PASSWORD){
  message = 'Доступ запрещен, неверный пароль!';
} else{
  message = 'Добро пожаловать!';
}
alert(message);


// Задача 2
/*const sredits = 23580;
const pricePerDroid = 3000;
let quantity = 1; //3, 5, 8, 12

let totalPrice;

totalPrice = pricePerDroid * quantity;
console.log(totalPrice);

if(totalPrice > sredits){
  console.log('Недостаточно средств на счету!');
} else {
  let rest;
  rest = sredits - totalPrice;
  console.log(`Вы укпили ${quantity} дроидов, на счету осталось ${rest} кредитов`);
}
*/

// Задача 3
/*const country = 'Индия'; //Китай, Южная Америка, Австралия, Ямайка
let price;

switch(country){
  case 'Китай':
    price = '100 кредитов';
    console.log(`Доставка в ${country} будет стоить ${price}`);
    break;
  
  case 'Южная Америка':
    price = '250 кредитов';
    console.log(`Доставка в ${country} будет стоить ${price}`);
    break;

  case 'Австралия':
    price = '170 кредитов';
    console.log(`Доставка в ${country} будет стоить ${price}`);
    break;
  
  case 'Индия':
    price = '80 кредитов';
    console.log(`Доставка в ${country} будет стоить ${price}`);
    break;

  case 'Ямайка':
    price = '120 кредитов';
    console.log(`Доставка в ${country} будет стоить ${price}`);
    break;

  default:
   console.log('В вашей стране доставка не доступна');
}
*/
