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
var markers = []
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: currentLocation,
        mapTypeId: 'roadmap'
    });
};

// Load icons function to be called when Yelp list is loaded
function loadIcons() {

    // Icon block
    var iconBase = 'https://raw.githubusercontent.com/Dayman628/move-me/master/Assets/';
    var icons = {
        location: {
            icon: iconBase + 'house.PNG'
        },
        movers: {
            icon: iconBase + 'people-carry.PNG'
        },
        storage: {
            icon: iconBase + 'warehouse.PNG'
        },
        supplies: {
            icon: iconBase + 'box-open.PNG'
        },
        trucks: {
            icon: iconBase + 'truck.PNG'
        },
    };

    // Convert the long/lat data for use with map pins
    for (let i = 0; i < 1; i++) {

        var movers = {
            lat: results.movers[i].coords.latitude,
            lng: results.movers[i].coords.longitude,
        };
        var storage = {
            lat: results.storage[i].coords.latitude,
            lng: results.storage[i].coords.longitude,
        };
        var supplies = {
            lat: results.supplies[i].coords.latitude,
            lng: results.supplies[i].coords.longitude,
        };
        // var trucks = {
        //     lat: results.trucks[i].coords.latitude,
        //     lng: results.trucks[i].coords.longitude,
        // };

        // Pins for map
        var pins = [
            {
                position: currentLocation,
                type: 'location'
            },
            {
                position: movers,
                type: 'movers'
            },
            {
                position: storage,
                type: 'storage'
            },
            {
                position: supplies,
                type: 'supplies'
            },
            // {
            //     position: trucks,
            //     type: 'trucks'
            // },
        ];

        // For each loop to pin each result
        pins.forEach(function (becomes) {
            var marker = new google.maps.Marker({
                position: becomes.position,
                icon: icons[becomes.type].icon,
                map: map
            });
            markers.push(marker)
        });
    };

    // Pins loaded console log
    console.log("markers pinned")
    // console.log(markers)
    // console.log(movers.lat);
    // console.log(movers.lng);
};

// Clear out pin function for when boxes are unchecked
// function clearMarkers() {
//     loadIcons(null);
// }
// function deleteMarkers() {
//     clearMarkers();
//     markers = [];
// }

// For loop to pin result, unused at the moment
// function setMarker() {
//     // for (let i = 0; i < pins.length; i++) {
//     var marker = new google.maps.Marker({
//         position: pins.position,
//         icon: icons[pins.type].icon,
//         map: map
//     });
//     // };
// };
// setMarker();

