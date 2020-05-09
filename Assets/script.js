// on click, removeClass("hidden") for the second section, and addClass("hidden") to first page section and the background image
// get APIs working
// add improvements and functionalities once basic MVP works

// Test current location
currentLocation = {
    lat: 33.448376,
    lng: -112.074036
};

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
    $("#bg").attr("class", "hidden");
    $(".navbar").addClass("showNav");
    mainScreen = true;
};


// When skip button is clicked
$("#skip").on("click", function () {
    if (mainScreen === false) {
        revealMain();
    }
});

// Get current location
$("#currentAddress").on("click", function() {
    if (mainScreen === false) {
        getLocation();
    }
});
