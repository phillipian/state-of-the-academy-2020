/*
  Multipane interface
*/

var multipane = d3.selectAll(".multipane").each(function(){
  var labels = this.dataset.labels.split(","),
      id = this.id;

  //Add labels
  d3.select(this).insert("div",":first-child")
    .attr("class", "multipane-labels")
    .html(function(d){
      var str = "";
      for(var i = 0; i < labels.length; i++){
        str += "<a " + (i == 0 ? "class = 'selected'" : "") + " onclick = 'switchPane(" + i + ",\"" + id + "\", this)'>" + labels[i] + "</a>";
      }
      return str;
    });

  var children = this.children;

  for(var i = 2; i < children.length; i++){
    d3.select(children[i])
      .classed("hidden", true);
  }

});

function switchPane(i, id, globalThis){
  d3.select("#" + id).select(".multipane-labels").selectAll("*").each(function(d, index){
    if(index == i) d3.select(this).classed("selected", true);
    else d3.select(this).classed("selected", false);
  });

  d3.selectAll("#" + id + ">div").each(function(d, index){
    if(index > 0){
      if(index - 1 == i) {
        d3.select(this).classed("hidden", false);
      }
      else{
        d3.select(this).classed("hidden", true);
      }
    }
  });
}
