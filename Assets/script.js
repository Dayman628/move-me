// Main screen variable for when the show
var mainScreen = false;

// function for when the current location changes
function locationChanged() {
    completeSearches();
    getWeather();
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

// Using Google Maps API to autocomplete the search bar
function initSearch() {
    var input = document.getElementById('userAddress');
    new google.maps.places.Autocomplete(input);
    var input = document.getElementById('newAddress');
    new google.maps.places.Autocomplete(input);
}
google.maps.event.addDomListener(window, 'load', initSearch);


