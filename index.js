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

sota.stackedBarChart({ selector: "#module-general-temperment-d3", dataFile: "data/general/temperment", totalResp: 1042, displayPercentage: true })

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
sota.pieChart({ selector: "#module-campus-student_council-d3", dataFile: "data/campus/student_council"});

sota.stackedBarChart({ selector: "#module-campus-aramark-d3", dataFile: "data/campus/aramark", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-campus-commons_staff-d3", dataFile: "data/campus/commons_staff"});

sota.stackedBarChart({ selector: "#module-campus-climate_change-d3", dataFile: "data/campus/climate_change", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-campus-fossil_fuel-d3", dataFile: "data/campus/fossil_fuel"});

sota.pieChart({ selector: "#module-campus-climate_curriculum-d3", dataFile: "data/campus/climate_curriculum"});

sota.pieChart({ selector: "#module-campus-cliamte_cafe_reasons-d3", dataFile: "data/campus/climate_cafe_reasons"});

sota.pieChart({ selector: "#module-campus-rape_culture-d3", dataFile: "data/campus/rape_culture"});

sota.pieChart({ selector: "#module-campus-bkh_valentines-d3", dataFile: "data/campus/bkh_valentines"});

sota.pieChart({ selector: "#module-campus-prom-d3", dataFile: "data/campus/prom"});

sota.stackedBarChart({ selector: "#module-campus-ideological_diversity-d3", dataFile: "data/campus/ideological_diversity", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-campus-mlk_day-d3", dataFile: "data/campus/mlk_day", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-campus-indigenous_people-d3", dataFile: "data/campus/indigenous_people", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-campus-land_acknowledgement-d3", dataFile: "data/campus/land_acknowledgement", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-campus-combined_dorms-d3", dataFile: "data/campus/combined_dorms"});

sota.pieChart({ selector: "#module-campus-food_order-d3", dataFile: "data/campus/food_order"});

sota.pieChart({ selector: "#module-campus-den_purchases-d3", dataFile: "data/campus/den_purchases"});

sota.stackedBarChart({ selector: "#module-campus-athletics-d3", dataFile: "data/campus/athletics", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-campus-shuman-d3", dataFile: "data/campus/shuman"});

sota.pieChart({ selector: "#module-campus-rape_culture-d3", dataFile: "data/campus/rape_culture", inputIsPercentage:true});

sota.stackedBarChart({ selector: "#module-campus-councilXattended-d3", dataFile: "data/campus/councilXattended", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-campus-fossil_fuelXincome-d3", dataFile: "data/campus/fossil_fuelXincome", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-campus-fossil_fuelXpolitics-d3", dataFile: "data/campus/fossil_fuelXpolitics", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-campus-rape_cultureXgender-d3", dataFile: "data/campus/rape_cultureXgender" })

sota.stackedBarChart({ selector: "#module-campus-promXclass-d3", dataFile: "data/campus/promXclass", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-campus-ideological_diversityXpolitics-d3", dataFile: "data/campus/ideological_diversityXpolitics" })

sota.stackedColumnChart({ selector: "#module-campus-mlk_dayXethnicity-d3", dataFile: "data/campus/mlk_dayXethnicity" })

sota.stackedBarChart({ selector: "#module-campus-land_acknowledgementXgender-d3", dataFile: "data/campus/land_acknowledgementXgender", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

// SCHOOL
sota.lineGraph({ selector: "#module-school-gpa-d3", dataFile: "data/school/gpa", maxVal: 160 })

// module-school-gpaXgender-d3 // two lines

// module-school-gpaXincome

sota.lineGraph({ selector: "#module-school-gpa2016-d3", dataFile: "data/school/gpa2016", maxVal: 6.0, minVal: 5.0 })

sota.pieChart({ selector: "#module-school-stem_humanities-d3", dataFile: "data/school/stem_humanities"});

sota.stackedBarChart({ selector: "#module-school-stem_humanitiesXgender-d3", dataFile: "data/school/stem_humanitiesXgender", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-school-hours_on_courseworkXgender-d3", dataFile: "data/school/school_old/hours_on_courseworkXgender" });

sota.pieChart({ selector: "#module-school-switch_teacher-d3", dataFile: "data/school/switch_teacher"});

sota.stackedBarChart({ selector: "#module-school-extracurriculars-d3", dataFile: "data/school/extracurriculars", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-school-leaving-d3", dataFile: "data/school/leaving", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-school-teacher_care-d3", dataFile: "data/school/teacher_care"});

sota.stackedBarChart({ selector: "#module-school-family_relationship-d3", dataFile: "data/school/family_relationship", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-school-character-d3", dataFile: "data/school/character"});

sota.stackedBarChart({ selector: "#module-school-characterXtemperment-d3", dataFile: "data/school/characterXtemperment", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-school-come_to_andover-d3", dataFile: "data/school/come_to_andover"});

sota.stackedBarChart({ selector: "#module-school-children-d3", dataFile: "data/school/children", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-school-childrenXclass-d3", dataFile: "data/school/childrenXclass", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-school-collegeXincome-d3", dataFile: "data/school/collegeXincome" });

sota.stackedColumnChart({ selector: "#module-school-collegeXclass-d3", dataFile: "data/school/collegeXclass" });

sota.stackedColumnChart({ selector: "#module-school-collegeXlocation-d3", dataFile: "data/school/collegeXlocation" });

sota.stackedBarChart({ selector: "#module-school-learning_disabilityXaccomodation-d3", dataFile: "data/school/learning_disabilityXaccomodation", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-school-study_spaces-d3", dataFile: "data/school/come_to_andover"});

sota.pieChart({ selector: "#module-school-student_leader-d3", dataFile: "data/school/student_leader"});

sota.pieChart({ selector: "#module-school-board_member-d3", dataFile: "data/school/board_member"});

sota.stackedColumnChart({ selector: "#module-school-student_leaderXtemperment-d3", dataFile: "data/school/student_leaderXtemperment" });

// DISCIPLINE
sota.barChart({ selector: "#module-discipline-understand_processes-d3", dataFile: "data/discipline/understand_processes", totalResp: 1022, displayPercentage: true });

sota.stackedBarChart({ selector: "#module-discipline-understand_processesXboarding-d3", dataFile: "data/discipline/understand_processesXboarding", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-discipline-CCCDC-d3", dataFile: "data/discipline/CCCDC"});

sota.columnChart({ selector: "#module-discipline-consequences-d3", dataFile: "data/discipline/consequences", totalResp: 1023 });

sota.stackedBarChart({ selector: "#module-discipline-effectiveXDC-d3", dataFile: "data/discipline/effectiveXDC", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-discipline-cruise-d3", dataFile: "data/discipline/cruise"});

sota.pieChart({ selector: "#module-discipline-cheated-d3", dataFile: "data/discipline/cheated"});

sota.stackedColumnChart({ selector: "#module-discipline-cheatedXclass-d3", dataFile: "data/discipline/cheatedXclass" });

sota.pieChart({ selector: "#module-discipline-plagiarized-d3", dataFile: "data/discipline/plagiarized"});

sota.pieChart({ selector: "#module-discipline-major_offenses-d3", dataFile: "data/discipline/major_offenses"});

sota.stackedBarChart({ selector: "#module-discipline-major_offensesXboarding-d3", dataFile: "data/discipline/major_offensesXboarding", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-discipline-contraband_search-d3", dataFile: "data/discipline/contraband_search"});

sota.stackedBarChart({ selector: "#module-discipline-favors_privileged-d3", dataFile: "data/discipline/favors_privileged", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-discipline-favors_privilegedXincome-d3", dataFile: "data/discipline/favors_privilegedXincome", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-discipline-favors_privilegedXclass-d3", dataFile: "data/discipline/favors_privilegedXclass", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-discipline-room_visit-d3", dataFile: "data/discipline/room_visit"});

sota.pieChart({ selector: "#module-discipline-parietal-d3", dataFile: "data/discipline/parietal"});

// SEX



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
