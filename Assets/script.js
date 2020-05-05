var movers = []
var currentLocation = {
    longitude: 0,
    latitude: 0
};

// Obtains device location coordinates
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentLocation.longitude = position.coords.longitude;
            currentLocation.latitude = position.coords.latitude;
            searchYelp('movers', movers);
            console.log(movers);
        });
    }
}

// Get results on a yelp search
function searchYelp(search, arr) {
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + search +"&latitude=" + currentLocation.latitude + "&longitude=" + currentLocation.longitude;
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

getLocation();


