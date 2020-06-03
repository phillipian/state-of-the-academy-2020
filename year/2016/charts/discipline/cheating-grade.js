/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='cheating-grade']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'percent',
        dataLabels: {
          enabled: false
        }
      }
    },
    xAxis: {
      categories: ['2016', '2017', '2018', '2019']
    },
    tooltip: {
      formatter: percentageToolTipFormatter
    },
    series: [{
      name: 'Yes, has cheated',
      data: [72, 66, 55, 25]
    }, {
      name: 'No, has not cheated',
      data: [155, 166, 208, 176]
    }]
  });
});
