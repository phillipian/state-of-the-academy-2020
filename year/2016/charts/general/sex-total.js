/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='sex-total']").highcharts({
    chart: {
      type: 'column'
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      }
    },
    xAxis: {
      categories: ['Female', 'Male', 'Intersex'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [
        ['Female', 494],
        ['Male', 427],
        ['Intersex', 2]
      ],
      showInLegend: false
    }]
  });
});
