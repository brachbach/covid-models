// the model is here: https://docs.google.com/spreadsheets/d/1Rl3uhYkKfZiYiiRyJEl7R5Xay2HNT20R1X1j1nDCnd8/edit#gid=1365268056
// the assumptions, data, and model are per the April 8 version, copy here: https://docs.google.com/spreadsheets/d/1sYLHA61Uvocxvq5os26u5luxMpo9QQcsZwe13_tU_FE/edit#gid=1365268056

// Assumptions are explained in the model sheet: https://docs.google.com/spreadsheets/d/1sYLHA61Uvocxvq5os26u5luxMpo9QQcsZwe13_tU_FE/edit#gid=371207754
assumptions = {
    // 0.015 is the average death rate from 'Assumptions'!C11 
    infections_per_death: 1/0.015,

    // 'Assumptions'!C10 
    days_from_infection_to_death: 21
}


// All from CSSE, for Argentina on April 8
argentina_april_8_data = {
    // 'Death Data (Github Import)'!CD8
    attributed_deaths_so_far: 63
}

// intermediate values to make testing this easier
intermediate_values = {
    // cumulative infection growth -- 'Cumulative Infection Growth'!CE8
    eventual_attributed_deaths_per_death_so_far: 3.223,
    argentina_daily_infection_growth_rate: [0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.23, 0.23, 0.22, 0.22, 0.22, 0.21, 0.21, 0.20, 0.20, 0.20, 0.20, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.08, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01]
}


// note that it's assumed that all deaths caused by COVID-19 will indeed be attributed to COVID-19 
// this is clear from the model as described below,
// and is also explained on the "About" page of the model (https://docs.google.com/spreadsheets/d/1Rl3uhYkKfZiYiiRyJEl7R5Xay2HNT20R1X1j1nDCnd8/edit#gid=1365268056)
// "So, we are assuming that we have perfect information about the number of deaths."
plague_plus_prediction = () => eventual_attributed_deaths() * infections_per_death()
    
    // deaths that will eventually be confirmed for people who are already infected
    eventual_attributed_deaths = () => eventual_attributed_deaths_per_death_so_far() * attributed_deaths_so_far()

        attributed_deaths_so_far = () => argentina_april_8_data.attributed_deaths_so_far

        eventual_attributed_deaths_per_death_so_far = () => {
            // according to the model, it takes 21 days to die; get the daily infection growth rates for the past 21 days
            infection_growth_rates_over_number_of_days_to_death = intermediate_values.argentina_daily_infection_growth_rate.slice(-1 * assumptions.days_from_infection_to_death)
            return infection_growth_rates_over_number_of_days_to_death.reduce((so_far, daily_growth_rate) => so_far * (1 + daily_growth_rate), 1)
        }
    
    infections_per_death = () => assumptions.infections_per_death

console.log(plague_plus_prediction())
// Should be 13,537 -- 'Estimated Cases'CE8


