/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='sexual-activity-total']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    },
    xAxis: {
      categories: ['Yes', 'Not Applicable'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [
        ['Yes', 431],
        ['Not Applicable', 492]
      ],
      showInLegend: false
    }]
  });
});
