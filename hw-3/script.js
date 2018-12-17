'use strict'

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const min = 4;
const max = 16;

const isLoginValid = function(login) {
  if(login.length > min && login.length < max){
  } else if(login.length < min && login.length > max){
  }
};

const isLoginUnique = function(allLogins, login) {
  if(allLogins.includes(login)){
    return false;
  } else{
    return true;
  }
};

const addLogin = function(allLogins, login) {
  if(isLoginValid && isLoginUnique){
    allLogins.push(login);
    console.log('Логин успешно добавлен!');
  } if(!isLoginValid(login)){ //если пишу здесь else if, то не работает
    console.log('Логин должен быть от 4 до 16 символов');
  } if(!isLoginUnique(allLogins, login)){//если пишу здесь else if, то не работает
    console.log('Такой логин уже используется!');
  }
};

//Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
