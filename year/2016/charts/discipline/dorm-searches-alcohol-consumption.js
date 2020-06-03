/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='dorm-searches-alcohol-consumption']").highcharts({
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Think the administration should<br /> be able to search dorms', 'Think the administration shouldn\'t<br /> be able to search dorms'],
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      name: 'Consumed alcohol on and off campus',
      data: [46, 165]
    }, {
      name: 'Consumed alcohol on campus',
      data: [1, 8]
    }, {
      name: 'Consumed alcohol off campus',
      data: [161, 180]
    }, {
      name: 'Never consumed alcohol',
      data: [246, 116]
    }]
  });
});
