/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='happy-grade']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'percent'
      }
    },
    xAxis: {
      categories: ['2016', '2017', '2018', '2019'],
    },
    tooltip: {
      formatter: percentageToolTipFormatter
    },
    series: [{
      name: 'Generally happy at Andover',
      data: [175, 166, 216, 176]
    }, {
      name: 'Generally not happy at Andover',
      data: [52, 66, 47, 25]
    }]
  });
});
