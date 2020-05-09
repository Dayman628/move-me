// Using Google Maps API to autocomplete the search bar
// function initSearch() {
//     var input = document.getElementById('search-bar');
//     new google.maps.places.Autocomplete(input);
// }
// google.maps.event.addDomListener(window, 'load', initSearch);

// Obtains device location coordinates
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentLocation.lat = position.coords.latitude;
            currentLocation.lng = position.coords.longitude;
            if (mainScreen === false) {
                revealMain();
            }
            locationChanged();
        });
    }
}

// Code that initializes the google map
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: currentLocation,
        zoom: 12
    });

    // // Marker icon base
    // var iconBase = 'https://github.com/Dayman628/move-me/tree/master/Assets';
    // var icons = {
    //     location: {
    //         name: 'Current Location',
    //         icon: inconBase + 'house.PNG'
    //     },
    //     movers: {
    //         name: 'Movers',
    //         icon: iconBase + 'people-carry.PNG'
    //     },
    //     storage: {
    //         name: 'Storage',
    //         icon: iconBase + 'warehouse.PNG'
    //     },
    //     supplies: {
    //         name: 'Moving Supplies',
    //         icon: iconBase + 'box-open.PNG'
    //     },
    //     rental: {
    //         name: 'Moving Truck Rental',
    //         icon: iconBase + 'truck.PNG'
    //     }
    // };

    // var features = [
    //     {
    //         position: new google.maps.LatLng(33.448376, -112.074036),
    //         type: 'currentLocation'
    //     },
    // ];

    // features.forEach(function (feature) {
    //     var marker = new google.maps.Marker({
    //         position: feature.position,
    //         icon: icons[feature.type].icon,
    //         map: map
    //     });
    // });
}



// Add code for when user selects "use my current location"
// getLocation();
