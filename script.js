window.addEventListener("load",run,false);

var barWidth = 200;
var barScale = 4
var barMargin = 40;

var networkColors = {
	"Twitter":"Orange",
	"LinkedIn":"Blue",
	"Facebook": "Red",
	"Instagram": "Green",
	"Pinterest": "Violet"
}

var axisLabel = {
	"Gender":"Gender",
	"Race":"Race",
	"Age":"Age",
	"Income":"Anual Income in USD",
	"Region":"Region of Living",
	"Education":"Education Level"
}

var currentSegment = "Gender";
var currentNetwork = "Facebook"

// global variables

function run () {

var data = {
	"Gender":{
		"Male":{
			"Twitter":25,
			"LinkedIn":26,
			"Facebook":66,
			"Instagram":24,
			"Pinterest":16
		},
		"Female":{
			"Twitter":21,
			"LinkedIn":25,
			"Facebook":77,
			"Instagram":31,
			"Pinterest":44
		}
	},
	"Race":{
		"White":{
			"Twitter":20,
			"LinkedIn":26,
			"Facebook":70,
			"Instagram":21,
			"Pinterest":32
		},
		"Black":{
			"Twitter":28,
			"LinkedIn":22,
			"Facebook":67,
			"Instagram":47,
			"Pinterest":23
		},
		"Hispanic":{
			"Twitter":28,
			"LinkedIn":22,
			"Facebook":75,
			"Instagram":38,
			"Pinterest":32
		}

	},
	"Age":{
		"18-29":{
			"Twitter":32,
			"LinkedIn":22,
			"Facebook":82,
			"Instagram":55,
			"Pinterest":37
		},
		"30-49":{
			"Twitter":29,
			"LinkedIn":32,
			"Facebook":79,
			"Instagram":28,
			"Pinterest":36
		},
		"50-64":{
			"Twitter":13,
			"LinkedIn":26,
			"Facebook":64,
			"Instagram":11,
			"Pinterest":24
		},
		"65+":{
			"Twitter":6,
			"LinkedIn":12,
			"Facebook":48,
			"Instagram":4,
			"Pinterest":16
		}

	},
	"Education":{
		"High school or less":{
			"Twitter":19,
			"LinkedIn":9,
			"Facebook":71,
			"Instagram":25,
			"Pinterest":25
		},
		"Some college":{
			"Twitter":23,
			"LinkedIn":25,
			"Facebook":72,
			"Instagram":32,
			"Pinterest":37
		},
		"College plus":{
			"Twitter":27,
			"LinkedIn":46,
			"Facebook":72,
			"Instagram":26,
			"Pinterest":31
		}

	},
	"Income":{
		"<30,000":{
			"Twitter":21,
			"LinkedIn":17,
			"Facebook":73,
			"Instagram":26,
			"Pinterest":24
		},
		"30,000-49,999":{
			"Twitter":19,
			"LinkedIn":21,
			"Facebook":72,
			"Instagram":27,
			"Pinterest":37
		},
		"50,000-74,999":{
			"Twitter":25,
			"LinkedIn":32,
			"Facebook":66,
			"Instagram":30,
			"Pinterest":41
		},
		"75,000+":{
			"Twitter":26,
			"LinkedIn":41,
			"Facebook":78,
			"Instagram":26,
			"Pinterest":30
		}

	},
	"Region":{
		"Urban":{
			"Twitter":30,
			"LinkedIn":30,
			"Facebook":74,
			"Instagram":32,
			"Pinterest":26
		},
		"Suburban":{
			"Twitter":21,
			"LinkedIn":26,
			"Facebook":72,
			"Instagram":28,
			"Pinterest":34
		},
		"Rural":{
			"Twitter":15,
			"LinkedIn":12,
			"Facebook":67,
			"Instagram":18,
			"Pinterest":30
		}

	},
	"Total":{
		"Twitter":23,
		"LinkedIn":25,
		"Facebook":72,
		"Instagram":28,
		"Pinterest":31
	}
}

$("#segment input:radio").each(function() {
	$(this).css("color", networkColors[this.id]);
});

$("#segment input:radio").on("click", function() {
	currentSegment = this.id;
	question1(data);
	question2(data,currentSegment);
});
$("#network input:radio").on("click", function() {
	currentNetwork = this.id;
	question1(data);
	
});
question1(data);
question2(data, currentSegment);
}

function question2(data, segment) {
	var presentSegment = data[segment];

	var formattedData = parseData(presentSegment, segment);

	//Formatting parameters
	var barWidth = 35;
	var barMargin = 5;
	var titleHeight = 40;
	var barTitleHeight = 20;

	var startX = 200;
	var startY = 450;
	var currentX = 200;
	var currentY = 250;
	var deltaX = 210;
	//Scale function for height of question 2 bars
	var yScale = d3.scale.linear()
    .domain([0,100])
    .range([400,0]);

	d3.select("#question2").selectAll("g").remove();

    //Axis object we will add
    var yAxis = d3.svg.axis()
                  .orient("left")
                  .scale(yScale)
                  .ticks(4);

    //All info across a demographic lives here          
	var wholeSlice = d3.select("#question2").append("g")
		.attr("id",function(d) {
				return data["Name"];
			})
			.attr("y", function() {
				return startY;
			})
			.attr("x", function(d, i) {
				return startX 
			});
	
	//Add a title
	wholeSlice.append("text")
			.text(function() {
				return "Social Media Use Across " + formattedData["Demographic"];
			})
			.attr("y", function() {
				return startY - yScale(0);
			})
			.attr("x",function() {
				return startX + formattedData["Categories"].length/2*deltaX
				- this.getComputedTextLength()/2;
			})
			.attr("font-size",function() {
				return barTitleHeight;
			});

	//Making a specific demographic info
	var socialSegment = wholeSlice.selectAll("g")
		.data(function() {
			return formattedData["Categories"];
		})
		.enter().append("g");

	//Add relevant info to them
	socialSegment
			.attr("id",function(d) {
				return d["Name"];
			})
			.attr("y", function() {
				return startY;
			})
			.attr("x", function(d, i) {
				return startX + i*deltaX
			})
			//Label for demographic
			.append("text")
				.text(function(d) {
					return d["Name"];
				})
				.attr("font-size",15)
				.attr("x", function() {
					//Center the text
					return parseFloat(d3.select(this.parentNode).attr("x")) + 
					(barWidth + barMargin)*2.5 - this.getComputedTextLength()/2;
				})
				.attr("y", function() {
					return parseInt(d3.select(this.parentNode).attr("y")) + barTitleHeight;
				})
			;

	//Each social network for each demographic
	var bars = socialSegment.selectAll("rect")
			.data(function(d) {
				return d["Networks"];
			})
			.enter().append("rect");
	bars
			.attr("id",function(d) {
			return d["Name"];
		})
			.attr("height",function(d)  {
				return yScale(0) - yScale(d["Percent"]);
			})
			.attr("width",barWidth)
			.attr("y",function(d) {
				return parseInt(d3.select(this.parentNode).attr("y")) - (yScale(0) - yScale(d["Percent"])) ;
			})
			.attr("x",function(d, i) {
				return parseInt(d3.select(this.parentNode).attr("x")) + parseInt(i*(barWidth + barMargin));

			})
			.attr("fill",function(d) {
				return networkColors[d["Name"]];
			});

	//Add axis
	wholeSlice.append("g")
		.attr("class", "y axis")
		.attr("transform", function() {
			return "translate(" + d3.select(this.parentNode).attr("x") +
			"," + (parseInt(d3.select(this.parentNode).attr("y")) - yScale(0)) + ")"
	})
		.attr("fill","none")
		.attr("stroke","black")
		.attr("shape-rendering","crispEdges")
		.attr("font-family","sans-serif")
		.attr("font-size","11px")
    .call(yAxis);


}

function question1(data) {
	siteSegmentBreakdown(data, currentNetwork, currentSegment);

}

function siteSegmentBreakdown(data, site, segment) {
	//Clear the old graph
	d3.select("#question1").selectAll("g").remove();

	//Generate the proper data array for the bars
	var segmentData = data[segment];
	var graphData = []
	for (var demographic in segmentData) {
		graphData.push({name: demographic, height: barScale * segmentData[demographic][site]})
	}

	var startX = (1000 - graphData.length * (barWidth + barMargin)) / 2 + 100
	var startY = 100

	//Make the bars
	d3.select("#question1").selectAll("g")
		.data(graphData)
		.enter()
		.append("g")
			.append("rect")
				.attr("x", function(d, i) {return startX + i * barWidth + (i) * barMargin;})
				.attr("y", function(d, i) {return startY + barScale * 100 - d.height;})
				.attr("width", barWidth)
				.attr("height", function(d, i) {return d.height;})
				.style("fill", networkColors[site]);

	//Make the text labels for the categories
	d3.select("#question1").selectAll("g").append("text")
		.text(function(d) {return d.name;})
		.attr("fontsize",15)
		.attr("x", function(d, i) {return startX + (i + .5) * barWidth + (i) * barMargin;})
		.attr("y",startY + 100 * barScale + 15 )
		.style("text-anchor", "middle");

	//Make the axis
	var yAxis = d3.svg.axis()
		.scale(d3.scale.linear().domain([0, 100]).range([100 * barScale, 0]))
		.orient("left");
	d3.select("#question1")
		.append("g")
			.attr("class", "y axis")
			.attr("fill","none")
			.attr("stroke","black")
			.attr("shape-rendering","crispEdges")
			.attr("font-family","sans-serif")
			.attr("font-size","11px")
			.attr("transform", "translate(" + startX + ", " + startY + ")")
			.call(yAxis);

	//Title the graph
	d3.select("#question1")
		.append("g")
			.append("text")
				.attr("x", startX + graphData.length * (barWidth + barMargin) / 2)
				.attr("y", startY - 20)
				.attr("font-size", "24px")
				.style("text-anchor", "middle")
				.text("Percent of internet users who use " + site + " broken down by " + segment);

	//Label the x axis
	d3.select("#question1")
		.append("g")
			.append("text")
				.attr("x", startX + graphData.length * (barWidth + barMargin) / 2)
				.attr("y", startY + barScale * 100 + 50)
				.attr("font-size", "18px")
				.style("text-anchor", "middle")
				.text(axisLabel[segment]);

	//Label the y axis
	d3.select("#question1")
		.append("g")
			.append("text")
				.attr("font-size", "18px")
				.style("text-anchor", "middle")
				.attr("transform", "translate(" + (startX - 50) + ", " + (startY + barScale * 50) + ")rotate(-90)")
				.text("Percent of internet users who use " + site);
}

//COnvert data into D3able datatype
function parseData(presentSegment, segment) {
		var formattedData = {};
	formattedData["Demographic"] = segment;
	
	var categoryList = [];
	for (var key in presentSegment) {
		var categoryInfo = {};
		categoryInfo["Name"] = key;
		var networkList = [];
		for (var social in presentSegment[key]) {
			var networkObject = {};
			networkObject["Name"] = social;
			networkObject["Percent"] = presentSegment[key][social];
			networkList.push(networkObject);
		}

		categoryInfo["Networks"] = networkList;
		categoryList.push(categoryInfo)
	}
	formattedData["Categories"] = categoryList;

	return formattedData;

}

