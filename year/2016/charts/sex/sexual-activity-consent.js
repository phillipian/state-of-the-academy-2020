/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='sexual-activity-consent']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'percent'
      }
    },
    xAxis: {
      categories: ['Digital', 'Oral', 'Anal', 'Vaginal']
    },
    tooltip: {
      formatter: percentageToolTipFormatter
    },
    series: [{
      name: 'Consistently asks for consent',
      data: [236, 230, 27, 158]
    }, {
      name: 'Does not consistently asks for consent',
      data: [98, 102, 11, 63]
    }]
  });
});
