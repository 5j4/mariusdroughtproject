$(function(){

    var economic_losses = [
        {
            "key": "Low",
            "values": [
                {"x": "1", "y": 0.35},
                {"x": "2", "y": 0.73},
                {"x": "3", "y": 1.14},
                {"x": "4", "y": 1.55},
                {"x": "5", "y": 1.97},
                {"x": "6", "y": 2.40},
                {"x": "7", "y": 2.82},
                {"x": "8", "y": 3.25},
                {"x": "9", "y": 3.69},
                {"x": "10", "y": 4.12}
            ]
        },
        {
            "key": "Medium",
            "values": [
                {"x": "1", "y": 0.50},
                {"x": "2", "y": 0.87},
                {"x": "3", "y": 1.29},
                {"x": "4", "y": 1.70},
                {"x": "5", "y": 2.11},
                {"x": "6", "y": 2.51},
                {"x": "7", "y": 2.93},
                {"x": "8", "y": 3.33},
                {"x": "9", "y": 3.74},
                {"x": "10", "y": 4.15}
            ]
        },
        {
            "key": "High",
            "values": [
                {"x": "1", "y": 0.65},
                {"x": "2", "y": 1.02},
                {"x": "3", "y": 1.43},
                {"x": "4", "y": 1.84},
                {"x": "5", "y": 2.25},
                {"x": "6", "y": 2.66},
                {"x": "7", "y": 3.07},
                {"x": "8", "y": 3.48},
                {"x": "9", "y": 3.89},
                {"x": "10", "y": 4.3}
            ]
        }
    ];

    //
    // Scenario
    // Hypothetical drought severity	1	2	3	4	5	6	7	8	9	10
    // Low	0.35%	0.73%	1.14%	1.55%	1.97%	2.40%	2.82%	3.25%	3.69%	4.12%
    // Medium	0.50%	0.87%	1.29%	1.70%	2.11%	2.51%	2.93%	3.33%	3.74%	4.15%
    // high	0.65%	1.02%	1.43%	1.84%	2.25%	2.66%	3.07%	3.48%	3.89%	4.30%


    nv.addGraph(function() {
        var chart = nv.models.multiBarChart()
            .duration(500)
            // .barColor(d3.scale.category20().range())
            // .barColor(["#FF0000","#00FF00","#0000FF"])
            // .margin({bottom: 10, left: 70})
            // .showControls(true)
            // .showLegend(true)
            .reduceXTicks(false)
            .groupSpacing(0.1)
        ;

        chart.legend.vers('furious');

        chart.xAxis
            .axisLabel("Policy scenarios (1 soft restrictions, 10 severe restrictions) for low, medium, and high drought severity events")
            .axisLabelDistance(-5)
            // .tickFormat(d3.format(',.01f'))
            .tickFormat(d3.format(',f'));

        chart.yAxis
            // .axisLabel("Total output losses in the UK economy under different climate and policy scenarios. ")
            .axisLabel("Total output losses (%)")
            // .axisLabelDistance(35)
            // .showMaxMin(false)
            // .tickFormat(d3.format(',.2f'))
            .tickFormat(d3.format(',.1f'));

        d3.select('#chart svg')
            .datum(economic_losses)
            .transition().duration(500)
            .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
    });

});