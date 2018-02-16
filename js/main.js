/**
 * Titanic Data Visualizations
 * @author Ryan D. Watts
 * 
 * This file is apart of the data visualization for Titanic Data.
 * It contains libraries such as dimple.js and d3.js to build the visualization.
**/

/**
 * This type definition defines the data structure.
 * @typedef {object} ITitanicItem
 * @property {string} PassengerId
 * @property {string} Survived
 * @property {string} Pclass
 * @property {string} Name
 * @property {string} Sex
 * @property {string} Age
 * @property {string} SibSp
 * @property {string} Parch
 * @property {string} Ticket
 * @property {string} Fare
 * @property {string} Embarked
 */

/**
 * The App class is the central point of the entire application.
 * This is an ES6 Javascript Class that encapsulates the entire application.
 * NOTE: a browser supporting ES6 should be used to review this project.
 * 
 * @class App
 */
class App {
	constructor(data) {
		/**@type [ITitanicItem] */
		this.data = data;
		this.root = $("#charts");
		this.groups = null;
		
		this.init();
	}
	
	init() {
		this.renderCharts();
	}
	
	newChart(id, cb, description) {
		// create the element in the dom.
		let elm = this.root.append(`
			<div class="row">
				<div class="card center z-depth-3 hoverable">
					<div class="card-image waves-effect waves-block waves-light">
						<div id="chart_${id}"></div>
					</div>
					<div class="divider"></div>
					<div class="card-content">
						<span class="card-title grey-text text-darken-4">${id}</span>
						<div>${description ? description : ''}</div>
						<br/>
					</div>
				</div>
			</div>
		`);
		// build the svg.
		let svg = dimple.newSvg(`#chart_${id}`, 600, 400);
		// set predefined bounds that we will use accross all charts.
		let p = new dimple.chart(svg, this.data);
			p.setBounds(20, 20, 500, 300);
			p.addLegend(500, 30, 90, 300, "left");
		// callback to allow manipulization of the chart before we draw it.
		cb(p);
		// after the chart has been tailored draw the chart to the dom.
		return p.draw();
	}
	
	renderCharts() {
		// Pie Chart : Survived -> Sex
		this.newChart('Survived_Sex_Correlation', c => {
			c.addMeasureAxis("p", "Survived");
			c.addSeries("Sex", dimple.plot.pie);
			c.addLegend(500, 30, 90, 300, "left");
		},`
			<b>Chart Type : Pie</b> <br/>
			This visualization shows that only <b>32%</b> of the survivors were male passengers.
			While <b>68%</b> of the survivors were females.
		`);
		
		// HZ Grouped Bar Chart :  Survived -> PClass
		this.newChart('Survived_PClass_Correlation', c => {
			c.addMeasureAxis("x", "Survived");
			c.addCategoryAxis("y", "Pclass");
			c.addSeries("Pclass", dimple.plot.bar);
		}, `
			<b>Chart Type : HZ Grouped Bar</b> <br/>
			More passengers from Pclass 1 survived than passengers from PClass 2 or 3.
		`);
		
		// Pie Chart :  Survived -> Embarked
		this.newChart('Survived_Embarked_Correlation', c => {
			c.addMeasureAxis("p", "Survived");
			c.addSeries("Embarked", dimple.plot.pie);
			
		}, `
			<b>Chart Type : Pie Chart</b> <br/>
			Passengers in Embarked <b>S</b> were amongst <b>63%</b> of the people that survived.
		`);
		
		
		// Pie Chart :  Survived -> Embarked
		this.newChart('Survived_Age_Sex_Animation', c => {
			c.addMeasureAxis("p", "Age");
			c.addSeries(["Age", "Sex"], dimple.plot.pie);
			c.setStoryboard(["Age"]).startAnimation();
		}, `
			<b>Chart Type : Pie Chart Animation by Age-Survival-Sex</b> <br/>
			This animation shows the survival by age, sex, and survival. It shows each age group and whether or not male vs. female within that group's survival rate.
		`);
	}
}

/**
 * Load the data via d3 then instantiate the App.
 */
d3.csv("data/titanic-data.csv", (error, data) => {
	new App(data);
});



