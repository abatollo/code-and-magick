'use strict';

window.colorize = (function () {
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

  var setRandomColor = function (element, colorArr) {
    element.addEventListener('click', function () {
      var color = window.util.getRandomArrayItem(colorArr);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    });
  };

  return {
    COAT_COLOR_LIST: COAT_COLOR_LIST,
    EYES_COLOR_LIST: EYES_COLOR_LIST,
    FIREBALL_COLOR_LIST: FIREBALL_COLOR_LIST,
    setRandomColor: setRandomColor
  };
})();
