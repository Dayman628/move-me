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
        zoom: 10,
        center: currentLocation,
        mapTypeId: 'roadmap'
    });

};

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

    // var features = {
    //     position: '',
    //     type: '',
    // };

    for (let i = 0; i < 5; i++) {

        var movers = {
            lat: results.movers[i].coords.latitude,
            lng: results.movers[i].coords.longitude,
        };
        // features.position = movers;
        // features.type = 'movers';
        // var lat = results.movers[i].coords.latitude;
        // var lng = results.movers[i].coords.longitude;
        // console.log(movers.lat);
        // console.log(movers.lng);

        var features = [
            {
                position: currentLocation,
                type: 'location'
            },
            {
                position: movers,
                type: 'movers'
            },
        ];
    
        features.forEach(function (becomes) {
            var marker = new google.maps.Marker({
                position: becomes.position,
                icon: icons[becomes.type].icon,
                map: map
            });
            return marker
        });
    };

    console.log("passed thru")
};
