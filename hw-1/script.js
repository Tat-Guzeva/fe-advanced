'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';

const MESSAGE_USER_CANCELED = 'Отменено пользователем!';
const MESSAGE_INVALID_LOGIN = 'Доступ запрещен, неверный логин!';
const ENTER_PASSWORD = 'Введите пароль';
const MESSAGE_WELCOME = 'Добро пожаловать!';

const enter = prompt('Введите логин');

if (!enter){
  alert(MESSAGE_USER_CANCELED);
} else if (enter !== adminLogin){
  alert(MESSAGE_INVALID_LOGIN);
} else if (enter === adminLogin){
    const enterPassword = prompt(ENTER_PASSWORD);
    if (!adminPassword){
      alert(MESSAGE_USER_CANCELED);
    } else if (enterPassword !== adminPassword){
      alert(MESSAGE_INVALID_LOGIN);
    } else if (enterPassword === adminPassword){
      alert(MESSAGE_WELCOME);
    }
}