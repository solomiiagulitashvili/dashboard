(function() {
  window.charts = {
    drawPlayersChart: function(Data) {
      console.log(Data);
      var dataTable = new google.visualization.DataTable(Data);
      dataTable.addColumn('number', 'x');
      dataTable.addColumn('number', 'Active players');

      dataTable.addRows(Data);

      var options = {
        backgroundColor: '#f2f2f2',
        legend: 'none',
        title: '',
        series: {
          0: {
            color: '#287d80',
            areaOpacity: 0.1,
          },
        },
        pointSize: 10,
        pointShape: 'circle',

        hAxis: {
          baseline: 0,
          gridlines: {
            color: '#c9c9c9',
            count: 7,
          },
          textStyle: {
            fontSize: 11,
          },
          ticks: Data.map(function(item, i) {
            var newTicks = item[0];
            return newTicks;
          }),
        },
        vAxis: {
          baseline: 0,
          gridlines: {
            color: '#cdcdcd',
            count: 5,
          },
        },
      };
      var chart_1 = new google.visualization.AreaChart(document.getElementById('chart-1'));
      chart_1.draw(dataTable, options);
    },
    drawTournamentsChart: function(Data) {
      var tournamentsChart = new google.visualization.DataTable(Data);
      tournamentsChart.addColumn('number', 'x');
      tournamentsChart.addColumn('number', 'Active tournaments');

      tournamentsChart.addRows(Data);
      var options = {
        backgroundColor: '#f2f2f2',
        legend: 'none',
        title: '',
        series: {
          0: {
            color: '#287d80',
            areaOpacity: 0.1,
          },
        },
        pointSize: 10,
        pointShape: 'circle',

        hAxis: {
          baseline: 0,
          gridlines: {
            color: '#c9c9c9',
            count: 7,
          },
          textStyle: {
            fontSize: 11,
          },
          ticks: Data.map(function(item, i) {
            var newTicks = item[0];
            return newTicks;
          }),
        },
        vAxis: {
          baseline: 0,
          gridlines: {
            color: '#cdcdcd',
            count: 5,
          },
        },
      };
      var chart_2 = new google.visualization.AreaChart(document.getElementById('chart-2'));
      chart_2.draw(tournamentsChart, options);
    },
  };
})();
// window.charts.drawChart = drawChart;
