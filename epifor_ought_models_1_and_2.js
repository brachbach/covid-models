// assumptions, data, and model are per the April 8 version of this Colab: https://colab.research.google.com/drive/1lcWu_bQooe38r59VqJDjxCbJBb2Dtt2r

// unless otherwise noted, these are super made-up
assumptions = {
    days_from_infection_to_death: 17,
    actual_deaths_per_confirmed_death: 1 / 0.7,
    max_mortality_rate: 0.05,
    canonical_mortality_rate: 0.00765 // https://pandemic.metaculus.com/questions/3755/
}

// All from CSSE, for Argentina on April 7
argentina_april_8_data = {
    attributed_deaths_so_far: 56,
    recovered_so_far: 338,

    // mean daily growth rate for confirmed cases in this region for the full time we have data
    confirmed_case_growth_rate: 1.12
}

model_1_prediction = () => estimated_deaths() * infections_per_death()

    estimated_deaths = () => eventual_attributed_deaths() * actual_deaths_per_confirmed_death()

        eventual_attributed_deaths = () => eventual_attributed_deaths_per_death_so_far() * attributed_deaths_so_far()
            
            // deaths that will eventually be confirmed for people who are already infected
            eventual_attributed_deaths_per_death_so_far = () => confirmed_case_growth_rate() ** days_from_infection_to_death()
                confirmed_case_growth_rate = () => argentina_april_8_data.confirmed_case_growth_rate
                days_from_infection_to_death = () => assumptions.days_from_infection_to_death

            // Deaths attributed to COVID - 19
            attributed_deaths_so_far = () => argentina_april_8_data.attributed_deaths_so_far
        
        actual_deaths_per_confirmed_death = () => assumptions.actual_deaths_per_confirmed_death
    
    infections_per_death = () => 1 / Math.min(mortality_rate(), max_mortality_rate())
        
        mortality_rate = () => attributed_deaths_so_far() / (attributed_deaths_so_far() + recovered_so_far())
            
            recovered_so_far = () => argentina_april_8_data.recovered_so_far
        
        max_mortality_rate = () => assumptions.max_mortality_rate

console.log(model_1_prediction())

// actual model output to check against: 11651 infections

model_2_prediction = () => estimated_deaths() * infections_per_death_canonical_mortality()

    infections_per_death_canonical_mortality = () => 1 / canonical_mortality_rate()

        canonical_mortality_rate = () => assumptions.canonical_mortality_rate

console.log(model_2_prediction())

// actual model output to check against: 76150 infections
