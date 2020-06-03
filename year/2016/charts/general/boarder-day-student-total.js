/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='boarder-day-student-total']").highcharts({
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Boarder', 'Day Student'],
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      }
    },
    series: [{
      data: [
        ['Boarder', 668],
        ['Day Student', 255]
      ],
      showInLegend: false
    }]
  });
});
