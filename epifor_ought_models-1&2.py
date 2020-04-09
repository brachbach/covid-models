# all numbers are for Argentina on April 8, per the April 8 version of this Colab: https://colab.research.google.com/drive/1lcWu_bQooe38r59VqJDjxCbJBb2Dtt2r

assumptions = {
    "days_from_infection_to_death": 17,
    "actual_deaths_per_confirmed_death": 1 / 0.7,
}

# All from CSSE
argentina_april_8_data = {
    "attributed_deaths_so_far": 44,
    "recovered_so_far": 280,
    "confirmed_case_growth_rate": 1.17
}

recovered_so_far = argentina_april_8_data["recovered_so_far"]

# Deaths attributed to COVID-19
attributed_deaths_so_far = argentina_april_8_data["attributed_deaths_so_far"]
# ****

infections_per_death = attributed_deaths_so_far / \
    (attributed_deaths_so_far + recovered_so_far)
# **

actual_deaths_per_confirmed_death = assumptions["actual_deaths_per_confirmed_death"]
# ***

days_from_infection_to_death = assumptions["days_from_infection_to_death"]
# ****

# Deaths attributed to COVID-19
attributed_deaths_so_far = argentina_april_8_data["attributed_deaths_so_far"]
# ****

# mean daily growth rate for confirmed cases in this region for the full time we have data
confirmed_case_growth_rate = 1.17
# ****

# I don't understand this
eventual_confirmed_deaths = confirmed_case_growth_rate ** days_from_infection_to_death * \
    attributed_deaths_so_far
# ***

estimated_deaths = eventual_confirmed_deaths * actual_deaths_per_confirmed_death
# **

model_1_result = estimated_deaths * infections_per_death
# *

print(model_1_result)

# actual model output to check against: 125,322 infections
