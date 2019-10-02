var select = document.querySelector('.active-players select');

select.addEventListener('change', function(evt) {
  console.log(evt);
  window.network.load(
    function(transformedData) {
      window.charts.drawPlayersChart(transformedData);
    },
    'players',
    evt.target.value
  );
});
var select_tournaments = document.querySelector('.active-tournaments select');
select_tournaments.addEventListener('change', function(evt) {
  console.log(evt);
  window.network.load(
    function(transformedData) {
      window.charts.drawTournamentsChart(transformedData);
    },
    'tournaments',
    evt.target.value
  );
});
