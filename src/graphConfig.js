/**
 * Created by shipsy on 6/26/17.
 */
angular.module('Weather-Map').factory('graphConfig',[function () {
    var graphConfig = {};
    var colors = ["#6bd5ff","#f9741b"];
    graphConfig.lineMinMax = {
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
                axisLabel: 'Temperature (C) ',
                // tickFormat: function(d){
                //     return d3.format('')(d);
                // },
                axisLabelDistance: -10
            },

        },
        title: {
            enable: true,
            text: 'Pressure'
        },
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
                // tickFormat: function(d){
                //     return d3.format('')(d);
                // },
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
                // tickFormat: function(d){
                //     return d3.format('.0%')(d);
                // },
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