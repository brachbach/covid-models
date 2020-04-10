# Which model?

When people say, "oh, the Imperial model is good!", what are they talking about?

* They seem to give updates on their modeling in the form of [reports](https://www.imperial.ac.uk/mrc-global-infectious-disease-analysis/covid-19/)
* [This](https://www.imperial.ac.uk/media/imperial-college/medicine/mrc-gida/2020-03-30-COVID19-Report-13.pdf) seems to be the most recent one that models infections and such
    * clearly this is not the original model that got people excited, since it's fairly recent
    * but maybe this is the most up-to-date model?
    * can't find the original model, so will work with this one for now

# Which part of the model?

Ideally, true cases. But there's no figure of that in the report.

Will look in the code to see if I can find the relevant output there.

# How does the model work?

## Data 

"""
Our model utilizes daily real-time death data from the ECDC (European Centre of Disease Control),
where we catalogue case data for 11 European countries currently experiencing the epidemic: Austria,
Belgium, Denmark, France, Germany, Italy, Norway, Spain, Sweden, Switzerland and the United
Kingdom. The ECDC provides information on confirmed cases and deaths attributable to COVID-19.
However, the case data are highly unrepresentative of the incidence of infections due to
underreporting as well as systematic and country-specific changes in testing.
We, therefore, use only deaths attributable to COVID-19 in our model; we do not use the ECDC case
estimates at all. While the observed deaths still have some degree of unreliability, again due to
changesin reporting and testing, we believe the data are of sufficient fidelity to model. 
"""

"""
We also catalogue data on the nature and type of major non-pharmaceutical interventions. We looked
at the government webpages from each country as well as their official public health
division/information webpages to identify the latest advice/laws being issued by the government and
public health authorities. 
"""

## Basics from the methods summary and Figure 5

* assume that the effect of an intervention is the same accross all 11 European countries
* Reading the summary really helps with interpreting the figure!
* I feel like I understand all of this
    * But this is pretty high-level -- just a flowchart of vaguely what's in the model and what depends on what

## Details from appendices

### 8.1 Death model
* for some reason deaths are modeled using a [negative binomial distribution](https://en.wikipedia.org/wiki/Negative_binomial_distribution)
    * also half-normal distribution something something
    * I think would take me a while to understand this, will try to skip it and see how that goes
* Only use deaths to model infection once there have been at least 10 deaths, otherwise most of the deaths might have been people who caught COVID outside of the country and then died there
* Use a previously-estimated ifr, but adjust based on age-based attack rates and country-specific patterns of disease spread (I don't really get this part)
* Gamma distributions for incubation period and time from symptom onset to death
* Some stuff about discrete sums that I don't understand at the end

### 8.2 Infection model
* a "discrete renewal process" that's similar to the Susceptible-Infected-Recovered model
* I don't get this, but plausibly I would if I spent another half hour on it
* glazed over the rest of this section