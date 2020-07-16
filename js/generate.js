'use strict';

(function () {
  // -=-=-=-=-=-=-=-
  // -= КОНСТАНТЫ =-
  // -=-=-=-=-=-=-=-

  var WIZARDS_NUMBER = 4;

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

  // -=-=-=-=-=-=-=-
  // -=- ФУНКЦИИ -=-
  // -=-=-=-=-=-=-=-

  var generateRandomWizards = function (arrLength) {

    var arr = [];

    for (var i = 0; i < arrLength; i++) {
      arr.push({
        name: window.util.getRandomArrayItem(NAMES_LIST) + ' ' + window.util.getRandomArrayItem(SURNAMES_LIST),
        coatColor: window.util.getRandomArrayItem(COAT_COLOR_LIST),
        eyesColor: window.util.getRandomArrayItem(EYES_COLOR_LIST)
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

  // -=-=-=-=-=-=-=-
  // -= ПРОГРАММА =-
  // -=-=-=-=-=-=-=-

  // Собираем данные в виде массива из моков заданной в константе длины
  var wisards = generateRandomWizards(WIZARDS_NUMBER);

  renderWizards(wisards, '#similar-wizard-template');
})();
