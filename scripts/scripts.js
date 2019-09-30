var randomNumber = function(min, max) {
  var random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

// var players = document.querySelector();
// players.innerText = randomNumber(40, 400);
// var hours = document.querySelector();
// hours.innerText = randomNumber(1, 34566);
// var tournaments = document.querySelector();
// tournaments.innerText = randomNumber(1, 98);
// var fails = document.querySelector();
// fails.innerText = randomNumber(1, 67);
// var comments = document.querySelector();
// comments.innerText = randomNumber(1, 9890);
// var games = document.querySelector();
// games.innerText = randomNumber(1, 893);

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
  // var count = x.innerText;
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
