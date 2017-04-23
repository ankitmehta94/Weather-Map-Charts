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
   return dataFactory;
}]);