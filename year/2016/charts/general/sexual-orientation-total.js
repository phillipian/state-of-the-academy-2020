/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='sexual-orientation-total']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        colorByPoint: true,
      }
    },
    xAxis: {
      categories: ['Asexual', 'Bisexual', 'Demisexual', 'Heterosexual', 'Homosexual', 'Pansexual'],
    },
    tooltip: {
      formatter: barTooltipFormatter
    },
    series: [{
      data: [
        ['Asexual', 16],
        ['Bisexual', 86],
        ['Demisexual', 10],
        ['Heterosexual', 782],
        ['Homosexual', 18],
        ['Pansexual', 11]
      ],
      showInLegend: false
    }]
  });
});
