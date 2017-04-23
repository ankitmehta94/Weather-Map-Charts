angular.module('Weather-Map').controller('MapDisplayController', ['$scope', '$rootScope','$timeout','dataFactory', function ($scope, $rootScope,$timeout,dataFactory) {
    /////////////////////////////////////////////VARIABLES/////////////////////////////////////////
    var display = this;
    display.selctedNav = 'Normal';
    display.city = {name:''};
    var marker = null;
    /////////////////////////////////////////////FUNCTIONS/////////////////////////////////////////
    display.getWeatherFromCityName = function () {
        console.log(display.city.name);
        dataFactory.weatherByCityName(display.city.name).then(function (response) {
            console.log(response);
            placeMarker(response.data);
        })
    };
    var placeMarker = function (info) {
        if(marker) {
            marker.setMap(null);
        }
        marker = new google.maps.Marker({
            position: {lat: info.coord.lat, lng:info.coord.lon},
            map: map
        });
        map.panTo(marker.position);
        marker.setMap(map);
    };
    display.checkMarker = function () {
        console.log(map.getBounds().contains(marker.getPosition()));
    };
    display.draggableMarker = function () {
        if(marker) {
            marker.setMap(null);
        }
        marker = new google.maps.Marker({
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: {lat: 59.327, lng: 18.067}

        });
        map.panTo(marker.position);
        marker.setMap(map);
    };
    // $timeout(function () {
    //     var input = document.getElementById('mapAutocomplete');
    //     var autocomplete = new google.maps.places.Autocomplete(input);
    // },0);
}]);

angular.module('Weather-Map').directive('googleplace', ['$timeout', function($timeout) {
    return {
        require: 'ngModel',
        scope: {
            ngModel: '=',
            details: '=?'
        },
        link: function(scope, element, attrs, model) {
            var options = {
                types: ['(cities)'],
                componentRestrictions: {}
            };
            $timeout(function () {
                console.log(element[0]);
                scope.gPlace = new google.maps.places.Autocomplete(element[0], options);
                console.log(scope.gPlace.getPlace());
                google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                    var geoComponents = scope.gPlace.getPlace();
                    var latitude = geoComponents.geometry.location.lat();
                    var longitude = geoComponents.geometry.location.lng();
                    var addressComponents = geoComponents.address_components;
                    addressComponents = addressComponents.filter(function(component){
                        switch (component.types[0]) {
                            case "locality": // city
                                return true;
                            case "administrative_area_level_1": // state
                                return true;
                            case "country": // country
                                return true;
                            default:
                                return false;
                        }
                    }).map(function(obj) {
                        return obj.long_name;
                    });

                    addressComponents.push(latitude, longitude);

                    scope.$apply(function() {
                        scope.details = addressComponents; // array containing each location component
                        model.$setViewValue(element.val());
                    });
                });
            },0);

        }
    };
}]);