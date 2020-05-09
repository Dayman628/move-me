var searchMovers = true;
var searchStorage = true;
var searchStorage = true;
var searchTrucks = true;

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
            object.url = response.businesses[i].url;
            arr.push(object);
        }
        listResults(arr);
    })
}

function listResults(arr) {
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        var listItem = $("<div class='list-item'></div>");
        var name = $("<a target='_blank' href='" + arr[i].url + "'><h3>" + arr[i].name + "</h3></a>");
        setRating(arr[i]);
        var rating = $("<img src='" + arr[i].stars + "'></a>");
        listItem.append(name, rating);
        $("#results").append(listItem);
    }
}

function setRating(business) {
    if (business.rating === 0) {
        business.stars = "./assets/yelp-stars/regular_0.png"
    }
    else if (business.rating === 1) {
        business.stars = "./assets/yelp-stars/regular_1.png"
    }
    else if (business.rating === 1.5) {
        business.stars = "./assets/yelp-stars/regular_1_half.png"
    }
    else if (business.rating === 2) {
        business.stars = "./assets/yelp-stars/regular_2.png"
    }
    else if (business.rating === 2.5) {
        business.stars = "./assets/yelp-stars/regular_2_half.png"
    }
    else if (business.rating === 3) {
        business.stars = "./assets/yelp-stars/regular_3.png"
    }
    else if (business.rating === 3.5) {
        business.stars = "./assets/yelp-stars/regular_3_half.png"
    }
    else if (business.rating === 4) {
        business.stars = "./assets/yelp-stars/regular_4.png"
    }
    else if (business.rating === 4.5) {
        business.stars = "./assets/yelp-stars/regular_4_half.png"
    }
    else if (business.rating === 5) {
        business.stars = "./assets/yelp-stars/regular_5.png"
    }
}

