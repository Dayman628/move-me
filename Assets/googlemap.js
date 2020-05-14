// Default current location
currentLocation = {
    lat: 33.448376,
    lng: -112.074036
};

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
$("#searchBtn").on("click", function (e) {
    e.preventDefault();
    geocodeAddress($("#userAddress").val());
})

// New address search button
$("#newSearch").on("click", function (e) {
    e.preventDefault();
    geocodeAddress($("#newAddress").val());
})

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

// Function that initializes Google Map
var markers = []
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: currentLocation,
        mapTypeId: 'roadmap'
    });
};

function mapCenter(coords) {
    map.setCenter(coords);
}

// Load icons function to be called when Yelp list is loaded
function loadIcons() {

    // Reloads map
    initMap();

    // Icons block
    var iconBase = 'https://raw.githubusercontent.com/Dayman628/move-me/master/Assets/images/';
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

    // Conversion of coordinates and integration of icon markers into pins
    for (let i = 0; i < 10; i++) {
        // Empty objects for the pin information
        var movers = {};
        var storage = {};
        var trucks = {};

        // Pins array and contents for map
        var pins = [

            {
                pinPosition: currentLocation,
                pinType: 'location',
                pinInfo: 'HOME'
            }
        ];
        if (results.movers.length) {
            if (results.movers[i]) {
                movers = {
                    lat: results.movers[i].coords.latitude,
                    lng: results.movers[i].coords.longitude,
                };
                pins.push({
                    pinPosition: movers,
                    pinType: 'movers',
                    pinInfo: "<div><a target='_blank' href=" + results.movers[i].url + ">" + results.movers[i].name + "</a>" +
                        "<div><img src='" + results.movers[i].stars + "'>  <i style='color: #d32323;' class='fab fa-yelp'></i></div>" +
                        "</div>",
                })
            };
        }
        if (results.storage.length) {
            if (results.storage[i]) {
                storage = {
                    lat: results.storage[i].coords.latitude,
                    lng: results.storage[i].coords.longitude,
                };
                pins.push({
                    pinPosition: storage,
                    pinType: 'storage',
                    pinInfo: "<div><a target='_blank' href=" + results.storage[i].url + ">" + results.storage[i].name + "</a>" +
                        "<div><img src='" + results.storage[i].stars + "'>  <i style='color: #d32323;' class='fab fa-yelp'></i></div>" +
                        "</div>",
                })
            };
        }
        if (results.trucks.length) {
            if (results.trucks[i]) {
                trucks = {
                    lat: results.trucks[i].coords.latitude,
                    lng: results.trucks[i].coords.longitude,
                };
                pins.push({
                    pinPosition: trucks,
                    pinType: 'trucks',
                    pinInfo: "<div><a target='_blank' href=" + results.trucks[i].url + ">" + results.trucks[i].name + "</a>" +
                        "<div><img src='" + results.trucks[i].stars + "'>  <i style='color: #d32323;' class='fab fa-yelp'></i></div>" +
                        "</div>",
                })
            };
        }

        // For each loop to pin each result
        pins.forEach(function (becomes) {

            var infowindow = new google.maps.InfoWindow({
                content: becomes.pinInfo
            });

            var marker = new google.maps.Marker({
                position: becomes.pinPosition,
                icon: icons[becomes.pinType].icon,
                map: map,
            });
            markers.push(marker);

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });

            $('#viewPinInfo').on('click', function () {
                infowindow.open(map, marker);
            });

            $('#clearPinInfo').on('click', function () {
                infowindow.close(map, marker);
            });

        });
    };
};

// Clear out pin function for when boxes are unchecked and then reload


// when a user unchecks, need to clear it out, and then RECHECK

// Removes the markers from the map, but keeps them in the array
//   function clearMarkers() {
//     loadIcons.setMap(null);
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
