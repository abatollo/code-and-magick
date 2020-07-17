'use strict';

(function () {
  // Изменение цвета мантии персонажа по нажатию
  var setup = document.querySelector('.setup');
  var wizard = setup.querySelector('.wizard');

  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  window.colorize.setRandomColor(wizardCoat, window.colorize.COAT_COLOR_LIST);
  window.colorize.setRandomColor(wizardEyes, window.colorize.EYES_COLOR_LIST);
  window.colorize.setRandomColor(fireball, window.colorize.FIREBALL_COLOR_LIST);
})();
