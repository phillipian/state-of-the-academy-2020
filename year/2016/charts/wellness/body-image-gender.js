/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='body-image-gender']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'percent'
      }
    },
    xAxis: {
      categories: ['Agender', 'Gender fluid', 'Genderqueer', 'Man', 'Nonbinary', 'Woman']
    },
    tooltip: {
      formatter: percentageToolTipFormatter
    },
    series: [{
      name: 'Yes, always',
      data: [1, 1, 0, 25, 2, 83]
    }, {
      name: 'Yes, regularly',
      data: [3, 0, 1, 48, 2, 146]
    }, {
      name: 'Yes, sometimes',
      data: [0, 0, 1, 161, 5, 198]
    }, {
      name: 'No',
      data: [1, 1, 0, 191, 0, 53]
    }]
  });
});
