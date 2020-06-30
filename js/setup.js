'use strict';

var NAMES_LIST = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SURNAMES_LIST = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLOR_LIST = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLOR_LIST = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLOR_LIST = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomArrayItem = function (arr) {
  var randomArrayItem = arr[Math.floor(Math.random() * arr.length)];

  return randomArrayItem;
};

var generateRandomWizards = function (arrLength) {

  var arr = [];

  for (var i = 0; i < arrLength; i++) {
    arr.push({
      name: getRandomArrayItem(NAMES_LIST) + ' ' + getRandomArrayItem(SURNAMES_LIST),
      coatColor: getRandomArrayItem(COAT_COLOR_LIST),
      eyesColor: getRandomArrayItem(EYES_COLOR_LIST)
    });
  }

  return arr;
};

var renderWizard = function (wizard, templateContent) {
  var wizardElement = templateContent.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wisardsArray, templateId) {
  var fragment = document.createDocumentFragment();
  var wizardTemplateContent = document.querySelector(templateId).content.querySelector('.setup-similar-item');

  for (var i = 0; i < wisardsArray.length; i++) {
    fragment.appendChild(renderWizard(wisardsArray[i], wizardTemplateContent));
  }

  document.querySelector('.setup-similar-list').appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var wisards = generateRandomWizards(4);

renderWizards(wisards, '#similar-wizard-template');

// Открытие-закрытие окна настроек персонажа

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  // Проверять находится ли в фокусе поле ввода надо с помощью document.activeElement или иначе?
  if (evt.key === 'Escape' && (document.activeElement !== setupUserName)) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  // 1. Показать окно
  setup.classList.remove('hidden');

  // 2. Добавить обработчики для закрытия
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  // 1. Скрыть окно
  setup.classList.add('hidden');

  // 2. Удалить обработчики для закрытия
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

// Изменение цвета мантии персонажа по нажатию

var changeFillColor = function (elem, input, colorsArr) {
  var randomColor = getRandomArrayItem(colorsArr);

  elem.style.fill = randomColor;
  input.value = randomColor;
};

var changeBackgroundColor = function (elem, input, colorsArr) {
  var randomColor = getRandomArrayItem(colorsArr);

  elem.style.backgroundColor = randomColor;
  input.value = randomColor;
};

var setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');

var setupWizardCoatInput = document.querySelector('[name="coat-color"]');

setupWizardCoat.addEventListener('click', function () {
  changeFillColor(setupWizardCoat, setupWizardCoatInput, COAT_COLOR_LIST);
});

var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');

var setupWizardEyesInput = document.querySelector('[name="eyes-color"]');

setupWizardEyes.addEventListener('click', function () {
  changeFillColor(setupWizardEyes, setupWizardEyesInput, EYES_COLOR_LIST);
});

var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

var setupWizardFireballInput = document.querySelector('[name="fireball-color"]');

setupWizardFireball.addEventListener('click', function () {
  changeBackgroundColor(setupWizardFireball, setupWizardFireballInput, FIREBALL_COLOR_LIST);
});
