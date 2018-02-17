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
3. Does the variable `embark` have any correlation to the rate of survival?
4. Does the `sex` of the passenger have any significant value to their chance of survival?

**Assumptions / Predetermined Bias to Potential Questions**
1. Women and children would have been a high priority to save during that time.
2. The class of the individual may have been an important factor of whether or not they had a spot on the lifeboats.
3. Higher class people would have had more persuation power to get a spot on the lifeboat.
4. The type of cabin "higher class" would have had preserved lifeboats or evacuation routes on the ship.
5. Women would have been placed first over Men in a survival situation.

## Design
### Initial Sketch
![Sketch](https://github.com/rwatts3/udacity-viz/raw/master/images/sketch.jpg)
After performing a basic Exploratory Data Analysis on the dataset I was able to identify a few known variables as well as prepare a few questions.
Given the type of data found during the exploratory Data Analysis I was able to determine that subsetting specific pieces of the data was an important way to focus on each visualization.
Below is a sketch of the types of charts that will be used for the visualization.

### Version 1 -> Feedback 1
![V1](https://github.com/rwatts3/udacity-viz/raw/master/images/v1.png)
After reviewing the design it was proposed to implement a clean solution that allows a viewer to easily navigate and distinguish between each chart.

### Version 2 -> Feedback 2
![V2](https://github.com/rwatts3/udacity-viz/raw/master/images/v2.png)
Based on the second round of feedback I determined that adding a label to the chart was efficient to show the user quickly what pieces of data they are comparing. 

### Version 3 -> Feedback 3
![V3](https://github.com/rwatts3/udacity-viz/raw/master/images/v3.png)
This was great feedback. Having a quick overview of the chart's purpose and/or implementaiton can be beneficial to the viewer.
I have now added an additional section after the chart ID that displays the Chart Type as well as a summary of the findings within the chart.

### Version 4 -> Final
![Final](https://github.com/rwatts3/udacity-viz/raw/master/images/final.png)
The final version of the project incorporates all of the revisions and updates from the feedback.

### Code Details
In `main.js` I have implemented an ES6 javascript class that encapsulates the loading and rendering of the charts and data.
While developing my first round of the chart, I noticed that I wanted to explore with different chart types.
Although dimple makes developing charts much easier vs. directly using d3.js there was still quite a bit of code needed to build each chart.

I created an init function within the App class that simply serves as a central entrypoint to the chart rendering steps.
I then created a `newChart` function that accepts a key paramaters needed to build the chart.
The newChart function takes an id, callback function and a description.
Using the Id the function then creates a dom element on the fly and appends it to the designated area for the chart.
After this it then creates the most commonly used pieces accross each chart and calls the callback function passing the created chart instance to the function.
This allows me to add or manipulate any changing pieces of the new chart, and finally takes a description that is used to display a description of the chart.

A `renderCharts` function is used to encapsulate the bulk of the chart development.

At the bottom of main.js I make a function call to load the csv chart data, then upon successful retrieval of that data,
I then initialize a new instance of the App class passing the csvdata to the instance of the App via a constructor.

This workflow allowed me to experiment with different chart types as I explored the data, without having to write a significant amount of code between each experiment.


## Feedback
### Feedback 1
> The sketch looks very nice! I would suggest providing clean sections that allow the charts to be easily distinghishable between the other charts. 

### Feedback 2
> The material design looks really nice. However I am unable to determine which what the purpose of the chart. Such as how do I know what the chart is comparing.
### Feedback 3
> It would be nice to see a detail or a quick summary text of what the chart is telling me. I could then use this information when I am looking at the chart to further expand my observation.

### Udacity Feedback 1
> The project renders almost fine. The only issue is that it is not possible to load js file by default:
GET http://localhost:8005/udacity-viz/js/main.js net::ERR_ABORTED
The issue is that base href specified. After I deleted it, I was able to load the project. Please, make sure it is possible to load the archive by default with the next submission.

**Response**
Thank you for pointing this out. I originally set the base href tag due to the fact that I hosted the project on github pages and it needed to be aware of the root path in order to load the files. I have now removed the base href in the code so that it can be reviewed easier. 

### Udacity Feedback 2
> The solution for the mentioned issues is simple: show % of survival in comparison to the total value, e.g if you want to show gender survival and there are 100 females survived out of 200 females it will be 50% survival rate. The same is for man. Probably bar chart will be more suitable for this case.

**Response**
I agree after taking a second look at the data, showing the comparison between survived true|false as well as sex male|female is important here.
I have updated the viz to encorporate the suggestion. 

## Conclusion
In order to properly build visualizations you must first understand the data you will be visualizing.
Leveraging skills learned in the Data Wrangling and Exploratory Data Analysis course, 
I was able to conduct quick EDA on the data to prepare a list of questions prior to rendering the initial sketch.
After building the initial sketch and receiving feedback, I was then able to proceed with the initial development.

Shortly after starting I realized that I had a need to explore different chart variations to see how they fit or represent the data.
I then extended my code and created a solution to quickly switch between different `dimple` chart types.

Utilizing the `materialize` framework has allowed me to focus more on chart building and slightly less on overal presentation.

One of the most important things I learned from the feedback, is although the importance is within the data, it is also equally important to provide clean and visually appealing aesthetics to the visualization.