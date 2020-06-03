/**
 * Copyright (c) 2016 The Phillipian
 * Cite The Phillipian if using any information from this survey.
 *
 * This project is open source at https://github.com/phillipian.
 */

$(function() {
  $("[id='reverse-racism-political-affiliation']").highcharts({
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Reverse racism exists', 'Reverse racism doesn\'t exist'],
    },
    tooltip: {
      formatter: columnToolTipFormatter
    },
    series: [{
      name: 'Sec. Hillary Clinton',
      data: [99, 198]
    }, {
      name: 'Sen. Bernie Sanders',
      data: [100, 263]
    }, {
      name: 'Sen. Ted Cruz',
      data: [21, 15]
    }, {
      name: 'Gov. John Kasich',
      data: [93, 73]
    }, {
      name: 'Mr. Donald Trump',
      data: [47, 14]
    }]
  });
});
