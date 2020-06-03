/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='sexual-activity-grade']").highcharts({
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
      name: 'Anal',
      data: [21, 11, 3, 3]
    }, {
      name: 'Digital',
      data: [141, 114, 89, 31]
    }, {
      name: 'Oral',
      data: [153, 115, 68, 28]
    }, {
      name: 'Vaginal',
      data: [120, 76, 23, 12]
    }, {
      name: 'Not Applicable',
      data: [61, 103, 162, 166]
    }]
  });
});
