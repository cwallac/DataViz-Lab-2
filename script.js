window.addEventListener("load",run,false);

var networkColors = {
	"Twitter":"#AA3939",
	"LinkedIn":"#226666",
	"Facebook": "#7B9F35",
	"Instagram": "#2D882D",
	"Pinterest": "#AA6C39"
}
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
		"Less than 30,000":{
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

var d3Data = [
{
"Demographic":"Region",
"Categories":[
	{
	"Name":"Urban",
	"Networks": [
		{
			"Name":"Twitter",
			"Percent":30
		},
		{
			"Name":"LinkedIn",
			"Percent":30
		},
		{
			"Name":"Facebook",
			"Percent":74
		},
		{
			"Name":"Instagram",
			"Percent":32
		},
		{
			"Name":"Pinterest",
			"Percent":26
		}
	]
	},
	{
	"Name":"Suburban",
	"Networks": [
		{
			"Name":"Twitter",
			"Percent":21
		},
		{
			"Name":"LinkedIn",
			"Percent":26
		},
		{
			"Name":"Facebook",
			"Percent":72
		},
		{
			"Name":"Instagram",
			"Percent":28
		},
		{
			"Name":"Pinterest",
			"Percent":34
		}
	]
	},
		{
	"Name":"Rural",
	"Networks": [
		{
			"Name":"Twitter",
			"Percent":15
		},
		{
			"Name":"LinkedIn",
			"Percent":12
		},
		{
			"Name":"Facebook",
			"Percent":67
		},
		{
			"Name":"Instagram",
			"Percent":18
		},
		{
			"Name":"Pinterest",
			"Percent":30
		}
	]
	}
	
	]
},
{
"Demographic":"Income",
"Categories":[
	{
	"Name":"< 30,000",
	"Networks": [
		{
			"Name":"Twitter",
			"Percent":21
		},
		{
			"Name":"LinkedIn",
			"Percent":17
		},
		{
			"Name":"Facebook",
			"Percent":73
		},
		{
			"Name":"Instagram",
			"Percent":26
		},
		{
			"Name":"Pinterest",
			"Percent":24
		}
	]
	},
	{
	"Name":"30,000 - 49,999",
	"Networks": [
		{
			"Name":"Twitter",
			"Percent":19
		},
		{
			"Name":"LinkedIn",
			"Percent":21
		},
		{
			"Name":"Facebook",
			"Percent":72
		},
		{
			"Name":"Instagram",
			"Percent":27
		},
		{
			"Name":"Pinterest",
			"Percent":37
		}
	]
	},
		{
	"Name":"50,000 -74,999",
	"Networks": [
		{
			"Name":"Twitter",
			"Percent":25
		},
		{
			"Name":"LinkedIn",
			"Percent":32
		},
		{
			"Name":"Facebook",
			"Percent":66
		},
		{
			"Name":"Instagram",
			"Percent":30
		},
		{
			"Name":"Pinterest",
			"Percent":41
		}
	]
	},
	{
	"Name":"75,000 +",
	"Networks": [
		{
			"Name":"Twitter",
			"Percent":26
		},
		{
			"Name":"LinkedIn",
			"Percent":41
		},
		{
			"Name":"Facebook",
			"Percent":78
		},
		{
			"Name":"Instagram",
			"Percent":26
		},
		{
			"Name":"Pinterest",
			"Percent":30
		}
	]
	}
	
	]
}
]



//drawAll(data,50,150);
//draw(d3Data);
drawSegment(data, "Region");
}

function drawSegment(data, segment) {
	var presentSegment = data[segment];

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

	console.log(formattedData);
	//Formatting parameters
	var barWidth = 35;
	var barMargin = 5;
	var titleHeight = 40;
	var barTitleHeight = 20;

	var startX = 200;
	var startY = 250;
	var currentX = 200;
	var currentY = 250;
	var deltaX = 210;

	//Scale function for height of question 2 bars
	var yScale = d3.scale.linear()
    .domain([0,100])
    .range([200,0]);

    //Axis object we will add
    var yAxis = d3.svg.axis()
                  .orient("left")
                  .scale(yScale)
                  .ticks(4);

    //All info across a demographic lives here          
	var wholeSlice = d3.select("svg").append("g")
		.attr("id",function(d) {
				return data["Name"];
			})
			.attr("y", function() {
				return startY;
			})
			.attr("x", function(d, i) {
				return startX 
			});
	
	wholeSlice.append("text")
			.text(function() {
				return "Social Media Use Across " + formattedData["Demographic"];
			})
			.attr("y", function() {
				return startY - yScale(0);
			})
			.attr("x",function() {
				//console.log(d3.select(this.parentNode).datum()["Categories"].length);
				return startX + formattedData["Categories"].length/2*deltaX
				- this.getComputedTextLength()/2;
			})
			.attr("font-size",function() {
				return barTitleHeight;
			});

	var socialSegment = wholeSlice.selectAll("g")
		.data(function() {
			return formattedData["Categories"];
		})
		.enter().append("g");

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
			.append("text")
				.text(function(d) {
					return d["Name"];
				})
				.attr("font-size",15)
				.attr("x", function() {
					return parseFloat(d3.select(this.parentNode).attr("x")) + 
					(barWidth + barMargin)*2.5 - this.getComputedTextLength()/2;
				})
				.attr("y", function() {
					return parseInt(d3.select(this.parentNode).attr("y")) + barTitleHeight;
				})
			;

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


