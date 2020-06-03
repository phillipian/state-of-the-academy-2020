/*
  Percentage Slider
*/

var percentageSliders = d3.selectAll(".percentage-slider").each(function(){
  var yesResponses = parseInt(this.dataset.yes),
      noResponses = parseInt(this.dataset.no);

  var htmlYes = generateTooltip({title: "Yes", responses: yesResponses, percentage: yesResponses / (yesResponses + noResponses)}),
      htmlNo = generateTooltip({title: "No", responses: noResponses, percentage: noResponses / (yesResponses + noResponses)});

  var accent = this.dataset.accent,
      lighterColor = d3.rgb(d3.color(accent).brighter(0.5));

  var tooltip = d3.select(this.firstChild);

  var yesX = parseInt(d3.select(this.children[1]).node().style.width.replace("%", ""));
  var noX = parseInt(d3.select(this.children[2]).node().style.width.replace("%", ""));

  d3.select(this.children[1]) //If hovering over yes
    .on("mouseover", function(d){
      tooltip.classed("hidden", false).html(htmlYes)
        .style("left", "calc(" + Math.round(yesX / 2) + "% - " + Math.round(tooltip.node().offsetWidth / 2) + "px)")
        .style("top", "-" + (Math.round(tooltip.node().offsetHeight) + 10) + "px");

      d3.select(this).style("background-color", lighterColor);
    })
    .on("mouseout", function(d){
      tooltip.classed("hidden", true);
      d3.select(this).style("background-color", accent);
    });

  d3.select(this.children[2]) //If hovering over no
    .on("mouseover", function(d){
      tooltip.classed("hidden", false).html(htmlNo)
        .style("left", "calc(" + Math.round(yesX + noX / 2) + "% - " + Math.round(tooltip.node().offsetWidth / 2) + "px)")
        .style("top", "-" + (Math.round(tooltip.node().offsetHeight) + 10) + "px");

      d3.select(this).style("background-color", "#f4f4f4");
    })
    .on("mouseout", function(d){
      tooltip.classed("hidden", true);
      d3.select(this).style("background-color", "white");
    });
});
