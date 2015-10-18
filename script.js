window.addEventListener("load",run,false);

var barWidth = 10;
var barMargin = 2;
var titleHeight = 40;
var barTitleHeight = 20;

var y = d3.scale.linear()
    .domain([0,100])
    .range([100,0]);

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
draw(d3Data);
}



function draw(data) {
	var startX = 200;
	var startY = 200;
	var currentX = 200;
	var currentY = 200;
	var deltaX = 150;

	var barWidth = 20;
	var barMargin = 5;
	console.log(data.length);
	var demoGroup = d3.select("svg")

	var rows = demoGroup.selectAll("g")
		.data(data)
		.enter().append("g");
		
	rows
			.attr("id", function(d) {
				return d["Demographic"]
			})
			.attr("x",function() {
				currentX = startX;
				return currentX;
			})
			.attr("y", function() {
				var presentY = currentY;
				currentY += 100 + titleHeight;
				return presentY;
			})
			.append("text")
				.text(function(d) {
					console.log(d["Categories"].length);
					return d["Demographic"];
				})
				.attr("fontsize",30)
				.attr("x", function(d) {
					var centering = parseFloat(d["Categories"].length)/2*deltaX 
					- this.getComputedTextLength()/2;
					return parseInt(d3.select(this.parentNode).attr("x")) + centering;
				})
				.attr("y", function() {
					return parseInt(d3.select(this.parentNode).attr("y")) + titleHeight;
				});



					 //Set rough # of ticks
    




	var column = rows
		.selectAll("g")
		.data(function(d, i) {
			console.log(d["Categories"][i]);
			return d["Categories"];
		})
		.enter().append("g");


	column
			.attr("id",function(d) {
				return d["Name"];
			})
			.attr("y", function() {
				return d3.select(this.parentNode).attr("y");
			})
			.attr("x", function(d, i) {
				return parseInt(d3.select(this.parentNode).attr("x")) + i*deltaX
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

	var bars = column.selectAll("rect")
			.data(function(d) {
				return d["Networks"];
			})
			.enter().append("rect");
	bars
			.attr("id",function(d) {
			return d["Name"];
		})
			.attr("height",function(d)  {
				return 100 - y(d["Percent"]);
			})
			.attr("width",barWidth)
			.attr("y",function(d) {
				return parseInt(d3.select(this.parentNode).attr("y")) - (100 - y(d["Percent"])) ;
			})
			.attr("x",function(d, i) {
				return parseInt(d3.select(this.parentNode).attr("x")) + parseInt(i*(barWidth + barMargin));

			})
			.attr("fill",function(d) {
				return networkColors[d["Name"]];
			});

var xAxis = d3.svg.axis()
                  .orient("left")
                  .scale(y)
                  .ticks(2);
	rows.append("g")
		.attr("class", "y axis")
		.attr("transform", function() {
			return "translate(" + d3.select(this.parentNode).attr("x") +
			"," + (parseInt(d3.select(this.parentNode).attr("y")) - y(0)) + ")"
	})
		.attr("fill","none")
		.attr("stroke","black")
		.attr("shape-rendering","crispEdges")
		.attr("font-family","sans-serif")
		.attr("font-size","11px")
    .call(xAxis);
			

}

function drawSpecDemographic(name, data, startX, startY, group) {
	var socialNetworks = ["Twitter","Facebook","Pinterest","Instagram","LinkedIn"]

	

	var barPos = startX
	for (var key in data) {
		var height = data[key] ;
		;
		group.append("rect")
		.attr("y",startY - height)
		.attr("x",barPos)
		.attr("width",barWidth)
		.attr("height",height)
		.attr("fill",networkColors[key]);
		barPos += barWidth + barMargin;
	}
	group.append("text")
		.text(name)
		.attr("x",startX)
		.attr("fontsize",15)
		.attr("y",startY + 15 );
}

function drawDemographic(name, data, startX, startY, group) {
	group.append("text")
			.text(name)
			.attr("x",startX)
			.attr("fontsize",15)
			.attr("y",startY);
	for (var key in data) {
		var demoGroup = group.append("g");
		
		drawSpecDemographic(key, data[key], startX, startY - titleHeight, demoGroup)
		startX += 100
	}
}

function drawAll(data, startX, startY) {
	for (var key in data) {
		var demoGroup = d3.select("svg")
		.append("g");
		drawDemographic(key, data[key],startX, startY, demoGroup);
		startY += 100 + titleHeight;
	}
}