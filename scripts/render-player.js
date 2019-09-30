(function() {
  var playersList = document.querySelector('.players-list');
  var playerTemplate = document.querySelector('#player').content.querySelector('.item');

  var rendering = function() {
    var fragment = document.createDocumentFragment();
    window.data.forEach(function(player) {
      var item = playerTemplate.cloneNode(true);
      item.querySelector('.set-up-src').src = player.src;
      item.querySelector('.player-name').textContent = player.name;
      item.querySelector('.player-country').textContent = player.country;

      fragment.appendChild(item);
      if (playersList.hasChildNodes()) {
        playersList.removeChild(playersList.childNodes[0]);
      }
    });
    playersList.appendChild(fragment);
  };
  rendering();
})();
