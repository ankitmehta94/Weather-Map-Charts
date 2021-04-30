/**
 * Created by ankit on 4/5/17.
 */
angular.module('Weather-Map').factory('dataFactory',['$http',function ($http) {
   var dataFactory = {};
   var OWMEndPoint = 'http://api.openweathermap.org/data/2.5';
   var unit = '&units=metric';
   var OWMKey = '&appid=779777aefcb32182044b197deca1c179';
    dataFactory.weatherByCityName = function(cityName) {

        return $http({
            method : 'GET',
            url : OWMEndPoint+'/weather?q='+cityName+unit+OWMKey,
            headers: {'Content-Type': 'application/json'}
        }).then(function(result){
            return result ;
        }, function(error) {
            console.log(error);
            return null;
        });
    };
    dataFactory.wikiByCityName = function(cityName) {
        if(cityName){
            var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles='+cityName+'&origin=*';
            return $.getJSON(url, function(data){
                return data.query;
            });
        }

    };
    dataFactory.sixteenDayForecastByCityName = function(cityName) {

        return $http({
            method : 'GET',
            url : OWMEndPoint+'/forecast/daily?q='+cityName+unit+'&cnt=16'+OWMKey,
            headers: {'Content-Type': 'application/json'}
        }).then(function(result){
            return result ;
        }, function(error) {
            console.log(error);
            return null;
        });
    };
    dataFactory.sixteenDayForecastByGeoLocation = function(lat, lng) {

        return $http({
            method : 'GET',
            url : 'http://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat+'&lon='+lng+unit+'&cnt=16'+OWMKey,
            headers: {'Content-Type': 'application/json'}
        }).then(function(result){
            return result ;
        }, function(error) {
            console.log(error);
            return null;
        });
    };
    dataFactory.weatherByGeoLocation = function(lat, lng) {

        return $http({
            method : 'GET',
            url : OWMEndPoint+'/weather?lat='+lat+'&lon='+lng+unit+OWMKey,
            headers: {'Content-Type': 'application/json'}
        }).then(function(result){
            return result ;
        }, function(error) {
            console.log(error);
            return null;
        });
    };

   return dataFactory;
}]);