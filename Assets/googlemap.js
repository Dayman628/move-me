var apiKey = "AIzaSyDetpwAhpDkX4o4m6ZJRGqMedOgP-_PvXw";

var longitude = currentLocation.lng;
var latitude = currentLocation.lat;
var radi = "4000"; // MAX 3 mile search radius (5000m)

// API for places search
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.448376,-112.074036&radius=4000&type=storage&key=AIzaSyDetpwAhpDkX4o4m6ZJRGqMedOgP-_PvXw
var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude + "," + longitude + "&radius=" + radi + "&type=storage&key=" + apiKey;

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.448376,-112.074036&radius=4000&type=storage&key=AIzaSyDetpwAhpDkX4o4m6ZJRGqMedOgP-_PvXw


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(queryURL)
});

// Using Google Maps API to autocomplete the search bar
// function initSearch() {
//     var input = document.getElementById('search-bar');
//     new google.maps.places.Autocomplete(input);
// }
// google.maps.event.addDomListener(window, 'load', initSearch);

// Obtains device location coordinates
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentLocation.lng = position.coords.longitude;
            currentLocation.lat = position.coords.latitude;
        });
    }
}

// code that initializes the google map
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: currentLocation,
        zoom: 12
    });
}
// Add code for when user selects "use my current location"
// getLocation();

// When address search bar is added - Google API can autocomplete addresses and convert them to coordinates and update the currentLocation variable

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
// var map, infoWindow;
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 6
//     });
//     infoWindow = new google.maps.InfoWindow;

//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             var pos = {
//                 lat: position.coords.latitude,
//                 lng: position.coords.longitude
//             };

//             infoWindow.setPosition(pos);
//             infoWindow.setContent('Location found.');
//             infoWindow.open(map);
//             map.setCenter(pos);
//         }, function () {
//             handleLocationError(true, infoWindow, map.getCenter());
//         });
//     } else {
//         // Browser doesn't support Geolocation
//         handleLocationError(false, infoWindow, map.getCenter());
//     }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//     infoWindow.setPosition(pos);
//     infoWindow.setContent(browserHasGeolocation ?
//         'Error: The Geolocation service failed.' :
//         'Error: Your browser doesn\'t support geolocation.');
//     infoWindow.open(map);
// }