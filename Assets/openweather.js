
var APIKey = "644e2fd49d4e3e04ae6b482ca8428be6";

var longitude = currentLocation.lng;
var latitude = currentLocation.lat;

var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly&appid=" + APIKey;
    
//var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey;
  
$.ajax({
  url: queryURL,
  method: "GET" 
}).then(function(response) {

$("#weatherSpot").css('text-align','center');
$("#weatherSpot").css('background-color','DeepSkyBlue');


  var timeValue = $("<p>");
  $("#weatherSpot").append(timeValue);
  timeValue.css("font-size", "10px");
 // timeValue.css('text-align','center')
   // JSON timestamp
   var timeStamp = response.daily[0].dt;
  console.log(timeStamp)
   
  
   // Convert timestamp to milliseconds
   var date = new Date(timeStamp*1000);
 
   var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
   var dayOfWeek = days[date.getDay()]
  console.log(dayOfWeek)
  timeValue.text(dayOfWeek)


var iconEl = $("<img>");
$("#weatherSpot").append(iconEl);
var iconId = response.daily[0].weather[0].icon;
var iconLink = "http://openweathermap.org/img/wn/" + iconId + "@2x.png";
iconEl.attr("src",iconLink);
iconEl.width(30); 
iconEl.height(30);


 var dayOneDiv = $("<div>");
 $("#weatherSpot").append(dayOneDiv);
 dayOneDiv.addClass("dayOne");
 dayOneDiv.css("font-size", "10px");
// dayOneDiv.css('text-align','center')
 console.log(response);
// for (var i = 0; i < response.daily.length; i++) {
   console.log(response.daily.length)

   // to fahrenheit
 var tempFMax = (parseInt(response.daily[0].temp.max - 273.15) * 1.80 + 32).toFixed(0);
 var tempFMin = (parseInt(response.daily[0].temp.min - 273.15) * 1.80 + 32).toFixed(0);

 // add temp content to html
 //$(".temp").text("Temparature: " + tempF.toFixed(2) + " °F");
  $(".dayOne").text("H: " + tempFMax + "°F   " + "  L: " + tempFMin + "°F");
 //}

  
});