# Scope

I'll focus on differences between the Ought/EpiFor models 1-3 on the one hand, and some other external model on the other hand (since the main goal here is to learn how our models compare to external models). I'm starting by focusing on PlaguePlus specifically.

# How to read

I'll assume that you've already read and understood the relevant `this_model.js` file for each model discussed here (or that you'll refer to it as needed). So I won't explain here how the models work, only how they compare to each other.

# Comparisons

## PlaguePlus vs. Model 2

Of Models 1-3, Model 2 is the most similar to the PlaguePlus model, so I'll compare between these two models.

### Differences

1. Model 2 assumes that there will be some people who will die of COVID but whose deaths will never be attributed to COVID. PlaguePlus assumes that all deaths will be attributed.
    * Clearly Model 2's assumption is more realistic than PlaguePlus
    * In the current version of Model 2, `actual_deaths_per_confirmed_death = 1 / 0.7`, which is close to 1. So this factor doesn't make a big difference
2. There's a time lag of about 20 days between getting infected and dying (which I'll call the "deaths lag period"). So to estimate current infections from deaths so far, both models use deaths so far to estimate how many people were infected about 20 days ago. Then, they model how much infection has spread in the past 20 days. However, they approach this differently:
    1. Model 2 assumes 17 days from infection to death, PlaguePlus assumes 21
        * This can make a 2x or bigger difference in the final estimate of people infected in countries where the virus is spreading rapidly
    2. Model 2 simply assumes that, during the deaths lag period, the infection has spread at the pace of increase of confirmed cases in the CSSE data from Johns Hopkins. Plague Plus does something much more complicated, thinking from first principles about how much the infection has spread and taking countermeasures into account
        * I still need to look into PlaguePlus more to understand how it estimates infection spread in the deaths lag period.
        * I'm pretty sure that this can result in a 10X or larger difference in estimates between the models
3. PlaguePlus assumes a canonical mortality rate of 1.5%, while Model 2 assumes a canonical mortality rate of 0.765%
    * This causes a 2X difference in estimates between the models
