/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='college-chances-grade']").highcharts({
    chart: {
      type: 'bar'
    },
    plotOptions: {
      series: {
        stacking: 'percentage'
      }
    },
    xAxis: {
      categories: ['2016', '2017', '2018', '2019'],
    },
    tooltip: {
      formatter: percentageToolTipFormatter
    },
    series: [{
      name: 'Negatively',
      data: [96, 102, 105, 52],
      dataLabels: {
        style: {
          color: 'white'
        }
      }
    }, {
      name: 'Positively',
      data: [113, 114, 143, 133]
    }, {
      name: 'None',
      data: [18, 16, 15, 16]
    }]
  });
});
