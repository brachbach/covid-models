// the model is here: https://docs.google.com/spreadsheets/d/1Rl3uhYkKfZiYiiRyJEl7R5Xay2HNT20R1X1j1nDCnd8/edit#gid=1365268056
// the assumptions, data, and model are per the April 8 version, copy here: https://docs.google.com/spreadsheets/d/1sYLHA61Uvocxvq5os26u5luxMpo9QQcsZwe13_tU_FE/edit#gid=1365268056

// Assumptions are explained in the model sheet: https://docs.google.com/spreadsheets/d/1sYLHA61Uvocxvq5os26u5luxMpo9QQcsZwe13_tU_FE/edit#gid=371207754
assumptions = {
    // 0.015 is the average death rate from 'Assumptions'!C11 
    // Note from model: "We had been estimating 1%, but Korea's recent rise (presumably due to people not having had time to die) indicates that number may not be conservative. (In this model, the lower the death rate assumption, the higher the number of estimated cases.) Based on Diamond Princess rates at about 1% and SK at 1.6% (but likely not having detected 100% of cases) I still think overall rate is likely beloe 1%, but I'm bumping this up to maintain conservatism."
    infections_per_death: 1/0.015,

    // 'Assumptions'!C10
    // Note from model: "Naively it looks like this may need to be 23 days, but a more careful examination is needed before bumping it up further."
    days_from_infection_to_death: 21,
    infection_growth: {
        // 'Assumptions'!C6
        // Note from model: "Death growth rates are probably higher than infection growth rates currently due to deaths speeding up as hopspitals are overwhelmed"
        uncontrolled_and_unaware: 0.24,

        // 'Assumptions'!C7
        // Note from model: "After a while people got more awareness and transmission rates probably went down."
        uncontrolled_and_aware: 0.20,

        // 'Assumptions'!C26
        // Note from model: "For now, just using the numbers China seemed to achieve in the first 14 days after intervention"
        // My note: this is based on the growth rate of deaths of Chinese people who got infected during days 1-14 of their intervention
        intervention_day_1_to_14: 0.075,

        // 'Assumptions'!C27
        // My note: this is based on the growth rate of deaths of Chinese people who got infected during days 15+ after their lockdown
        intervention_day_15_plus: 0.068514
    }
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

    // 'Infection Growth Rates'
    // I'm not sure what "infection growth" means here. It's definitely not just growth in confirmed cases
    // I'd think it's a guess at growth in number of people infected so far
    argentina_daily_infection_growth_rate: [assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware, assumptions.infection_growth.uncontrolled_and_unaware - 0.004, assumptions.infection_growth.uncontrolled_and_unaware - 0.004 - 0.004, assumptions.infection_growth.uncontrolled_and_unaware - 0.004 - 0.004 - 0.004, assumptions.infection_growth.uncontrolled_and_unaware - 0.004 - 0.004 - 0.004 - 0.004, assumptions.infection_growth.uncontrolled_and_unaware - 0.004 - 0.004 - 0.004 - 0.004 - 0.004, assumptions.infection_growth.uncontrolled_and_unaware - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004, assumptions.infection_growth.uncontrolled_and_unaware - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004, assumptions.infection_growth.uncontrolled_and_unaware - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004, assumptions.infection_growth.uncontrolled_and_unaware - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004, assumptions.infection_growth.uncontrolled_and_unaware - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004 - 0.004, assumptions.infection_growth.uncontrolled_and_aware, assumptions.infection_growth.uncontrolled_and_aware, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_1_to_14, assumptions.infection_growth.intervention_day_15_plus, assumptions.infection_growth.intervention_day_15_plus, assumptions.infection_growth.intervention_day_15_plus, assumptions.infection_growth.intervention_day_15_plus, assumptions.infection_growth.intervention_day_15_plus, assumptions.infection_growth.intervention_day_15_plus, assumptions.infection_growth.intervention_day_15_plus, assumptions.infection_growth.intervention_day_15_plus]
}

// note that it's assumed that all deaths caused by COVID-19 will indeed be attributed to COVID-19 
// 1. this is clear from the model as described below,
// 2. and is also explained on the "About" page of the model (https://docs.google.com/spreadsheets/d/1Rl3uhYkKfZiYiiRyJEl7R5Xay2HNT20R1X1j1nDCnd8/edit#gid=1365268056):
// "So, we are assuming that we have perfect information about the number of deaths."
plague_plus_prediction = () => eventual_attributed_deaths() * infections_per_death()
    
    // deaths that will eventually be confirmed for people who are already infected
    eventual_attributed_deaths = () => eventual_attributed_deaths_per_death_so_far() * attributed_deaths_so_far()

        attributed_deaths_so_far = () => argentina_april_8_data.attributed_deaths_so_far

        eventual_attributed_deaths_per_death_so_far = () => {
            // according to the model, it takes 21 days to die; get the daily infection growth rates for the past 21 days
            infection_growth_rates_over_number_of_days_to_death = intermediate_values.argentina_daily_infection_growth_rate.slice(-1 * (assumptions.days_from_infection_to_death + 1), -1)

            // for each day, take the cumulative infection growth rate so far, and multiply by the proportional increase in cases for the current day
            return infection_growth_rates_over_number_of_days_to_death.reduce((so_far, daily_growth_rate) => so_far * (1 + daily_growth_rate), 1)
        }
    
    infections_per_death = () => assumptions.infections_per_death

console.log(plague_plus_prediction())
// Should be 13,537 -- 'Estimated Cases'CE8

intermediate_values.argentina_daily_infection_growth_rate.forEach(el => console.log(el))


