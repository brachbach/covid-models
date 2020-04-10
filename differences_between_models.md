# Scope

I'll focus on differences between the Ought/EpiFor models 1-3 on the one hand, and some other external model on the other hand (since the main goal here is to learn how our models compare to external models). I'm starting by focusing on PlaguePlus specifically.

# How to read

I'll assume that you've already read and understood the relevant model recreation in `../model_recreations/` for each model discussed here (or that you'll refer to it as needed). So I won't explain here how the models work, only how they compare to each other.

# Comparisons

## PlaguePlus vs. Model 2

Of Models 1-3, Model 2 is the most similar to the PlaguePlus model, so I'll compare between these two models.

### Differences

1. **Death attribution**: Model 2 assumes that there will be some people who will die of COVID but whose deaths will never be attributed to COVID. PlaguePlus assumes that all deaths will be attributed.
    * Clearly Model 2's assumption is more realistic than PlaguePlus
    * In the current version of Model 2, `actual_deaths_per_confirmed_death = 1 / 0.7`, which is close to 1. So this factor doesn't make a big difference
2. **Deaths lag period**: There's a time lag of about 20 days between getting infected and dying (which I'll call the "deaths lag period"). So to estimate current infections from deaths so far, both models use deaths so far to estimate how many people were infected about 20 days ago. Then, they model how much infection has spread in the past 20 days. However, they approach this differently:
    1. **Days from infection to death**: Model 2 assumes 17 days from infection to death, PlaguePlus assumes 21
        * This can make a 2x or bigger difference in the final estimate of people infected in countries where the virus is spreading rapidly
    2. **Infection growth rate during deaths lag period**:
        * Model 2 simply assumes that, during the deaths lag period, the infection grows at the pace of increase of confirmed cases in the CSSE data from Johns Hopkins
        * Plague Plus estimates infection growth rates based on government interventions to slow the spread of infection:
            * assume a 24% daily increase in infections when people in that country are unaware that COVID is spreading there, and 20% once they're aware but before the government has intervened (these assumptions are not justified anywhere that I could see)
            * once the government intervenes:
                * assume that almost everywhere is like China
                * use the number of people that ultimately died in China to estimate the rate of spread once the government started to intervene. Results in:
                    * about a 7% daily increase in infections during the first 14 days of government intervention
                    * about a 0.7% daily increase in infections after the first 14 days of government intervention
            * the model mostly uses the rates I mentioned in the above bullets, but it uses a wide variety of other rates as well
                * You can see the infection growth rate used for a region at a given time in the [Infection Growth Rate tab](https://docs.google.com/spreadsheets/d/1sYLHA61Uvocxvq5os26u5luxMpo9QQcsZwe13_tU_FE/edit#gid=501118816)
                * Most of the rates used are spelled out in the [Assumptions tab](https://docs.google.com/spreadsheets/d/1sYLHA61Uvocxvq5os26u5luxMpo9QQcsZwe13_tU_FE/edit#gid=371207754) 
        * this difference between the models could result in a 10X or larger difference in estimates, though I'm not sure by how much they differ in practice
3. **Canonical mortality rate**: PlaguePlus assumes a canonical mortality rate of 1.5%, while Model 2 assumes a canonical mortality rate of 0.765%
    * This causes a 2X difference in estimates between the models
4. **Hospital bed availability**: Model 2 does not consider hospital bed availability. PlaguePlus includes data on hospital bed availability but doesn't seem to use it yet in the model.
