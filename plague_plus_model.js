// All from CSSE, for Argentina on April 8
argentina_april_8_data = {
    attributed_deaths_so_far: 56
}

// note that it's assumed that all deaths caused by COVID-19 will indeed be attributed to COVID-19 
// this is clear from the model as described below,
// and is also explained on the "About" page of the model (https://docs.google.com/spreadsheets/d/1Rl3uhYkKfZiYiiRyJEl7R5Xay2HNT20R1X1j1nDCnd8/edit#gid=1365268056)
// "So, we are assuming that we have perfect information about the number of deaths."
plague_plus_prediction = () => eventual_attributed_deaths() * infections_per_death()

//     eventual_attributed_deaths = () => eventual_attributed_deaths_per_death_so_far() * attributed_deaths_so_far()

//     // deaths that will eventually be confirmed for people who are already infected
//     eventual_attributed_deaths_per_death_so_far = () => confirmed_case_growth_rate() ** days_from_infection_to_death()
// confirmed_case_growth_rate = () => argentina_april_8_data.confirmed_case_growth_rate
// days_from_infection_to_death = () => assumptions.days_from_infection_to_death
