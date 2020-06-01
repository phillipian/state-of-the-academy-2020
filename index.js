let colorsArray = {
    "general": ["#235085","#1065a1","#0b88c0","#22a7d3","#4ac2e5","#8dd1e9","#c6e6f3","#e3f4fb"],
    "politics": ["#2C3278", "#5D5797", "#7D78AD", "#948EB9", "#A8A3C6", "#BFBDD5", "#DFDBE7"],
    "campus": ["#762670", "#945E98", "#A77FAD", "#BC98B9", "#D9C6D8"],
    "school": ["#812F54", "#AA7281", "#BF97A0", "#BF97A0", "#DCC5C3"],
    "discipline": ["#B53432", "#C74F50", "#D47173","#E4A8A6", "#F0D1CA"],
    "sex": ["#D5127D", "#DF5694", "#E680A9", "#ECA8C1", "#F8D3DD"],
    "drugs": ["#E77929", "#EFA05E", "#F3B572", "#F6CC99", "#FAE3C4"],
    "wellness": ["#69B645", "#98C970", "#B1D281", "#CEDFA6", "#E3EFCE"],
    "covid": ["#088446", "#32A068", "#7CC193", "#B2DAB8", "#E2F1E1"],
    "community": ["#279680", "#29AD97", "#78C4B1", "#AEDCCA", "#C8E7DD"]
}

sota.setColors(colorsArray);

sota.setStyles("/assets/fonts"); // for custom sotaConfig; for default options, don't pass any params (other than font path)

// GENERAL
sota.barChart({ selector: "#module-general-class-d3", dataFile: "assets/data/general/class", totalResp: 1041, displayPercentage: true });

sota.pieChart({ selector: "#module-general-boarding-d3", dataFile: "assets/data/general/boarding"});

sota.pieChart({ selector: "#module-general-from-d3", dataFile: "assets/data/general/from"});

sota.pieChart({ selector: "#module-general-community-d3", dataFile: "assets/data/general/community_type"});

sota.barChart({ selector: "#module-general-parentsCollege-d3", dataFile: "assets/data/general/parents_college", totalResp: 1041, displayPercentage: true });

sota.pieChart({ selector: "#module-general-legacy-d3", dataFile: "assets/data/general/andover_legacy"});

sota.barChart({ selector: "#module-general-sex-d3", dataFile: "assets/data/general/sex", totalResp: 1041, displayPercentage: true });

sota.barChart({ selector: "#module-general-gender-d3", dataFile: "assets/data/general/gender", totalResp: 1041, displayPercentage: true });

sota.barChart({ selector: "#module-general-sexualOrientation-d3", dataFile: "assets/data/general/sexual_orientation", totalResp: 1041, displayPercentage: true });

sota.stackedBarChart({ selector: "#module-general-sexOr-gender-d3", dataFile: "assets/data/general/sexual_orientationXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true })

sota.barChart({ selector: "#module-general-romantic-d3", dataFile: "assets/data/general/romantic_orientation", totalResp: 1041, displayPercentage: true });

sota.columnChart({ selector: "#module-general-race-d3", dataFile: "assets/data/general/race", totalResp: 1029 });

sota.barChart({ selector: "#module-general-ethnicity-d3", dataFile: "assets/data/general/ethnicity", totalResp: 1039, displayPercentage: true });

sota.barChart({ selector: "#module-general-religion-d3", dataFile: "assets/data/general/religion", totalResp: 1038, displayPercentage: true });

sota.pieChart({ selector: "#module-general-learning-disability-d3", dataFile: "assets/data/general/learning_disability"});

sota.stackedBarChart({ selector: "#module-general-temperament-d3", dataFile: "assets/data/general/temperament", totalResp: 1042, displayPercentage: true })

sota.pieChart({ selector: "#module-general-varsity-d3", dataFile: "assets/data/general/varsity"});

sota.pieChart({ selector: "#module-general-income-d3", dataFile: "assets/data/general/income"});

sota.columnChart({ selector: "#module-general-finAid-d3", dataFile: "assets/data/general/financial_aid", totalResp: 1037 });

sota.pieChart({ selector: "#module-general-socioeconomicXincome0-d3", dataFile: "assets/data/general/socioeconomicXincome0"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome1-d3", dataFile: "assets/data/general/socioeconomicXincome1"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome2-d3", dataFile: "assets/data/general/socioeconomicXincome2"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome3-d3", dataFile: "assets/data/general/socioeconomicXincome3"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome4-d3", dataFile: "assets/data/general/socioeconomicXincome4"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome5-d3", dataFile: "assets/data/general/socioeconomicXincome5"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome6-d3", dataFile: "assets/data/general/socioeconomicXincome6"});

sota.pieChart({ selector: "#module-general-socioeconomicXincome7-d3", dataFile: "assets/data/general/socioeconomicXincome7"});

sota.stackedBarChart({ selector: "#module-general-legacy-income-d3", dataFile: "assets/data/general/legacyXincome", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true })

sota.stackedBarChart({ selector: "#module-general-varisty-income-d3", dataFile: "assets/data/general/varsityXincome", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true })

sota.pieChart({ selector: "#module-general-incarcerated-d3", dataFile: "assets/data/general/incarcerated"});

// POLITICS AND WORLDVIEW
sota.pieChart({ selector: "#module-politics-affiliation-d3", dataFile: "assets/data/politics/political_affiliation"});

sota.barChart({ selector: "#module-politics-news_sources-d3", dataFile: "assets/data/politics/news_sources", totalResp: 1032, displayPercentage: true });

sota.pieChart({ selector: "#module-politics-affirmative_action-d3", dataFile: "assets/data/politics/affirmative_action"});

sota.stackedBarChart({ selector: "#module-politics-reverse_racism-d3", dataFile: "assets/data/politics/reverse_racism", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-politics-blm-d3", dataFile: "assets/data/politics/blm"});

sota.stackedBarChart({ selector: "#module-politics-womens_rights-d3", dataFile: "assets/data/politics/womens_rights", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-politics-feminist-d3", dataFile: "assets/data/politics/feminist", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-politics-climate_change-d3", dataFile: "assets/data/politics/climate_change"});

sota.pieChart({ selector: "#module-politics-immigration-d3", dataFile: "assets/data/politics/immigration"});

sota.pieChart({ selector: "#module-politics-border_security-d3", dataFile: "assets/data/politics/border_security"});

sota.stackedBarChart({ selector: "#module-politics-abortion-d3", dataFile: "assets/data/politics/abortion", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-politics-local_politics-d3", dataFile: "assets/data/politics/local_politics"});

sota.stackedBarChart({ selector: "#module-politics-censorshipXpolitics-d3", dataFile: "assets/data/politics/censorshipXpolitics", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-politics-politicsXgender-d3", dataFile: "assets/data/politics/politicsXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-politics-politicsXleadership-d3", dataFile: "assets/data/politics/politicsXleadership", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.pieChart({ selector: "#module-politics-informed-d3", dataFile: "assets/data/politics/informed"});

sota.stackedBarChart({ selector: "#module-politics-politicsXnews_sources-d3", dataFile: "assets/data/politics/politics_old/news_sourcesXpolitics", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.columnChart({ selector: "#module-politics-top_5_news_sources-d3", dataFile: "assets/data/politics/top_5_news_sources", totalResp: 1031 });

sota.stackedColumnChart({ selector: "#module-politics-affirmative_actionXclass-d3", dataFile: "assets/data/politics/affirmative_actionXclass" })

sota.stackedColumnChart({ selector: "#module-politics-affirmative_actionXrace-d3", dataFile: "assets/data/politics/affirmative_actionXrace" })

sota.stackedColumnChart({ selector: "#module-politics-reverse_racismXclass-d3", dataFile: "assets/data/politics/reverse_racismXclass" })

sota.stackedBarChart({ selector: "#module-politics-womens_rightsXfeminist-d3", dataFile: "assets/data/politics/womens_rightsXfeminist", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-politics-feministXgender-d3", dataFile: "assets/data/politics/feministXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-politics-abortionXgender-d3", dataFile: "assets/data/politics/abortionXgender" })

sota.stackedBarChart({ selector: "#module-politics-prison_reformXincarceration-d3", dataFile: "assets/data/politics/prison_reformXincarceration", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-politics-firearmsXcommunity-d3", dataFile: "assets/data/politics/firearmsXcommunity" })

// CAMPUS CULTURE
sota.pieChart({ selector: "#module-campus-student_council-d3", dataFile: "assets/data/campus/student_council"});

sota.stackedBarChart({ selector: "#module-campus-aramark-d3", dataFile: "assets/data/campus/aramark", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-campus-commons_staff-d3", dataFile: "assets/data/campus/commons_staff"});

sota.stackedBarChart({ selector: "#module-campus-climate_change-d3", dataFile: "assets/data/campus/climate_change", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-campus-fossil_fuel-d3", dataFile: "assets/data/campus/fossil_fuel"});

sota.pieChart({ selector: "#module-campus-climate_curriculum-d3", dataFile: "assets/data/campus/climate_curriculum"});

sota.pieChart({ selector: "#module-campus-cliamte_cafe_reasons-d3", dataFile: "assets/data/campus/climate_cafe_reasons"});

sota.pieChart({ selector: "#module-campus-rape_culture-d3", dataFile: "assets/data/campus/rape_culture"});

sota.pieChart({ selector: "#module-campus-bkh_valentines-d3", dataFile: "assets/data/campus/bkh_valentines"});

sota.pieChart({ selector: "#module-campus-prom-d3", dataFile: "assets/data/campus/prom"});

sota.stackedBarChart({ selector: "#module-campus-ideological_diversity-d3", dataFile: "assets/data/campus/ideological_diversity", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-campus-mlk_day-d3", dataFile: "assets/data/campus/mlk_day", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-campus-indigenous_people-d3", dataFile: "assets/data/campus/indigenous_people", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-campus-land_acknowledgement-d3", dataFile: "assets/data/campus/land_acknowledgement", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-campus-combined_dorms-d3", dataFile: "assets/data/campus/combined_dorms"});

sota.pieChart({ selector: "#module-campus-food_order-d3", dataFile: "assets/data/campus/food_order"});

sota.pieChart({ selector: "#module-campus-den_purchases-d3", dataFile: "assets/data/campus/den_purchases"});

sota.stackedBarChart({ selector: "#module-campus-athletics-d3", dataFile: "assets/data/campus/athletics", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-campus-shuman-d3", dataFile: "assets/data/campus/shuman"});

sota.pieChart({ selector: "#module-campus-rape_culture-d3", dataFile: "assets/data/campus/rape_culture", inputIsPercentage: true});

sota.stackedBarChart({ selector: "#module-campus-councilXattended-d3", dataFile: "assets/data/campus/councilXattended", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-campus-fossil_fuelXincome-d3", dataFile: "assets/data/campus/fossil_fuelXincome", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-campus-fossil_fuelXpolitics-d3", dataFile: "assets/data/campus/fossil_fuelXpolitics", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-campus-rape_cultureXgender-d3", dataFile: "assets/data/campus/rape_cultureXgender" })

sota.stackedBarChart({ selector: "#module-campus-promXclass-d3", dataFile: "assets/data/campus/promXclass", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-campus-ideological_diversityXpolitics-d3", dataFile: "assets/data/campus/ideological_diversityXpolitics" })

sota.stackedColumnChart({ selector: "#module-campus-mlk_dayXethnicity-d3", dataFile: "assets/data/campus/mlk_dayXethnicity" })

sota.stackedBarChart({ selector: "#module-campus-land_acknowledgementXgender-d3", dataFile: "assets/data/campus/land_acknowledgementXgender", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

// SCHOOL
sota.lineGraph({ selector: "#module-school-gpa-d3", dataFile: "assets/data/school/gpa", maxVal: 160 })

// module-school-gpaXgender-d3 // two lines

// module-school-gpaXincome

sota.lineGraph({ selector: "#module-school-gpa2016-d3", dataFile: "assets/data/school/gpa2016", maxVal: 6.0, minVal: 5.0 })

sota.pieChart({ selector: "#module-school-stem_humanities-d3", dataFile: "assets/data/school/stem_humanities"});

sota.stackedBarChart({ selector: "#module-school-stem_humanitiesXgender-d3", dataFile: "assets/data/school/stem_humanitiesXgender", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-school-hours_on_courseworkXgender-d3", dataFile: "assets/data/school/school_old/hours_on_courseworkXgender" });

sota.pieChart({ selector: "#module-school-switch_teacher-d3", dataFile: "assets/data/school/switch_teacher"});

sota.stackedBarChart({ selector: "#module-school-extracurriculars-d3", dataFile: "assets/data/school/extracurriculars", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-school-leaving-d3", dataFile: "assets/data/school/leaving", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-school-teacher_care-d3", dataFile: "assets/data/school/teacher_care"});

sota.stackedBarChart({ selector: "#module-school-family_relationship-d3", dataFile: "assets/data/school/family_relationship", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-school-character-d3", dataFile: "assets/data/school/character"});

sota.stackedBarChart({ selector: "#module-school-characterXtemperament-d3", dataFile: "assets/data/school/characterXtemperament", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-school-come_to_andover-d3", dataFile: "assets/data/school/come_to_andover"});

sota.stackedBarChart({ selector: "#module-school-children-d3", dataFile: "assets/data/school/children", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-school-childrenXclass-d3", dataFile: "assets/data/school/childrenXclass", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-school-collegeXincome-d3", dataFile: "assets/data/school/collegeXincome" });

sota.stackedColumnChart({ selector: "#module-school-collegeXclass-d3", dataFile: "assets/data/school/collegeXclass" });

sota.stackedColumnChart({ selector: "#module-school-collegeXlocation-d3", dataFile: "assets/data/school/collegeXlocation" });

sota.stackedBarChart({ selector: "#module-school-learning_disabilityXaccomodation-d3", dataFile: "assets/data/school/learning_disabilityXaccomodation", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-school-study_spaces-d3", dataFile: "assets/data/school/come_to_andover"});

sota.pieChart({ selector: "#module-school-student_leader-d3", dataFile: "assets/data/school/student_leader"});

sota.pieChart({ selector: "#module-school-board_member-d3", dataFile: "assets/data/school/board_member"});

sota.stackedColumnChart({ selector: "#module-school-student_leaderXtemperament-d3", dataFile: "assets/data/school/student_leaderXtemperament" });

// DISCIPLINE
sota.barChart({ selector: "#module-discipline-understand_processes-d3", dataFile: "assets/data/discipline/understand_processes", totalResp: 1022, displayPercentage: true });

sota.stackedBarChart({ selector: "#module-discipline-understand_processesXboarding-d3", dataFile: "assets/data/discipline/understand_processesXboarding", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-discipline-CCCDC-d3", dataFile: "assets/data/discipline/CCCDC"});

sota.columnChart({ selector: "#module-discipline-consequences-d3", dataFile: "assets/data/discipline/consequences", totalResp: 1023 });

sota.stackedBarChart({ selector: "#module-discipline-effectiveXDC-d3", dataFile: "assets/data/discipline/effectiveXDC", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-discipline-cruise-d3", dataFile: "assets/data/discipline/cruise"});

sota.pieChart({ selector: "#module-discipline-cheated-d3", dataFile: "assets/data/discipline/cheated"});

sota.stackedColumnChart({ selector: "#module-discipline-cheatedXclass-d3", dataFile: "assets/data/discipline/cheatedXclass" });

sota.pieChart({ selector: "#module-discipline-plagiarized-d3", dataFile: "assets/data/discipline/plagiarized"});

sota.pieChart({ selector: "#module-discipline-major_offenses-d3", dataFile: "assets/data/discipline/major_offenses"});

sota.stackedBarChart({ selector: "#module-discipline-major_offensesXboarding-d3", dataFile: "assets/data/discipline/major_offensesXboarding", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-discipline-contraband_search-d3", dataFile: "assets/data/discipline/contraband_search"});

sota.stackedBarChart({ selector: "#module-discipline-favors_privileged-d3", dataFile: "assets/data/discipline/favors_privileged", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-discipline-favors_privilegedXincome-d3", dataFile: "assets/data/discipline/favors_privilegedXincome", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-discipline-favors_privilegedXclass-d3", dataFile: "assets/data/discipline/favors_privilegedXclass", labelStyle: "onBar", groupLabelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-discipline-room_visit-d3", dataFile: "assets/data/discipline/room_visit"});

sota.pieChart({ selector: "#module-discipline-parietal-d3", dataFile: "assets/data/discipline/parietal"});

// SEX
sota.groupedBarChart({ selector: "#module-sex-sexXclass-d3", dataFile: "assets/data/sex/sexXclass", totalResp: {2023:216,2022:271,2021:271,2020:267} })

sota.stackedBarChart({ selector: "#module-sex-frequency-d3", dataFile: "assets/data/sex/frequency", labelStyle: "onBar", showLegend: true });

sota.barChart({ selector: "#module-sex-number_of_partners-d3", dataFile: "assets/data/sex/number_of_partners", totalResp: 1022, displayPercentage: true });

sota.pieChart({ selector: "#module-sex-hookup_culture-d3", dataFile: "assets/data/sex/hookup_culture"});

sota.stackedBarChart({ selector: "#module-sex-hookup_cultureXclass-d3", dataFile: "assets/data/sex/hookup_cultureXclass", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.pieChart({ selector: "#module-sex-peer_pressure-d3", dataFile: "assets/data/sex/peer_pressure"});

sota.stackedBarChart({ selector: "#module-sex-partner_pressure-d3", dataFile: "assets/data/sex/hookup_cultureXclass", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-sex-partner_pressureXgender-d3", dataFile: "assets/data/sex/hookup_cultureXclass", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-sex-verbal_consent-d3", dataFile: "assets/data/sex/verbal_consent", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-sex-protection-d3", dataFile: "assets/data/sex/protection"});

sota.pieChart({ selector: "#module-sex-hookup-d3", dataFile: "assets/data/sex/hookup"});

sota.stackedBarChart({ selector: "#module-sex-relationshipXclass-d3", dataFile: "assets/data/sex/relationshipXclass", labelStyle: "onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-sex-relationship_classXclass-d3", dataFile: "assets/data/sex/relationship_classXclass" });

sota.lineGraph({ selector: "#module-sex-sex_ed2015-d3", dataFile: "assets/data/sex/sex_ed2015", inputIsPercentage: true })

sota.stackedBarChart({ selector: "#module-sex-masturbationXgender-d3", dataFile: "assets/data/sex/masturbationXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-sex-masturbation_tellXgender-d3", dataFile: "assets/data/sex/masturbation_tellXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-sex-pornXfeminist-d3", dataFile: "assets/data/sex/pornXfeminist", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.columnChart({ selector: "#module-sex-harassment-d3", dataFile: "assets/data/sex/harassment", totalResp: 1031 });

sota.stackedBarChart({ selector: "#module-sex-harassmentXgender-d3", dataFile: "assets/data/sex/harassmentXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

// inputIsPercentage error
sota.columnChart({ selector: "#module-sex-assault-d3", dataFile: "assets/data/sex/assault", inputIsPercentage:true });

sota.stackedBarChart({ selector: "#module-sex-assaultXgender-d3", dataFile: "assets/data/sex/assaultXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.pieChart({ selector: "#module-sex-explicit_photo-d3", dataFile: "assets/data/sex/explicit_photo"});

// DRUGS AND ALCOHOL
sota.stackedBarChart({ selector: "#module-drugs-alcoholXclass-d3", dataFile: "assets/data/drugs-alcohol/alcoholXclass", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-drugs-tobaccoXclass-d3", dataFile: "assets/data/drugs-alcohol/tobaccoXclass", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-drugs-juulXclass-d3", dataFile: "assets/data/drugs-alcohol/juulXclass", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-drugs-marijuanaXclass-d3", dataFile: "assets/data/drugs-alcohol/marijuanaXclass", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-drugs-dorm_influenceXcluster-d3", dataFile: "assets/data/drugs-alcohol/dorm_influenceXcluster" });

sota.stackedBarChart({ selector: "#module-drugs-drug_frequency-d3", dataFile: "assets/data/drugs-alcohol/drug_frequency", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-drugs-study_drugs-d3", dataFile: "assets/data/drugs-alcohol/study_drugs"});

sota.stackedBarChart({ selector: "#module-drugs-juulXincome-d3", dataFile: "assets/data/drugs-alcohol/juulXincome", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-drugs-normalizedXconsumption-d3", dataFile: "assets/data/drugs-alcohol/normalizedXconsumption" });

// placeholder

sota.pieChart({ selector: "#module-drugs-normalized-d3", dataFile: "assets/data/drugs-alcohol/normalized"});

sota.barChart({ selector: "#module-drugs-hard_drugs-d3", dataFile: "assets/data/drugs-alcohol/hard_drugs", totalResp: 1014, displayPercentage: true });

sota.stackedBarChart({ selector: "#module-drugs-drugs_stress-d3", dataFile: "assets/data/drugs-alcohol/drugs_stress", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-drugs-peer_pressure-d3", dataFile: "assets/data/drugs-alcohol/peer_pressure", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-drugs-selling-d3", dataFile: "assets/data/drugs-alcohol/selling"});

sota.pieChart({ selector: "#module-drugs-influence-d3", dataFile: "assets/data/drugs-alcohol/influence"});

sota.stackedBarChart({ selector: "#module-drugs-fake_id-d3", dataFile: "assets/data/drugs-alcohol/fake_id", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-drugs-sanctuary-d3", dataFile: "assets/data/drugs-alcohol/sanctuary", labelStyle: "onBar", showLegend: true });

// WELLNESS
sota.columnChart({ selector: "#module-wellness-sleep-d3", dataFile: "assets/data/wellness/sleep" });

sota.barChart({ selector: "#module-wellness-had-d3", dataFile: "assets/data/wellness/had", totalResp: 1034, displayPercentage: true });

sota.stackedBarChart({ selector: "#module-wellness-anxietyXgender-d3", dataFile: "assets/data/wellness/anxietyXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-wellness-insecureXsocial_media-d3", dataFile: "assets/data/wellness/insecureXsocial_media" });

sota.stackedBarChart({ selector: "#module-wellness-insecureXgender-d3", dataFile: "assets/data/wellness/insecureXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.pieChart({ selector: "#module-wellness-insecure_body-d3", dataFile: "assets/data/wellness/insecure_body"});

sota.pieChart({ selector: "#module-wellness-insecure_academic-d3", dataFile: "assets/data/wellness/insecure_academic"});

sota.pieChart({ selector: "#module-wellness-sykes-d3", dataFile: "assets/data/wellness/sykes" });

sota.pieChart({ selector: "#module-wellness-sykes_resources-d3", dataFile: "assets/data/wellness/sykes_resources" });

sota.stackedBarChart({ selector: "#module-wellness-counselorXgender-d3", dataFile: "assets/data/wellness/counselorXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-wellness-sykes_resourcesXcounselor-d3", dataFile: "assets/data/wellness/sykes_resourcesXcounselor", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.pieChart({ selector: "#module-wellness-sykes_phy_resources-d3", dataFile: "assets/data/wellness/sykes_phy_resources" });

sota.pieChart({ selector: "#module-wellness-happiness-d3", dataFile: "assets/data/wellness/happiness" });

sota.pieChart({ selector: "#module-wellness-general_happiness-d3", dataFile: "assets/data/wellness/happiness" });

sota.barChart({ selector: "#module-wellness-support_system-d3", dataFile: "assets/data/wellness/support_system", totalResp: 1035, displayPercentage: true });

sota.pieChart({ selector: "#module-wellness-support_system_adequacy-d3", dataFile: "assets/data/wellness/support_system_adequacy" });

sota.stackedBarChart({ selector: "#module-wellness-social_media_effect-d3", dataFile: "assets/data/wellness/social_media_effect", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-wellness-skip_meals-d3", dataFile: "assets/data/wellness/skip_meals" });

sota.stackedBarChart({ selector: "#module-wellness-happinessXretrospect-d3", dataFile: "assets/data/wellness/happinessXretrospect", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-wellness-happinessXclass-d3", dataFile: "assets/data/wellness/happinessXclass" });

sota.stackedColumnChart({ selector: "#module-wellness-happinessXtemperament-d3", dataFile: "assets/data/wellness/happinessXtemperament" });

sota.pieChart({ selector: "#module-wellness-bullied-d3", dataFile: "assets/data/wellness/bullied" });

sota.barChart({ selector: "#module-wellness-social_media-d3", dataFile: "assets/data/wellness/social_media", totalResp: 1034, displayPercentage: true });

sota.stackedBarChart({ selector: "#module-wellness-social_mediaXgender-d3", dataFile: "assets/data/wellness/social_mediaXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-wellness-commons_limitXdietary_restrictions-d3", dataFile: "assets/data/wellness/commons_limitXdietary_restrictions", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

// COVID-19
sota.pieChart({ selector: "#module-covid-currently_residing-d3", dataFile: "assets/data/covid/currently_residing" });

sota.columnChart({ selector: "#module-covid-staying_with-d3", dataFile: "assets/data/covid/staying_with" });

sota.pieChart({ selector: "#module-covid-quiet_spaces-d3", dataFile: "assets/data/covid/quiet_spaces" });

sota.stackedBarChart({ selector: "#module-covid-quiet_spacesXincome-d3", dataFile: "assets/data/covid/quiet_spacesXincome", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.barChart({ selector: "#module-covid-time_zones-d3", dataFile: "assets/data/covid/time_zones", totalResp: 1023, displayPercentage: true });

sota.stackedBarChart({ selector: "#module-covid-remote_learning-d3", dataFile: "assets/data/covid/remote_learning", labelStyle: "onBar", showLegend: true });

sota.pieChart({ selector: "#module-covid-immunocompromised-d3", dataFile: "assets/data/covid/immunocompromised" });

sota.pieChart({ selector: "#module-covid-test_positive-d3", dataFile: "assets/data/covid/test_positive" });

sota.stackedBarChart({ selector: "#module-covid-andover_response-d3", dataFile: "assets/data/covid/andover_response", labelStyle: "onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-covid-us_responseXpolitics-d3", dataFile: "assets/data/covid/us_responseXpolitics", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.pieChart({ selector: "#module-covid-social_distance-d3", dataFile: "assets/data/covid/social_distance" });

sota.stackedBarChart({ selector: "#module-covid-vacationXincome-d3", dataFile: "assets/data/covid/vacationXincome", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

// COMMUNITY
sota.barChart({ selector: "#module-community-faculty_diversity-d3", dataFile: "assets/data/community/faculty_diversity", totalResp: 1020, displayPercentage: true });

sota.pieChart({ selector: "#module-community-faculty_support-d3", dataFile: "assets/data/community/faculty_support" });

sota.barChart({ selector: "#module-community-social_divide-d3", dataFile: "assets/data/community/social_divide", totalResp: 1019, displayPercentage: true });

sota.barChart({ selector: "#module-community-leadership-d3", dataFile: "assets/data/community/leadership", totalResp: 1015, displayPercentage: true });

sota.barChart({ selector: "#module-community-discrimination-d3", dataFile: "assets/data/community/discrimination", totalResp: 1015, displayPercentage: true });

sota.barChart({ selector: "#module-community-classroom_comfort-d3", dataFile: "assets/data/community/classroom_comfort", totalResp: 1016, displayPercentage: true });

sota.barChart({ selector: "#module-community-identity_discussion-d3", dataFile: "assets/data/community/identity_discussion", totalResp: 1016, displayPercentage: true });

sota.pieChart({ selector: "#module-community-day_student-d3", dataFile: "assets/data/community/day_student" });

sota.stackedBarChart({ selector: "#module-community-faculty_diversityXrace-d3", dataFile: "assets/data/community/faculty_diversityXrace", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-community-faculty_diversityXgender-d3", dataFile: "assets/data/community/faculty_diversityXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-community-faculty_supportXgender-d3", dataFile: "assets/data/community/faculty_supportXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-community-social_divideXrace-d3", dataFile: "assets/data/community/social_divideXrace", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-community-social_divideXstatus-d3", dataFile: "assets/data/community/social_divideXstatus", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-community-social_divideXpolitics-d3", dataFile: "assets/data/community/social_divideXpolitics", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-community-social_divideXclass-d3", dataFile: "assets/data/community/social_divideXclass", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-community-leadershipXgender-d3", dataFile: "assets/data/community/leadershipXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-community-leadershipXrace-d3", dataFile: "assets/data/community/leadershipXrace", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-community-leadershipXstatus-d3", dataFile: "assets/data/community/leadershipXstatus", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-community-classroom_comfortXgender-d3", dataFile: "assets/data/community/classroom_comfortXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-community-classroom_comfortXethnicity-d3", dataFile: "assets/data/community/classroom_comfortXethnicity", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

// sota.pieChart({ selector: "#module-community-ebi-d3", dataFile: "assets/data/community/ebi", inputIsPercentage: true });

sota.stackedBarChart({ selector: "#module-community-ebiXclass-d3", dataFile: "assets/data/community/ebiXclass", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedColumnChart({ selector: "#module-community-day_supportXboarding-d3", dataFile: "assets/data/day_supportXboarding" });

sota.stackedBarChart({ selector: "#module-community-fitness_centerXgender-d3", dataFile: "assets/data/community/fitness_centerXgender", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

sota.stackedBarChart({ selector: "#module-community-fitness_centerXvarsity-d3", dataFile: "assets/data/community/fitness_centerXvarsity", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });

// sota.stackedBarChart({ selector: "#module-community-camdXrace-d3", dataFile: "assets/data/community/camdXrace", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true, inputIsPercentage: true });
//
// sota.stackedBarChart({ selector: "#module-community-camdXpolitics-d3", dataFile: "assets/data/community/camdXpolitics", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true, inputIsPercentage: true });
//
// sota.stackedBarChart({ selector: "#module-community-silentXrace-d3", dataFile: "assets/data/community/silentXrace", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true, inputIsPercentage: true });
//
// sota.stackedBarChart({ selector: "#module-community-lower_rightXrace-d3", dataFile: "assets/data/community/lower_rightXrace", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true, inputIsPercentage: true });
//
// sota.stackedBarChart({ selector: "#module-community-lower_rightXvarsity-d3", dataFile: "assets/data/community/lower_rightXvarsity", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true, inputIsPercentage: true });

sota.pieChart({ selector: "#module-community-language-d3", dataFile: "assets/data/community/language" });

sota.stackedBarChart({ selector: "#module-community-languageXrace-d3", dataFile: "assets/data/community/languageXrace", labelStyle: "onBar", groupLabelStyle:"onBar", showLegend: true });
