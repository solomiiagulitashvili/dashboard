var randomNumber = function(min, max) {
  var random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

var bigStats = [
  '.players span',
  '.hours span',
  '.tournaments span',
  '.fails span',
  '.comments span',
  '.games span',
];
bigStats.forEach(function(bigStat) {
  var x = document.querySelector(bigStat);
  var max = randomNumber(1, 342);

  var count = 0;
  var timer = function() {
    x.innerText = count;
    count++;
    if (count === max) {
      clearInterval(interval);
    }
  };

  var interval = setInterval(timer, 20);
});
