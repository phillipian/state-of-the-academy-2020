/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='political-affiliation-grade']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: false
        }
      }
    },
    xAxis: {
      categories: ['2019', '2018', '2017', '2016'],
    },
    tooltip: {
      formatter: percentageToolTipFormatter
    },
    series: [{
      name: 'Conservative',
      data: [24, 57, 40, 31]
    }, {
      name: 'Liberal',
      data: [89, 119, 115, 124]
    }, {
      name: 'Libertarian',
      data: [4, 15, 11, 11]
    }, {
      name: 'Other or Unsure',
      data: [84, 72, 66, 61]
    }]
  });
});
