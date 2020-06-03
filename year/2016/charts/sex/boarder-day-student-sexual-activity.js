/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='boarder-day-student-sexual-activity']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    xAxis: {
      categories: ['Boarders', 'Day Students'],
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      name: 'Have engaged in sexual activity',
      data: [340, 91]
    }, {
      name: 'Never have engaged in sexual activity',
      data: [328, 164]
    }]
  });
});
