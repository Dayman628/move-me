
var APIKey = "644e2fd49d4e3e04ae6b482ca8428be6";

var longitude = currentLocation.lng;
var latitude = currentLocation.lat;

var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly&appid=" + APIKey;
    
//var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey;
  
$.ajax({
  url: queryURL,
  method: "GET" 
}).then(function(response) {
  
 console.log(response);
 //$(".weatherSpot").html(response.name);
 //var iconId = response.weather[0].icon;

//  var iconLink = "http://openweathermap.org/img/wn/" + iconID + "@2x.png";
//  $(".weatherIcon").attr("src",iconLink);
//  $('.weatherIcon').width(50); 
//  $('.weatherIcon').height(50);

 
//  $(".wind").text("Wind: " + response.wind.speed + " MPH");
//  $(".humidity").text("Humidity: " + response.main.humidity + "%");
//  $(".uvindex").text("UV Index: ")
 
//  // to fahrenheit
//  var tempF = (response.main.temp - 273.15) * 1.80 + 32;

//  // add temp content to html
//  $(".temp").text("Temparature: " + tempF.toFixed(2) + " °F");
});
