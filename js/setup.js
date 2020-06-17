'use strict';

var getRandomArrayItem = function (arr) {
  var randomArrayItem = arr[Math.floor(Math.random() * arr.length)];

  return randomArrayItem;
};

var generateRandomWizards = function (arrLength) {

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

  var arr = [];

  for (var i = 0; i < arrLength; i++) {
    arr[i] = {
      name: getRandomArrayItem(NAMES_LIST) + ' ' + getRandomArrayItem(SURNAMES_LIST),
      coatColor: getRandomArrayItem(COAT_COLOR_LIST),
      eyesColor: getRandomArrayItem(EYES_COLOR_LIST)
    };
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

var renderWizards = function (templateId) {
  var fragment = document.createDocumentFragment();
  var wizardTemplateContent = document.querySelector(templateId).content.querySelector('.setup-similar-item');

  for (var i = 0; i < wisards.length; i++) {
    fragment.appendChild(renderWizard(wisards[i], wizardTemplateContent));
  }

  document.querySelector('.setup-similar-list').appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var hiddenBlock = document.querySelector('.setup');

hiddenBlock.classList.remove('hidden');

var wisards = generateRandomWizards(4);

renderWizards('#similar-wizard-template');
