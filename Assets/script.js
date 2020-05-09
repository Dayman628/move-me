// on click, removeClass("hidden") for the second section, and addClass("hidden") to first page section and the background image
// get APIs working
// add improvements and functionalities once basic MVP works


// Test current location
var currentLocation = {
    lat: 33.448376,
    lng: -112.074036
};

// Live current location
// var currentLocation = {
//     lat: "",
//     lng: ""
// };

var mainScreen = false;

// function for when the current location changes
function locationChanged() {
    searchYelp('movers', movers);
    searchYelp('storage', storage);
    searchYelp('packing supplies', supplies);
    searchYelp('truck rental', movers);
}

// reveal the main page
function revealMain() {
    $(".front-page").attr("class", "hidden");
    $(".main-page").removeClass("hidden");
    mainScreen = true;
}

// When skip button is clicked
$("#skip").on("click", function () {
    revealMain();
});

// Get current location
$("#currentAddress").on("click", function() {
    getLocation();
})