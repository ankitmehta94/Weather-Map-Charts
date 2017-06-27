/**
 * Created by shipsy on 6/26/17.
 */
angular.module('Weather-Map').factory('graphConfig',[function () {
    var graphConfig = {};
    var colors = ["002D40","E54661"];
    graphConfig.area = {
        chart: {
            type: 'stackedAreaChart',
            height: 450,
            color: function(d,i){
                return (d.data && d.data.color) || colors[i % colors.length]
            },
            margin : {
                top: 20,
                right: 20,
                bottom: 30,
                left: 40
            },
            x: function(d){return d[0];},
            y: function(d){return d[1];},
            useVoronoi: false,
            clipEdge: true,
            duration: 100,
            useInteractiveGuideline: true,
            xAxis: {
                showMaxMin: false,
                ticks:11,
                tickFormat: function(d) {
                    return d3.time.format('%d/%m')(new Date(d))
                }
            },
            yAxis: {
                tickFormat: function(d){
                    return d3.format(',.2f')(d);
                }
            },
            zoom: {
                enabled: true,
                scaleExtent: [1, 10],
                useFixedDomain: false,
                useNiceScale: false,
                horizontalOff: false,
                verticalOff: true,
                unzoomEventType: 'dblclick.zoom'
            }
        }
    };
    graphConfig.line = {
        chart: {
            type: 'cumulativeLineChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 65
            },
            x: function(d){ return d[0]; },
            y: function(d){ return d[1]/100; },
            average: function(d) { return d.mean/100; },

            color: d3.scale.category10().range(),
            duration: 300,
            useInteractiveGuideline: true,
            clipVoronoi: false,

            xAxis: {
                axisLabel: 'X Axis',
                tickFormat: function(d) {
                    return d3.time.format('%d/%m')(new Date(d))
                },
                showMaxMin: false,
                staggerLabels: true
            },

            yAxis: {
                axisLabel: 'Y Axis',
                tickFormat: function(d){
                    return d3.format(',.1%')(d);
                },
                axisLabelDistance: 20
            }
        }
    };
    return graphConfig;
}]);