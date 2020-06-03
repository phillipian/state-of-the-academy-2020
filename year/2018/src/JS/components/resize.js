var resizeId;
d3.select(window).on('resize', function(){
  resizeId = setTimeout(function(){
    d3.selectAll(".line_chart").each(function(d, i){
      var thisNode = d3.select(this),
          width = d3.select("#sections").node().offsetWidth - margin.left - margin.right,
          height = parseInt(this.dataset.height) - margin.top - margin.bottom;

      drawGraph(this, dataForGraphs[i], totalForGraphs[i], width, height, this.dataset.accent, d3.select(this.firstChild), bisectors[i], this.dataset.x, this.dataset.y, this.dataset.scatter, numLinesGraphs[i], colorsForGraphs[i], this.dataset.shade);
    });

    d3.selectAll(".barchart").each(function(d, i){
      drawBarChart(this, dataForBarCharts[i], totalForBarCharts[i]);
    });
  }, 500);
});
