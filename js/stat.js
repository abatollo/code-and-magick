'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_PADDING = 20;
var PADDING = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 120;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  if (arr.length === 0) {
    // Если массив пустой — возвращать ноль.
    return 0;
  }

  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_PADDING, CLOUD_Y + TEXT_PADDING * 2);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_PADDING, CLOUD_Y + TEXT_PADDING * 3);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    //   maxTime     times[i]
    // ---------- = ----------
    // BAR_HEIGHT       X

    // X = (BAR_HEIGHT * times[i]) / maxTime

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + PADDING + (BAR_WIDTH + PADDING) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_PADDING);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(255, ' + Math.random() * 100 + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + PADDING + (BAR_WIDTH + PADDING) * i, CLOUD_Y + CLOUD_HEIGHT - PADDING, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + PADDING + (BAR_WIDTH + PADDING) * i, CLOUD_Y + CLOUD_HEIGHT - TEXT_PADDING * 3 - (BAR_HEIGHT * times[i]) / maxTime);
  }

};
