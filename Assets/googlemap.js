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
        zoom: 12,
        center: currentLocation,
        mapTypeId: 'roadmap'
    });

    function loadIcons() {
        // Icon block
        var iconBase = 'https://raw.githubusercontent.com/Dayman628/move-me/master/Assets/';
        var icons = {
            location: {
                name: 'Current Location',
                icon: iconBase + 'house.PNG'
            },
            movers: {
                name: 'Movers',
                icon: iconBase + 'people-carry.PNG'
            },

            storage: {
                name: 'Storage',
                icon: iconBase + 'warehouse.PNG'
            },

            supplies: {
                name: 'Moving Supplies',
                icon: iconBase + 'box-open.PNG'
            },

            trucks: {
                name: 'Moving Truck Rental',
                icon: iconBase + 'truck.PNG'
            },

        };

        //     // fix var for results
        //     // var movers = {
        //     //     lat: results.movers[0].coords.latitude,
        //     //     lng: results.movers[0].coords.longitude
        //     // };

        var features = [
            {
                position: currentLocation,
                type: 'location'
            },
            //         // {
            //         //     position: movers,
            //         //     type: 'movers'
            //         // },
        ];

        features.forEach(function (feature) {
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map
            });
        });
    };
    loadIcons();

};


    // function loadIcons() {
    //     var iconBase = 'https://raw.githubusercontent.com/Dayman628/move-me/master/Assets/';
    //     var icons = {
    //         location: {
    //             name: 'Current Location',
    //             icon: iconBase + 'house.PNG'
    //         },

    //         movers: {
    //             name: 'Movers',
    //             icon: iconBase + 'people-carry.PNG'
    //         },

    //         storage: {
    //             name: 'Storage',
    //             icon: iconBase + 'warehouse.PNG'
    //         },

    //         supplies: {
    //             name: 'Moving Supplies',
    //             icon: iconBase + 'box-open.PNG'
    //         },

    //         trucks: {
    //             name: 'Moving Truck Rental',
    //             icon: iconBase + 'truck.PNG'
    //         },
    //     };

    //     var movers = {
    //         lat: results.movers.coords[0].latitude,
    //         lng: results.movers.coords.longtitude
    //     };

    //     var storage = {
    //         lat: results.storage.coords[0].latitude,
    //         lng: results.storage.coords.longtitude
    //     };

    //     var supplies = {
    //         lat: results.storage.coords[0].latitude,
    //         lng: results.storage.coords.longtitude
    //     };

    //     // var trucks = {
    //     //     lat: results.trucks.coords.latitude,
    //     //     lng: results.trucks.coords.longtitude
    //     // };

    //     // for (let i = 0; i < 5; i++) {
    //     //     var nearMover = {
    //     //     };
    //     // };

    //     //create for_loop for the maps
    //     var features = [
    //         {
    //             position: currentLocation,
    //             type: 'location'
    //         },

    //         {
    //             position: movers,
    //             type: 'movers'
    //         },

    //         {
    //             position: storage,
    //             type: 'storage'
    //         },

    //         {
    //             position: supplies,
    //             type: 'supplies'
    //         },
    //         // {
    //         //     position: trucks,
    //         //     type: 'trucks'
    //         // },

    //     ];

    //     // Markers for the map
    //     features.forEach(function (feature) {
    //         var marker = new google.maps.Marker({
    //             position: feature.position,
    //             icon: icons[feature.type].icon,
    //             map: map
    //         });
    //     });
    // };
    // loadIcons()

// };

// Add code for when user selects "use my current location"
// getLocation();

 //     // Test results
        //     // var results = {
        //     //     movers: {
        //     //         coords: {
        //     //             latitude: 33.4519882202148,
        //     //             longtitude: -112.12621307373
        //     //         },
        //     //     },

        //     //     storage: {
        //     //         coords: {
        //     //             latitude: 33.4233613627891,
        //     //             longtitude: -112.236363741523
        //     //         },
        //     //     },

        //     //     supplies: {
        //     //         coords: {
        //     //             latitude: 33.4499672,
        //     //             longitude: -112.0702225
        //     //         },
        //     //     },
        //     //     Rental truck example
        //     //     trucks: {
        //     //         coords: {
        //     //             latitude: 33.460163,
        //     //             longitude: -112.219559
        //     //         },
        //     //     },
        //     // };
