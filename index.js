let colorsArray = {
    "general": ["#235085","#1065a1","#0b88c0","#22a7d3","#4ac2e5","#8dd1e9","#c6e6f3","#e3f4fb"],
    "politics": ["#2C3278", "#5D5797", "#7D78AD", "#948EB9", "#A8A3C6", "#DFDBE7"],
    "campus": ["#762670", "#945E98", "#A77FAD", "#C0ABC7"],
    "school": ["#812F54", "#AA7281", "#BF97A0", "#DCC5C3"],
    "discipline": ["#B53432", "#D47173", "#E4A8A6", "#F0D1CA"],
    "sex": ["#C7327E", "#D6739D", "#E1AAC0", "#F0D4DD"],
    "drugs": ["#E77929", "#EFA05E", "#F3B572", "#F6CC99", "#FAE3C4"],
    "wellness": ["#6CB645", "#99C872", "#B2D593", "#CAE2CB"],
    "covid": ["#008244", "#39B074", "#7CC193", "#C8E6DD"],
    "community": ["#089181", "#36B39F", "#95CFC3", "#C8E6DD"]
}

sota.setColors(colorsArray);

sota.setStyles("/fonts"); // for custom sotaConfig; for default options, don't pass any params (other than font path)

// GENERAL

sota.barChart({ selector: "#module-general-class-d3", dataFile: "data/general/class", totalResp: 1041, displayPercentage: true });

sota.pieChart({ selector: "#module-general-boarding-d3", dataFile: "data/general/boarding"});

sota.pieChart({ selector: "#module-general-from-d3", dataFile: "data/general/from"});

"module-general-community-d3" //pie

"module-general-parentsCollege-d3"  //stacked bar

"module-general-legacy-d3"  //

"module-general-sex-d3" //bar

"module-general-gender-d3"  //bar

"module-general-sexualOrientation-d3" //bar

"module-general-sexOr-gender-d3"  //grouped bar

"module-general-romantic-d3"  //bar

"module-general-race-d3"  //column

"module-general-ethnicity-d3" //bar

"module-general-religion-d3"  //bar

"module-general-learning-disability-d3" //pie

"module-general-temperament-d3" //pie or column

"module-general-varsity-d3" //pie

"module-general-income-d3"  // pie

"module-general-finAid-d3"  //column

"module-general-socioeconomic-income-d3"  // several pies

sota.stackedBarChart({ selector: "#module-general-legacy-income-d3", dataFile: "data/general/legacyXincome", labelStyle: "onBar", showLegend: true })

"module-general-varisty-income-d3"  //stacked bar

"module-general-incarcerated-d3"  //pie

// sota.pieChart({ selector: "#module-general-community-d3", dataFile: "data/community"});
//
// sota.lineGraph({ selector: "#module-discipline-time-d3", dataFile: "data/disc-time", inputIsPercentage: true, maxVal: 8 })
//
// sota.stackedBarChart({ selector: "#module-discipline-room-visits", dataFile: "data/room-visit-policy", groupLabelStyle: "onBar" })
//
// sota.stackedBarChart({ selector: "#module-general-parents-college", dataFile: "data/parents-college", labelStyle: "aboveBar", showLegend: false })
//
// sota.customBarChart({ selector: "#wellness-cloud-svg", dataFile: "data/happiness", shapeFile: "cloud" })
//
// sota.columnChart({ selector: "#wellness-support", dataFile: "data/support", totalResp: 1052 })
//
// sota.groupedBarChart({ selector: "#wellness-social-media", dataFile: "data/wellness-social-media", totalResp: {2022:214,2021:275,2020:271,2019:286} })
//
// sota.stackedColumnChart({ selector: "#module-politics-reverse-racism-gender", dataFile: "data/reverse-racism-gender", totalResp: 1032 })
