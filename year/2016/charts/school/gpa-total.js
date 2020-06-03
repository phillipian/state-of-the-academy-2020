/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='gpa-total']").highcharts({
    chart: {
      type: 'line'
    },
    xAxis: {
      categories: ['6.0', '5.8', '5.6', '5.4', '5.2', '5.0', '4.8', '4.6', '4.4', '4.2', '4.0', '3.8', '3.6', '3.4', '3.2', '3.0 or less'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [
        ['6.0', 56],
        ['5.8', 50],
        ['5.6', 110],
        ['5.4', 119],
        ['5.2', 119],
        ['5.0', 148],
        ['4.8', 101],
        ['4.6', 91],
        ['4.4', 36],
        ['4.2', 35],
        ['4.0', 33],
        ['3.8', 12],
        ['3.6', 6],
        ['3.4', 1],
        ['3.2', 0],
        ['3.0 or below', 6]
      ],
      showInLegend: false
    }]
  });
});
