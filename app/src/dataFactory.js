/**
 * Created by ankit on 4/5/17.
 */
angular.module('Weather-Map').factory('dataFactory',['$http',function ($http) {
   var dataFactory = {};
   var OWMKey = '779777aefcb32182044b197deca1c179';
    dataFactory.weatherByCityName = function(cityName) {

        return $http({
            method : 'GET',
            url : 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+OWMKey,
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
            url : 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+cityName+'&units=metric&cnt=16&appid='+OWMKey,
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
            url : 'http://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat+'&lon='+lng+'&units=metric&cnt=16&appid='+OWMKey,
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
            url : 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid='+OWMKey,
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