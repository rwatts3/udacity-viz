# Data Visualization - Titanic

> Author: Ryan D. Watts

## Summary
This project is a visualzation of exploratory correlations that help represent a passenger's chance of survival.
Below you will find a list of potential questions this visualzation aims to answer.
The chosen dataset for this project is the `Titanic Dataset` provided by Udacity.

This project uses the following frameworks / libraries to prepare the visualizations.

- d3.js `A Data Visualization Framework in Javascript`
- dimple.js `A library that simplifies the d3.js Framework.`
- materialize `A frontend web framework that incorporates Google Material Design Specifications`

> Note: Please note this dataset focuses on the `Passenger` and does not include `Crew` data.
It has been stated that a total of `1503` people parished that day.

## Research
In order to build the Visualizations we must first ask a few questions regarding the data,
as well as identify the variables we currently know about the data.

**Known Variables**
- PassenerId
- Survived
- PClass
- Name
- Sex
- Age
- SibSP
- Parch
- Ticket
- Fare
- Cabin
- Embarked

**Possible Correlations**
- Survived -> Age
- Survived -> PClass
- Survived -> Fare
- Survived -> Cabin
- Survived -> Sex

By identifying the possible correlations as well as notating known variables we can now start to prepare for potential questions to answer.

**Potential Questions**
1. Does the variable `age` have any affect on the rate of survival?
2. Does the variable `pclass` have any correlation to the rate of survival?
3. Did the amount paid identified in the `fare` variable have an affect on the chance of survival?
4. Does the type of `cabin` selected have any correlation to the passengers' chance of surviavl?
5. Does the `sex` of the passenger have any significant value to their chance of survival?

**Assumptions / Predetermined Bias to Potential Questions**
1. Women and children would have been a high priority to save during that time.
2. The class of the individual may have been an important factor of whether or not they had a spot on the lifeboats.
3. Higher class people would have had more persuation power to get a spot on the lifeboat.
4. The type of cabin "higher class" would have had preserved lifeboats or evacuation routes on the ship.
5. Women would have been placed first over Men in a survival situation.

## Design
### Initial Sketch
After performing a basic Exploratory Data Analysis on the dataset I was able to identify a few known variables as well as prepare a few questions.
Given the type of data found during the exploratory Data Analysis I was able to determine that subsetting specific pieces of the data was an important way to focus on each visualization.
Below is a sketch of the types of charts that will be used for the visualization.

### Version 1 -> Feedback 1
![V1](https://github.com/rwatts3/udacity-viz/raw/master/images/v1.png)
After reviewing the design it was proposed to implement a clean solution that allows a viewer to easily navigate and distinguish between each chart.

### Version 2 -> Feedback 2

### Version 3 -> Feedback 3

### Bar Charts
### Line Charts

## Feedback
### Feedback 1
> The sketch looks very nice! I would suggest providing clean sections that allow the charts to be easily distinghishable between the other charts. 

### Feedback 2
### Feedback 3

## Additional Visualizations and Exploratoration of Data
