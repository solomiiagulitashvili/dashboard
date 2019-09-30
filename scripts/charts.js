function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'x');
  data.addColumn('number', 'Active players');
  // data.addColumn('number', null);
  data.addRows([
    [{ v: 1, f: 'MON' }, 40],
    [{ v: 2, f: 'TUE' }, 23],
    [{ v: 3, f: 'WED' }, 30],
    [{ v: 4, f: 'THU' }, 50],
    [{ v: 5, f: 'FRI' }, 30],
    [{ v: 6, f: 'SAT' }, 29],
    [{ v: 7, f: 'SUN' }, 20],
    [{ v: 8, f: '' }, null],
  ]);

  // var data_2 = google.visualization.arrayToDataTable();
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
      ticks: [
        { v: 1, f: 'MON' },
        { v: 2, f: 'TUE' },
        { v: 3, f: 'WED' },
        { v: 4, f: 'THU' },
        { v: 5, f: 'FRI' },
        { v: 6, f: 'SAT' },
        { v: 7, f: 'SUN' },
      ],
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
  chart_1.draw(data, options);
  // var chart_2 = new google.visualization.LineChart(document.getElementById('chart-2'));
  // chart_2.draw(data_2, options);
}
// [
//   ['Day', 'number of players'],
//   ['MON', 40],
//   ['TUE', 24],
//   ['WED', 30],
//   ['THU', 50],
//   ['FRI', 30],
//   ['SAT', 28],
//   ['SUN', 20],
// ]
// [
//   ['Day', 'tournaments'],
//   ['MON', 200],
//   ['TUE', 440],
//   ['WED', 200],
//   ['THU', 400],
//   ['FRI', 200],
//   ['SAT', 380],
//   ['SUN', 100],
// ]
