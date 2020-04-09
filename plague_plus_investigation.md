# What's the Apr 8 estimate for Argentina?
From the UI: 14,000

From the [model sheet](https://docs.google.com/spreadsheets/d/1Rl3uhYkKfZiYiiRyJEl7R5Xay2HNT20R1X1j1nDCnd8/edit#gid=26483466): 13532 (accessed Apr 8)

Seems like the UI is just rounding the model

So this is indeed likely to actually be the model backing the UI

# How is the model put together?

The formula for the estimate cell is:

```
=INDEX(
  Death_Data, 
  MATCH($A8,Death_Data_Region_Identifiers,0),
  MATCH(CE$1,Death_Data_Region_Attributes,0))
/ INDEX(
  Death_Rates, 
  MATCH($A8,Death_Rates_Region_IDs,0),
  MATCH(CE$1,Death_Rates_Dates,0))
* INDEX(
  Cumulative_Infection_Growth, 
  MATCH($A8,Cumulative_Infection_Growth_Region_IDs,0),
  MATCH(CE$1,Cumulative_Infection_Growth_Dates,0))
```

## The named ranges here are:

### Death_Data

'Death Data (Identified)'!C2:CM4010

This just seems like a way to get the # of deaths to date from the John Hopkins deaths data.

### Death_Rates

'Death Rates`F2:CM801

Across the whole range, this is always just the scalar named range Death_Rate_Default, currently 0.015

This comes from 'Assumptions'!C11, and is explained as "We had been estimating 1%, but Korea's recent rise (presumably due to people not having had time to die) indicates that number may not be conservative. (In this model, the lower the death rate assumption, the higher the number of estimated cases.) Based on Diamond Princess rates at about 1% and SK at 1.6% (but likely not having detected 100% of cases) I still think overall rate is likely beloe 1%, but I'm bumping this up to maintain conservatism."

I'm not sure whether this is deaths/confirmed case, deaths/infection, or something else


### Cumulative_Infection_Growth

`Cumulative Infection Growth'F2:CN801

The relevant cell for Argentina, Apr 8 is `Cumulative Infection Growth'CE8

The formula for that cell is:

```
=PRODUCT(ArrayFormula(1 + OFFSET(
  Infection_Growth_Rates,
  MATCH($A8,Infection_Growth_Rates_Region_IDs,0)-1,
  MATCH(CE$1,Infection_Growth_Rates_Dates,0)-1-Days_Infection_To_Death,
  1,
  Days_Infection_To_Death)))
+N("
EXPLANATION:
* This formula computes the total amount of growth over the past Days_Infection_To_Death days for the given region and date.
* First the formula gets the Region ID ($A_) and Date (_$1) and uses the MATCH function to find the corresponding offsets into the Infection_Growth_Rates table.
* We subtract 1 from these because MATCH is one-indexed and OFFSET is zero-indexed.
* Next we subtract Days_Infection_To_Death from the date to get the column for first day of growth to be accounted for.
* Next we use the OFFSET function to pull out a 1xDays_Infection_To_Death strip of cells out of the Infection_Growth_Rates table.
* The ArrayFormula(1 + ...) then adds one to all the growth rates, so we can finally multiply them together using PRODUCT to get the correct result
* The final +N(...) just adds zero.  It's a convenient mechanism that lets me shoe-horn this comment string into the formula.
* Warning: The dates in Infection_Growth_Rates_Dates must be consecutive, and backdated at least Days_Infection_To_Death days for this to work.
")
```

My summary: "Get the relevant infection growth rates from the Infection Growth Rates sheet for every day in the period from infection to death

#### Days_Infection_To_Death
Assumptions!C10

= 21

Notes: Naively it looks like this may need to be 23 days, but a more careful examination is needed before bumping it up further.

#### Infection_Growth_Rates
Each cell here seems to be manually set to reference the appropriate growth rate for that date from the Assumptions sheet.

I'm not sure whether they're really manually set, or if somehow the references to the assumptions are automatically generated

