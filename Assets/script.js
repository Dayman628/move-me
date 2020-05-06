// on click, removeClass("hidden") for the second section, and addClass("hidden") to first page section and the background image

var movers = []
var currentLocation = {
    lat: 33.448376,
    lng: -112.074036
};

// Obtains device location coordinates
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentLocation.lng = position.coords.longitude;
            currentLocation.lat = position.coords.latitude;
        });
    }
}

// Get results on a yelp search (search term, array to push results to)
function searchYelp(search, arr) {
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + search + "&latitude=" + currentLocation.latitude + "&longitude=" + currentLocation.longitude;
    $.ajax({
        url: queryURL,
        headers: {
            'Authorization': 'Bearer D_nH9CvolaBKegnkzTPM_ixwyav9S9h385FhF7zV7_F9qwlwNIjgmIhZgOQmPhA9aXfgpNL4x2136v-lGNHXGYmJYvR0yK7ZHutt_hT2FqkBK3IydmRWrPtuIOCwXnYx'
        },
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        // Reformats and stores business results to make them easy to access
        for (var i = 0; i < response.businesses.length; i++) {
            var object = {};
            object.name = response.businesses[i].name;
            object.phone = response.businesses[i].phone;
            object.coords = response.businesses[i].coordinates;
            object.rating = response.businesses[i].rating;
            arr.push(object);
        }
    })
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
