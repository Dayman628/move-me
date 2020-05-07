var movers = [];
var storage = [];
var supplies = [];
var trucks = [];

// Get results on a yelp search (search term, array to push results to)
function searchYelp(search, arr) {
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=10&radius=8000&term=" + search + "&latitude=" + currentLocation.lat + "&longitude=" + currentLocation.lng;
    $.ajax({
        url: queryURL,
        headers: {
            'Authorization': 'Bearer D_nH9CvolaBKegnkzTPM_ixwyav9S9h385FhF7zV7_F9qwlwNIjgmIhZgOQmPhA9aXfgpNL4x2136v-lGNHXGYmJYvR0yK7ZHutt_hT2FqkBK3IydmRWrPtuIOCwXnYx'
        },
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        console.log(response);
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

function listResults(arr) {
    for (var i = 0; i < arr.length; i++) {
        
    }
}

searchYelp('movers', movers);

