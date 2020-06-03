/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='alone-total']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    },
    xAxis: {
      categories: ['Always', 'Regularly', 'Sometimes', 'Never'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [
        ['Always', 33],
        ['Regularly', 165],
        ['Sometimes', 516],
        ['Never', 209]
      ],
      showInLegend: false
    }]
  });
});
