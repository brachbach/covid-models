// everything is per the April 8 version of this Colab: https://colab.research.google.com/drive/1lcWu_bQooe38r59VqJDjxCbJBb2Dtt2r
const assumptions = {
    days_from_infection_to_death: 17,
    actual_deaths_per_confirmed_death: 1 / 0.7,
}

// All from CSSE, for Argentina on April 8
const argentina_april_8_data = {
    attributed_deaths_so_far: 44,
    recovered_so_far: 280,

    // mean daily growth rate for confirmed cases in this region for the full time we have data
    confirmed_case_growth_rate: 1.17
}

const model_1_result = () => estimated_deaths() * infections_per_death()

    const estimated_deaths = () => eventual_confirmed_deaths() * actual_deaths_per_confirmed_death()

        const eventual_confirmed_deaths = () => confirmed_case_growth_rate() ** days_from_infection_to_death() * attributed_deaths_so_far()

            const confirmed_case_growth_rate = () => argentina_april_8_data.confirmed_case_growth_rate

            const days_from_infection_to_death = () => assumptions.days_from_infection_to_death

            // Deaths attributed to COVID - 19
            const attributed_deaths_so_far = () => argentina_april_8_data.attributed_deaths_so_far
        
        const actual_deaths_per_confirmed_death = () => assumptions.actual_deaths_per_confirmed_death
    
    const infections_per_death = () => attributed_deaths_so_far() / (attributed_deaths_so_far() + recovered_so_far())

        const recovered_so_far = () => argentina_april_8_data.recovered_so_far

console.log(model_1_result())

// actual model output to check against: 125,322 infections
