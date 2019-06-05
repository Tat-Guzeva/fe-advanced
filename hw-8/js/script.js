'use strict';
const QUIZ_DATA = {
  title: 'Тест на базовый уровень JavaScript.',
  questions: [
    {
      question: 'Что возвращает метод Array.prototype.filter()?',
      choices: [
        'Массив, если результат работы содержит более одного элемента',
        'Один элемент, если только он прошел фильтрацию',
        'Всегда массив'
      ],
      answer: 2
    },
    {
      question: 'Как получить список всех ключей объекта obj?',
      choices: [
        'obj.keys()',
        'Object.keys(obj)',
        'obj.keys',
        'Object.getKeys(obj)'
      ],
      answer: 1
    },
    {
      question: 'Что такое статическое свойство класса?',
      choices: [
        'Свойство доступное только экземплярам, но не классу',
        'Свойство доступное только классу, но не его экземплярам',
        'Свойство которое нельзя изменять после создания'
      ],
      answer: 1
    },
    {
      question: 'Что такое обещание (promise)?',
      choices: [
        'Функция, представляющая конечный результат асинхронной операции',
        'Данные полученные в результате асинхронной операции',
        'Объект, представляющий конечный результат асинхронной операции'
      ],
      answer: 2
    },
    {
      question: 'Выберите не существующий HTTP-метод.',
      choices: ['PUT', 'GET', 'GRAB', 'DELETE', 'PATCH'],
      answer: 2
    },
    {
      question: 'Какой командой будет запускаться npm-скрипт с именем server?',
      choices: [
        'npm server',
        'npm start server',
        'npm execute server',
        'npm run server'
      ],
      answer: 3
    }
  ]
};

const INPUT_NAME_PREFIX = 'question-';
const RESULT_MESSAGE_ID = 'resultMessage';

const handleSubmit = (e, formEl) => {
  e.preventDefault();

  const { questions } = QUIZ_DATA;
  const questionsSum = questions.length;

  let rightAnswersCounter = 0;

  questions.forEach((data, questionIndex) => {
    const { answer } = data;
    const inputsArr = document.getElementsByName(
      `${INPUT_NAME_PREFIX}${questionIndex}`
    );

    if (inputsArr[answer].checked) {
      rightAnswersCounter++;
    }
  });

  const rightAnswersPercentage = (rightAnswersCounter / questionsSum) * 100;
  console.log(rightAnswersPercentage);

  const isQuizFailed = rightAnswersPercentage < 80;
  const oldMessageEl = document.getElementById(RESULT_MESSAGE_ID);

  if (oldMessageEl) {
    oldMessageEl.innerHTML = isQuizFailed ? 'Неудача' : 'Успех';
  } else {
    const messageEl = document.createElement('p');
    messageEl.id = RESULT_MESSAGE_ID;
    messageEl.innerHTML = isQuizFailed ? 'Неудача' : 'Успех';

    formEl.appendChild(messageEl);
  }
};

const renderChoice = (text, choiceIndex, questionIndex, listEl) => {
  const listItemEl = document.createElement('li');
  const labelEl = document.createElement('label');

  labelEl.classList.add();

  const inputEl = document.createElement('input');
  inputEl.type = 'radio';
  inputEl.name = `${INPUT_NAME_PREFIX}${questionIndex}`;
  inputEl.value = choiceIndex;

  const textEl = document.createTextNode(text);

  labelEl.append(inputEl, textEl);
  listItemEl.appendChild(labelEl);
  listEl.appendChild(listItemEl);
};

const renderQuestion = (data, questionIndex, containerEl) => {
  const { question, choices, answer } = data;
  const readableIndex = questionIndex + 1;

  const sectionEl = document.createElement('section');
  const questionTitleEl = document.createElement('h3');

  questionTitleEl.innerHTML = `${readableIndex}. ${question}`;

  sectionEl.appendChild(questionTitleEl);
  sectionEl.classList.add('question-section');

  const listEl = document.createElement('ol');

  choices.forEach((text, choiceIndex) => {
    renderChoice(text, choiceIndex, questionIndex, listEl);
  });

  sectionEl.appendChild(listEl);
  containerEl.appendChild(sectionEl);
};

const renderQuiz = () => {
  const { title, questions } = QUIZ_DATA;

  const formEl = document.getElementsByTagName('form')[0];
  formEl.classList.add('form');

  formEl.onsubmit = e => {
    handleSubmit(e, formEl);
  };

  const btnEl = formEl.children[0];

  const titleEl = document.createElement('h1');
  titleEl.innerHTML = title;

  formEl.insertBefore(titleEl, btnEl);

  const containerEl = document.createElement('div');

  questions.forEach((data, questionIndex) => {
    renderQuestion(data, questionIndex, containerEl);
  });

  formEl.insertBefore(containerEl, btnEl);
};

renderQuiz();
