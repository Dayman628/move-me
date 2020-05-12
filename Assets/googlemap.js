

// google.maps.event.addDomListener(window, 'load', initSearch);

// Default current location
currentLocation = {
    lat: 33.448376,
    lng: -112.074036
};

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
        zoom: 12,
        center: currentLocation,
        mapTypeId: 'roadmap'
    });
};

// Load icons function to be called when Yelp list is loaded
function loadIcons() {

    // Reloads map
    initMap();

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
        trucks: {
            icon: iconBase + 'truck.PNG'
        },
    };

    // Convert the long/lat data for use with map pins
    for (let i = 0; i < 3; i++) {
        // var info = results.movers[i].name;

        var movers = {
            lat: results.movers[i].coords.latitude,
            lng: results.movers[i].coords.longitude,
        };
        var storage = {
            lat: results.storage[i].coords.latitude,
            lng: results.storage[i].coords.longitude,
        };
        var trucks = {
            lat: results.trucks[i].coords.latitude,
            lng: results.trucks[i].coords.longitude,
        };

        // Pins for map
        var pins = [

            {
                pinPosition: currentLocation,
                pinType: 'location',
                pinName: 'Home'
            },
            {
                pinPosition: movers,
                pinType: 'movers',
                pinName: results.movers[i].name,
                pinURL: results.movers[i].url
            },
            {
                pinPosition: storage,
                pinType: 'storage',
                pinName: results.storage[i].name,
                pinURL: results.storage[i].url
            },
            {
                pinPosition: trucks,
                pinType: 'trucks',
                pinName: results.trucks[i].name,
                pinURL: results.trucks[i].url
            },
        ];

        // For each loop to pin each result
        pins.forEach(function (becomes) {

            var infowindow = new google.maps.InfoWindow({
                content: becomes.pinName
            });

            var marker = new google.maps.Marker({
                position: becomes.pinPosition,
                icon: icons[becomes.pinType].icon,
                map: map
            });
            markers.push(marker)
            infowindow.open(map, marker);

            var linkURL = becomes.pinURL;
            marker.addListener('click', function () {
                window.open(linkURL);
            });

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

