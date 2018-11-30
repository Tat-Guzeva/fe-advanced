'use strict';

/*const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';*/

const adminLogin = prompt('Введите логин');

const loginCancel = 'Отменено пользователем!';
const wrongLogin = 'Доступ запрещен, неверный логин!';
const enterPassword = 'Введите пароль';
const passwordCancel = 'Отменено пользователем!';
const wrongPassword = 'Доступ запрещен, неверный пароль!';
const correctPassword = 'Добро пожаловать!';

if (!adminLogin){
  alert(loginCancel);
}if (adminLogin !== 'admin'){
  alert(wrongLogin);
}if (adminLogin === 'admin'){
  const adminPassword = prompt(enterPassword);
  if (!adminPassword){
    alert(wrongPassword);
  }if (adminPassword !== 'm4ng0h4ckz'){
    alert(wrongPassword);
  } if (adminPassword === 'm4ng0h4ckz'){
    alert(correctPassword);
  }
}