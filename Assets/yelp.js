var search = {
    movers: true,
    storage: true,
    supplies: true,
    trucks: true
};

var results = {
    movers: [],
    storage: [],
    supplies: [],
    trucks: [],
};

function completeSearches() {
    results = {
        movers: [],
        storage: [],
        supplies: [],
        trucks: [],
    };
    if (search.movers === true) {
        searchYelp('movers', results.movers);
    }
    if (search.storage === true) {
        searchYelp('storage unit', results.storage);
    }
    if (search.supplies === true) {
        searchYelp('packing supplies', results.supplies);
    }
    if (search.trucks === true) {
        searchYelp('truck rental', results.movers);
    }
    if (search.movers === false
        && search.storage === false
        && search.supplies === false
        && search.trucks === false) {
        $("#results").html("");
    }
}

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

// list the yelp results
function listResults(arr) {
    $("#results").html("");
    for (var i = 0; i < arr.length; i++) {
        var listItem = $("<div class='list-item'></div>");
        var name = $("<a target='_blank' href='" + arr[i].url + "'><h3>" + arr[i].name + "</h3></a>");
        setRating(arr[i]);
        var rating = $("<img src='" + arr[i].stars + "'>  <i style='color: #d32323;' class='fab fa-yelp'></i>");
        listItem.append(name, rating);
        $("#results").append(listItem);
    }
    // console.log(results);
    loadIcons();
}

// set the rating image for each result
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

// when a checkbox is pressed
$(".filter").on("change", function (event) {
    var filter = $(this).attr("data-filter")
    if (search[filter] === true) {
        search[filter] = false;
        results[filter] = [];
    } else {
        search[filter] = true;
    }
    completeSearches();
    console.log(results);
    // deleteMarkers();
})
