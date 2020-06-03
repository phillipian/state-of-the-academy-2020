//Returns an html string for the tooltip
function generateTooltip(json) {
  return "<h4>" + json.title + "</h4><p>Responses: <strong>" + json.responses + "</strong>" + (json.percentage ? "<br>Percentage: <strong>" + (json.percentage * 100).toFixed(1) + "%</strong>" : "") + "</p>";
}

//Returns an html string for the tooltip for the multiline
function generateTooltipMultiline(json) {
  var responseStr = "",
      percentageStr = "";
  json.responses = json.responses.map(function(d, i){
    return {
      data: d,
      color: json.colors[i]
    };
  });

  for(var i = 0; i < json.responses.length; i++){
    responseStr += "<div class = 'bubble' style = 'background:" + json.responses[i].color + "'></div> <span>" + json.labels[i] + ": " + json.responses[i].data + "</span><br>";
    percentageStr += "<div class = 'bubble' style = 'background:" + json.responses[i].color + "'></div> <span>" + json.labels[i] + ": " + (json.responses[i].data * 100 / json.total).toFixed(1) + "%</span><br>";
  }

  return "<h4>" + json.title + "</h4><p>Responses:</p>" + responseStr + "<br><p>Percentage (for each category):</p>" + percentageStr;
}
