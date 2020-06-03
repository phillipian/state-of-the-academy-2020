/*
  Pie Chart
*/

var pieCharts = d3.selectAll(".pie").each(function(){
  var responses = this.dataset.responses.split(","),
      labels = this.dataset.labels.split(","),
      colors = this.dataset.colors.split(","),
      width = parseInt(this.dataset.radius) * 2 || 300,
      height = parseInt(this.dataset.radius) * 2 || 300,
      radius = parseInt(this.dataset.radius) || 150,
      name = this.dataset.name;

  var total = 0;
  var piedata = responses.map(function(d, i){
    total += parseInt(d);
    return {
      label: labels[i],
      value: parseInt(d),
      color: colors[i]
    };
  });

  var pie = d3.pie()
    .value(function(d){
      return d.value;
    }).sort(null);

  var arc = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

  var tooltip = d3.select(this).select(".tooltip"),
      tooltipText,
      mouse;

  var currentElement = this;

  d3.select(this).style("width", width);

  //Add pieChart
  var myChart = d3.select(this).append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
      .attr("transform", "translate(" + (width - radius) + "," + (height - radius) + ")")
      .selectAll("path").data(pie(piedata))
      .enter().append("path")
        .attr("fill", function(d, i){
          return d.data.color;
        })
        .attr("stroke", "white")
        .attr("d", arc)
        .on("mouseover", function(d, i){
          tooltipText = generateTooltip({title: d.data.label, responses: d.value, percentage: d.value / total});
          tooltip.classed("hidden", false).html(tooltipText);
        })
        .on("mousemove", function(d){
          mouse = d3.mouse(currentElement);

          tooltip.style("left", mouse[0] - Math.round(tooltip.node().offsetWidth / 2) + "px")
            .style("top", mouse[1] - Math.round(tooltip.node().offsetHeight) - 12 + "px");

          d3.select(this).style("fill", d3.rgb(d3.color(d.data.color).brighter(0.5)));
        })
        .on("mouseout", function(d){
          tooltip.classed("hidden", true);
          d3.select(this).style("fill", d.color);
        });

  //Add labels underneath pie chart
  var pieLabel = d3.select(this).append("div")
    .attr("class", "pie-label")
    .style("width", width + "px");

  if(name) pieLabel.append("h3").html(name);

  pieLabel.selectAll("span").data(piedata)
    .enter().append("span")
      .html(function(d, i){
        return "<div class = 'bubble' style = 'background:" + d.color + "'></div>" + d.label;
      }).append("br");
});
