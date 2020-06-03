/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='self-harm-andover-total']").highcharts({
    chart: {
      type: 'column'
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      }
    },
    xAxis: {
      categories: ['Has engaged in self-harm at Andover', 'Has not engaged in self-harm at Andover'],
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      data: [
        ['Yes', 134],
        ['No', 789]
      ],
      showInLegend: false
    }]
  });
});
