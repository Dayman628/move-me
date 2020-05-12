// on click, removeClass("hidden") for the second section, and addClass("hidden") to first page section and the background image
// get APIs working
// add improvements and functionalities once basic MVP works

// Live current location
// var currentLocation = {
//     lat: '',
//     lng: ''
// };

var mainScreen = false;

// function for when the current location changes
function locationChanged() {
    completeSearches();
}

// reveal the main page
function revealMain() {
    $(".front-page").attr("class", "hidden");
    $(".main-page").removeClass("hidden");
    mainScreen = true;
};

// When skip button is clicked
$("#skip").on("click", function () {
    if (mainScreen === false) {
        revealMain();
    }
});

// Get current location
$("#currentAddress").on("click", function () {
    if (mainScreen === false) {
        getLocation();
    }
});

// Temp button for loading icons
$("#loadicon").on("click", function () {
    loadIcons();
});

// Using Google Maps API to autocomplete the search bar
function initSearch() {
    var input = document.getElementById('userAddress');
    new google.maps.places.Autocomplete(input);
}
google.maps.event.addDomListener(window, 'load', initSearch);

// Convert address into coordinates for accurate results
function geocodeAddress(address) {
    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDnRG3kLW44MTYI0s7fplt8aQMFvRe1glQ",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        currentLocation.lat = response.results[0].geometry.location.lat;
        currentLocation.lng = response.results[0].geometry.location.lng;
        revealMain();
        locationChanged();
    })
}

// When the search button is pressed
$("#searchBtn").on("click", function(e) {
    e.preventDefault();
    geocodeAddress($("#userAddress").val());
})