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

$("#skip").on("click", function () {
    $(".front-page").attr("class", "hidden");
    $(".main-page").removeClass("hidden");
});