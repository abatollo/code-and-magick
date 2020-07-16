'use strict';

(function () {
  // Открытие-закрытие окна настроек персонажа
  var POPUP_COORDS_X = '50%';
  var POPUP_COORDS_Y = '80px';
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

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
    // Показываем окно
    setup.classList.remove('hidden');
    // Добавляем обработчик для закрытия
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    // Скрываем окно
    setup.classList.add('hidden');
    // Удаляем обработчики для закрытия
    document.removeEventListener('keydown', onPopupEscPress);

    setup.style.left = POPUP_COORDS_X;
    setup.style.top = POPUP_COORDS_Y;
  };
})();
