/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='marijuana-total']").highcharts({
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['On and off campus', 'On campus', 'Off campus', 'Not applicable'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      }
    },
    series: [{
      data: [
        ['On and off campus', 151],
        ['On campus', 23],
        ['Off campus', 103],
        ['Not applicable', 646]
      ],
      showInLegend: false
    }]
  });
});
