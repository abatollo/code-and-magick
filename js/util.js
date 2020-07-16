'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  var getRandomArrayItem = function (arr) {
    var randomArrayItem = arr[Math.floor(Math.random() * arr.length)];

    return randomArrayItem;
  };

  return {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomArrayItem: getRandomArrayItem
  };
})();
