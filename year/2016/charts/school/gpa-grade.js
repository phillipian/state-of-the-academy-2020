/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='gpa-grade']").highcharts({
    chart: {
      type: 'area'
    },
    plotOptions: {
      series: {
        stacking: 'area',
        dataLabels: {
          color: '#333'
        }
      }
    },
    xAxis: {
      categories: ['6.0', '5.8', '5.6', '5.4', '5.2', '5.0', '4.8', '4.6', '4.4', '4.2', '4.0', '3.8', '3.6', '3.4', '3.2', '3.0 or less'],
    },
    yAxis: {
      reversedStacks: true
    },
    legend: {
      reversed: true
    },
    tooltip: {
      formatter: percentageToolTipFormatter
    },
    series: [{
      name: '2016',
      data: [19, 16, 29, 27, 35, 37, 22, 15, 8, 7, 8, 3, 0, 0, 0, 1]
    }, {
      name: '2017',
      data: [14, 11, 29, 35, 33, 42, 13, 30, 7, 7, 9, 1, 0, 0, 0, 1]
    }, {
      name: '2018',
      data: [16, 16, 32, 26, 29, 38, 36, 25, 12, 14, 9, 3, 3, 1, 0, 3]
    }, {
      name: '2019',
      data: [7, 7, 20, 31, 22, 31, 30, 21, 9, 7, 7, 5, 3, 0, 0, 1]
    }]
  });
});
