/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='sleep-grade']").highcharts({
    chart: {
      type: 'area'
    },
    plotOptions: {
      area: {
        stacking: 'area'
      }
    },
    xAxis: {
      categories: ['10+ hours', '9', '8', '7', '6', '5', '4', '3', '< 2'],
      reversed: true
    },
    yAxis: {
      reversedStacks: true
    },
    legend: {
      reversed: true
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      name: '2016',
      data: [0, 7, 39, 90, 63, 25, 2, 0, 1]
    }, {
      name: '2017',
      data: [0, 6, 29, 86, 79, 27, 4, 0, 1]
    }, {
      name: '2018',
      data: [1, 9, 61, 105, 67, 17, 3, 0, 0]
    }, {
      name: '2019',
      data: [1, 9, 67, 79, 29, 15, 0, 1, 0]
    }]
  });
});
