/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='other-happiness-self-happiness']").highcharts({
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Thinks others are generally happy at Andover', 'Doesn\'t think others are generally happy at Andover'],
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      name: 'Generally happy at Andover',
      data: [507, 226]
    }, {
      name: 'Not generally happy at Andover',
      data: [60, 130]
    }]
  });
});
