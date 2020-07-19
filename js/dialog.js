'use strict';

(function () {
  // Открытие-закрытие окна настроек персонажа, запрос похожих магов с сервера и отправка настроек на сервер
  var POPUP_COORDS_X = '50%';
  var POPUP_COORDS_Y = '80px';
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (document.activeElement !== setupUserName) {
      window.util.isEscEvent(evt, closePopup);
    }
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);

    setup.style.left = POPUP_COORDS_X;
    setup.style.top = POPUP_COORDS_Y;
  };

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.upload(new FormData(form), function () {
      closePopup();
    });
    evt.preventDefault();
  });

  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var renderWizard = function (wizard, templateContent) {
    var wizardElement = templateContent.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var successHandler = function (wisardsArray) {
    var fragment = document.createDocumentFragment();
    var wizardTemplateContent = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wisardsArray[i], wizardTemplateContent));
    }

    document.querySelector('.setup-similar-list').appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);
})();
