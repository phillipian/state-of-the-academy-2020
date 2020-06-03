/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='sexual-assault-total']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      }
    },
    xAxis: {
      categories: ['On and <br />off campus', 'On campus', 'Off campus', 'Never']
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [
        ['On and off campus', 10],
        ['On campus', 21],
        ['Off campus', 53],
        ['Never', 839]
      ],
      showInLegend: false
    }]
  });
});
