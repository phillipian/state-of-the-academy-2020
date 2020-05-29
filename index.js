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

sota.pieChart({ selector: "#module-general-community-d3", dataFile: "data/general/community_type"});

sota.barChart({ selector: "#module-general-parentsCollege-d3", dataFile: "data/general/parents_college", totalResp: 1041, displayPercentage: true });

sota.pieChart({ selector: "#module-general-legacy-d3", dataFile: "data/general/andover_legacy"});

sota.barChart({ selector: "#module-general-sex-d3", dataFile: "data/general/sex", totalResp: 1041, displayPercentage: true });

sota.barChart({ selector: "#module-general-gender-d3", dataFile: "data/general/gender", totalResp: 1041, displayPercentage: true });

sota.barChart({ selector: "#module-general-sexualOrientation-d3", dataFile: "data/general/sexual_orientation", totalResp: 1041, displayPercentage: true });

sota.stackedBarChart({ selector: "#module-general-sexOr-gender-d3", dataFile: "data/general/sexual_orientationXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true })

sota.barChart({ selector: "#module-general-romantic-d3", dataFile: "data/general/romantic_orientation", totalResp: 1041, displayPercentage: true });

sota.columnChart({ selector: "#module-general-race-d3", dataFile: "data/general/race", totalResp: 1029 });

// tick frequency too high
sota.barChart({ selector: "#module-general-ethnicity-d3", dataFile: "data/general/ethnicity", totalResp: 1039, displayPercentage: true });

sota.barChart({ selector: "#module-general-religion-d3", dataFile: "data/general/religion", totalResp: 1038, displayPercentage: true });

sota.pieChart({ selector: "#module-general-learning-disability-d3", dataFile: "data/general/learning_disability"});

sota.stackedBarChart({ selector: "#module-general-temperament-d3", dataFile: "data/general/temperament", totalResp: 1042, displayPercentage: true })

sota.pieChart({ selector: "#module-general-varsity-d3", dataFile: "data/general/varsity"});

sota.pieChart({ selector: "#module-general-income-d3", dataFile: "data/general/income"});

// label goes off the page
sota.columnChart({ selector: "#module-general-finAid-d3", dataFile: "data/general/financial_aid", totalResp: 1037 });

// "module-general-socioeconomic-income-d3"  // several pies

sota.stackedBarChart({ selector: "#module-general-legacy-income-d3", dataFile: "data/general/legacyXincome", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true })

sota.stackedBarChart({ selector: "#module-general-varisty-income-d3", dataFile: "data/general/varsityXincome", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true })

sota.pieChart({ selector: "#module-general-incarcerated-d3", dataFile: "data/general/incarcerated"});

// POLITICS AND WORLDVIEW
sota.pieChart({ selector: "#module-politics-affiliation-d3", dataFile: "data/politics/political_affiliation"});

sota.barChart({ selector: "#module-politics-news_sources-d3", dataFile: "data/politics/news_sources", totalResp: 1032, displayPercentage: true });

sota.pieChart({ selector: "#module-politics-affirmative_action-d3", dataFile: "data/politics/affirmative_action"});

sota.stackedBarChart({ selector: "#module-politics-reverse_racism-d3", dataFile: "data/politics/reverse_racism", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-politics-blm-d3", dataFile: "data/politics/blm"});

sota.stackedBarChart({ selector: "#module-politics-womens_rights-d3", dataFile: "data/politics/womens_rights", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-politics-feminist-d3", dataFile: "data/politics/feminist", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-politics-climate_change-d3", dataFile: "data/politics/climate_change"});

sota.pieChart({ selector: "#module-politics-immigration-d3", dataFile: "data/politics/immigration"});

sota.pieChart({ selector: "#module-politics-border_security-d3", dataFile: "data/politics/border_security"});

sota.stackedBarChart({ selector: "#module-politics-abortion-d3", dataFile: "data/politics/abortion", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-politics-local_politics-d3", dataFile: "data/politics/local_politics"});

sota.stackedBarChart({ selector: "#module-politics-censorshipXpolitics-d3", dataFile: "data/politics/censorshipXpolitics", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-politics-politicsXgender-d3", dataFile: "data/politics/politicsXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-politics-politicsXleadership-d3", dataFile: "data/politics/politicsXleadership", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.pieChart({ selector: "#module-politics-informed-d3", dataFile: "data/politics/informed"});

sota.groupedBarChart({ selector: "#module-politics-news_sourcesXpolitics-d3", dataFile: "data/politics/politics_old/news_sourcesXpolitics", totalResp: {"BBC":335,"Buzzfeed":214,"CNN":620,"Daily Mail":214,"Fox News":222,"NPR":272,"The Boston Globe":214,"The Chicago Tribune":48,"The Los Angeles Times":82,"The New York Times":809,"The Wall Street Journal":379,"The Washington Post":450,"Not applicable (I don't read the news)":96,"Other":107} });

module-politics-news_sourcesXpolitics-d3

module-politics-news_sources-d3

module-politics-affirmative_actionXclass-d3

module-politics-affirmative_actionXrace-d3

module-politics-reverse_racismXclass-d3

module-politics-womens_rightsXfeminist-d3

module-politics-feministXgender-d3

module-politics-abortionXgender-d3

module-politics-prison_reformXincarceration-d3

module-politics-firearmXcommunity-d3

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
