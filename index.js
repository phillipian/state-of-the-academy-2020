let colorsArray = {
    "general": ["#235085","#1065a1","#0b88c0","#22a7d3","#4ac2e5","#8dd1e9","#c6e6f3","#e3f4fb"],
    "politics": ["#2C3278", "#5D5797", "#7D78AD", "#948EB9", "#A8A3C6", "#BFBDD5", "#DFDBE7"],
    "campus": ["#762670", "#945E98", "#A77FAD", "#BC98B9", "#D9C6D8"],
    "school": ["#812F54", "#AA7281", "#BF97A0", "#BF97A0", "#DCC5C3"],
    "discipline": ["#B53432", "#C74F50", "D47173","#E4A8A6", "#F0D1CA"],
    "sex": ["#D5127D", "#DF5694", "#E680A9", "#ECA8C1", "#F8D3DD"],
    "drugs": ["#E77929", "#EFA05E", "#F3B572", "#F6CC99", "#FAE3C4"],
    "wellness": ["#69B645", "#98C970", "#B1D281", "#CEDFA6", "E3EFCE"],
    "covid": ["#088446", "#32A068", "#7CC193", "#B2DAB8", "E2F1E1"],
    "community": ["#279680", "#29AD97", "#78C4B1", "#AEDCCA", "#C8E7DD"]
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

sota.barChart({ selector: "#module-general-ethnicity-d3", dataFile: "data/general/ethnicity", totalResp: 1039, displayPercentage: true });

sota.barChart({ selector: "#module-general-religion-d3", dataFile: "data/general/religion", totalResp: 1038, displayPercentage: true });

sota.pieChart({ selector: "#module-general-learning-disability-d3", dataFile: "data/general/learning_disability"});

sota.stackedBarChart({ selector: "#module-general-temperament-d3", dataFile: "data/general/temperament", totalResp: 1042, displayPercentage: true })

sota.pieChart({ selector: "#module-general-varsity-d3", dataFile: "data/general/varsity"});

sota.pieChart({ selector: "#module-general-income-d3", dataFile: "data/general/income"});

sota.columnChart({ selector: "#module-general-finAid-d3", dataFile: "data/general/financial_aid", totalResp: 1037 });

sota.pieChart({ selector: "#module-general-socioeconomicXincome0-d3", dataFile: "data/general/socioeconomicXincome0"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome1-d3", dataFile: "data/general/socioeconomicXincome1"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome2-d3", dataFile: "data/general/socioeconomicXincome2"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome3-d3", dataFile: "data/general/socioeconomicXincome3"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome4-d3", dataFile: "data/general/socioeconomicXincome4"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome5-d3", dataFile: "data/general/socioeconomicXincome5"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome6-d3", dataFile: "data/general/socioeconomicXincome6"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome7-d3", dataFile: "data/general/socioeconomicXincome7"});

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

sota.stackedBarChart({ selector: "#module-politics-politicsXnews_sources-d3", dataFile: "data/politics/politics_old/news_sourcesXpolitics", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.columnChart({ selector: "#module-politics-top_5_news_sources-d3", dataFile: "data/politics/top_5_news_sources", totalResp: 1031 });

sota.stackedColumnChart({ selector: "#module-politics-affirmative_actionXclass-d3", dataFile: "data/politics/affirmative_actionXclass" })

sota.stackedColumnChart({ selector: "#module-politics-affirmative_actionXrace-d3", dataFile: "data/politics/affirmative_actionXrace" })

sota.stackedColumnChart({ selector: "#module-politics-reverse_racismXclass-d3", dataFile: "data/politics/reverse_racismXclass" })

sota.stackedBarChart({ selector: "#module-politics-womens_rightsXfeminist-d3", dataFile: "data/politics/womens_rightsXfeminist", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-politics-feministXgender-d3", dataFile: "data/politics/feministXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-politics-abortionXgender-d3", dataFile: "data/politics/abortionXgender" })

sota.stackedBarChart({ selector: "#module-politics-prison_reformXincarceration-d3", dataFile: "data/politics/prison_reformXincarceration", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-politics-firearmsXcommunity-d3", dataFile: "data/politics/firearmsXcommunity" })

// CAMPUS CULTURE


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
