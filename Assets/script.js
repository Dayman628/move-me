// on click, removeClass("hidden") for the second section, and addClass("hidden") to first page section and the background image
// get APIs working
// add improvements and functionalities once basic MVP works


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

// code that initializes the google map
// var map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: currentLocation,
//         zoom: 12
//     });
// }
// Add code for when user selects "use my current location"
// getLocation();

// When address search bar is added - Google API can autocomplete addresses and convert them to coordinates and update the currentLocation variable
