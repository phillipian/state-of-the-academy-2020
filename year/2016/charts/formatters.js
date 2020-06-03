var barTooltipFormatter = function() {
  var t = 0;
  this.series.data.forEach(function(e) {
    t += e.y;
  });
  var percentage = Math.round(this.y / t * 1e4) / 100;
  return '<b>' + this.point.name + '</b><br>Responses: <b>' + this.y + '</b><br>Percentage: <b>' + percentage + '%</b>';
};

var dataLabelFormatter = function() {
  var t = 0;
  this.series.data.forEach(function(e) {
    t += e.y;
  });
  var percentage = Math.round(this.y / t * 1e4) / 100;
  return percentage + '%';
}

var percentageToolTipFormatter = function() {
  var t = 0;
  this.series.data.forEach(function(e) {
    t += e.y;
  });
  var percentage = Math.round(this.y / t * 1e4) / 100;
  return '<b>' + this.x + ': ' + this.series.name + "</b><br>Responses: <b>" + this.y + "</b><br>Percentage: <b>" + Math.round(100 * this.percentage) / 100 + "%</b>"
};

var columnToolTipFormatter = function() {
  var t = 0;
  this.series.data.forEach(function(e) {
    t += e.y;
  });

  var percentage = Math.round(this.y / t * 1e4) / 100;
  return '<b>' + this.x + ': ' + this.series.name + "</b><br>Responses: <b>" + this.y + "</b><br>Percentage: <b>" + Math.round(100 * percentage) / 100 + "%</b>"
};
