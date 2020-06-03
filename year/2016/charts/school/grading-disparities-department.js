/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='grading-disparities-department']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    },
    xAxis: {
      categories: ['Art', 'English', 'History and Social Science', 'Mathematics, Statistics,<br /> and Computer Science', 'Music', 'Natural Sciences', 'Physical Education', 'Philosophy and<br /> Religious Studies', 'Theater and Dance', 'World Languages', 'Not applicable'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [
        ['Art', 15],
        ['English', 639],
        ['History and Social Science', 109],
        ['Mathematics, Statistics, and Computer Science', 35],
        ['Music', 2],
        ['Natural Sciences', 42],
        ['Physical Education', 0],
        ['Philosophy and Religious Studies', 4],
        ['Theater and Dance', 0],
        ['World Languages', 39],
        ['Not applicable', 38]
      ],
      showInLegend: false
    }]
  });
});
