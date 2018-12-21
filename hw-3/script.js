'use strict'

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const min = 4;
const max = 16;
const MESSAGE_LOGIN_ADDED = 'Логин успешно добавлен!';
const MESSAGE_INVALID_LOGIN = 'Логин должен быть от 4 до 16 символов'
const MESSAGE_LOGIN_USED = 'Такой логин уже используется!';

const isLoginValid = function(login) {
  if(login.length < min && login.length > max){
  } return false;
};

const isLoginUnique = function(allLogins, login) {
  if(allLogins.includes(login)){
    return false;
  }
};

const addLogin = function(allLogins, login) {
  if(isLoginValid && isLoginUnique){
    allLogins.push(login);
    console.log(MESSAGE_LOGIN_ADDED);
  } if(!isLoginValid(login)){
    console.log(MESSAGE_INVALID_LOGIN);
  } if(!isLoginUnique(allLogins, login)){
    console.log(MESSAGE_LOGIN_USED);
  }
};

//Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
