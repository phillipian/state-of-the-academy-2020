/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='major-offense-not-caught-grade']").highcharts({
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
      name: 'Yes, have gotten away with major offense/I.P. without being caught',
      data: [149, 137, 121, 52]
    }, {
      name: 'No, have not committed a major offense or have bee',
      data: [78, 95, 142, 149]
    }]
  });
});
