/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='varsity-athlete-hook-up-pressure']").highcharts({
    chart: {
      type: 'column'
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    xAxis: {
      categories: ['Pressured to participate', 'Not pressured to pariticpate'],
    },
    yAxis: {
      title: {
        text: 'Respondents'
      }
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      name: 'Varsity athletes',
      data: [174, 235]
    }, {
      name: 'Non-varsity athletes',
      data: [167, 347]
    }]
  });
});
