// Using Google Maps API to autocomplete the search bar
function initSearch() {
    var input = document.getElementById('search-bar');
    new google.maps.places.Autocomplete(input);
}
google.maps.event.addDomListener(window, 'load', initSearch);