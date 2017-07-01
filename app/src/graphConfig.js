/**
 * Created by shipsy on 6/26/17.
 */
angular.module('Weather-Map').factory('graphConfig',[function () {
    var graphConfig = {};
    var colors = ["#6bd5ff","#f9741b"];
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
    graphConfig.linePressure =  {
        chart: {
            type: 'lineChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 40,
                left: 55
            },
            x: function(d){ return d.x; },
            y: function(d){ return d.y; },
            useInteractiveGuideline: true,
            xAxis: {
                axisLabel: 'Time (day)',
                ticks:11,
                tickFormat: function(d) {
                    return d3.time.format('%d/%m')(new Date(d))
                }
            },
            yAxis: {
                axisLabel: 'Pressure (hPa)',
                tickFormat: function(d){
                    return d3.format('.02f')(d);
                },
                axisLabelDistance: -10
            },

        },
        title: {
            enable: true,
            text: 'Pressure'
        },
    };
    graphConfig.lineHumidity =  {
        chart: {
            type: 'lineChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 40,
                left: 55
            },
            x: function(d){ return d.x; },
            y: function(d){ return d.y; },
            useInteractiveGuideline: true,
            xAxis: {
                axisLabel: 'Time (day)',
                ticks:11,
                tickFormat: function(d) {
                    return d3.time.format('%d/%m')(new Date(d))
                }
            },
            yAxis: {
                axisLabel: 'Humidity (%)',
                tickFormat: function(d){
                    return d3.format('.02f')(d);
                },
                axisLabelDistance: -10
            },

        },
        title: {
            enable: true,
            text: 'Humidity'
        },
    };
    return graphConfig;
}]);