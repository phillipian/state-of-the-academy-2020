/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='reverse-racism-grade']").highcharts({
    chart: {
      type: 'bar'
    },
    xAxis: {
      categories: ['It Exists', 'It Doesn\'t Exist'],
      labels: {
        rotation: -90,
      }
    },
    legend: {
      reversed: true
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      name: '2016',
      data: [71, 156]
    }, {
      name: '2017',
      data: [74, 158]
    }, {
      name: '2018',
      data: [105, 158]
    }, {
      name: '2019',
      data: [110, 91]
    }]
  });
});
