/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='study-drugs-grade']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'percent',
        dataLabels: {
          enabled: false
        }
      }
    },
    xAxis: {
      categories: ['2016', '2017', '2018', '2019']
    },
    tooltip: {
      formatter: percentageToolTipFormatter
    },
    series: [{
      name: 'On and off campus',
      data: [19, 7, 5, 2]
    }, {
      name: 'On campus',
      data: [18, 14, 12, 5]
    }, {
      name: 'Off campus',
      data: [0, 1, 1, 1]
    }, {
      name: 'Not applicable',
      data: [190, 210, 245, 193]
    }]
  });
});
