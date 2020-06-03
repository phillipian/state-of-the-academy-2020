/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='boarder-day-student-alcohol']").highcharts({
    chart: {
      type: 'column'
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    xAxis: {
      categories: ['Boarder', 'Day Student'],
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      name: 'Have consumed alcohol',
      data: [437, 124]
    }, {
      name: 'Have not consumed alcohol',
      data: [231, 131]
    }]
  });
});
