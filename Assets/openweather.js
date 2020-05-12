
function getWeather(){
  $("#weatherSpot").html("");
  var APIKey = "644e2fd49d4e3e04ae6b482ca8428be6";

  var longitude = currentLocation.lng;
  var latitude = currentLocation.lat;

  var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly&appid=" + APIKey; 
    
  $.ajax({
    url: queryURL,
    method: "GET" 
  }).then(function(response) {

    var dayArray = ["dayOne","dayTwo","dayThree","dayFour","dayFive"];
    var iconArray = ["iconOne","iconTwo","iconThree","iconFour","iconFive"];
    var tempArray = ["tempOne","tempTwo","tempThree", "tempFour","tempFive"];

    var weatherSpotDiv = $("#weatherSpot");
    weatherSpotDiv.css('text-align','center');
    weatherSpotDiv.css('background-color','white');
    weatherSpotDiv.css('display', 'inline-flex');

    for (var i = 0; i < 5; i++) {
      var eachDayDiv = $("<div>");
      eachDayDiv.addClass(dayArray[i]);
      eachDayDiv.css('padding', '5px');
      eachDayDiv.css('border', '5px solid rgb(140, 212, 212)'); 
      eachDayDiv.css('border-radius','10%');
      weatherSpotDiv.append(eachDayDiv);
      
      // Displaying day of the week
      var timeValue = $("<p>");
      eachDayDiv.append(timeValue);
      timeValue.css("font-size", "10px");
      // JSON timestamp
      var timeStamp = response.daily[i].dt;
    
      // Convert timestamp to milliseconds
      var date = new Date(timeStamp*1000);
      var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
      var dayOfWeek = days[date.getDay()]
      timeValue.text(dayOfWeek)
      
      // Displaying weather icon
      var iconEl = $("<img>");
      iconEl.addClass(iconArray[i]);
      eachDayDiv.append(iconEl);
      var iconId = response.daily[i].weather[0].icon;
      var iconLink = "http://openweathermap.org/img/wn/" + iconId + "@2x.png";
      $("." + iconArray[i]).attr("src",iconLink);
      $("." + iconArray[i]).width(30); 
      $("." + iconArray[i]).height(30);

      // Displaying High and Low Temperature
      var dayOneDiv = $("<div>");
      eachDayDiv.append(dayOneDiv);
      dayOneDiv.addClass(tempArray[i]);
      dayOneDiv.css("font-size", "10px");
    
      // to fahrenheit
      var tempFMax = (parseInt(response.daily[i].temp.max - 273.15) * 1.80 + 32).toFixed(0);
      var tempFMin = (parseInt(response.daily[i].temp.min - 273.15) * 1.80 + 32).toFixed(0);
      dayOneDiv.text("H: " + tempFMax + "°F   " + "   L:   " + tempFMin + "°F  ");    
    }
  });
}












  // ------------- working code 050920 for a day if the above code does not work -----------------//

  // $("#weatherSpot").css('text-align','center');
  // $("#weatherSpot").css('background-color','DeepSkyBlue');
  // var timeValue = $("<p>");
  // $("#weatherSpot").append(timeValue);
  // timeValue.css("font-size", "10px");
  // // JSON timestamp
  // var timeStamp = response.daily[0].dt;
   
  // // Convert timestamp to milliseconds
  // var date = new Date(timeStamp*1000);
  // var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  // var dayOfWeek = days[date.getDay()]
  // console.log(dayOfWeek)
  // timeValue.text(dayOfWeek)

  // var iconEl = $("<img>");
  // $("#weatherSpot").append(iconEl);
  // var iconId = response.daily[0].weather[0].icon;
  // var iconLink = "http://openweathermap.org/img/wn/" + iconId + "@2x.png";
  // iconEl.attr("src",iconLink);
  // iconEl.width(30); 
  // iconEl.height(30);


  // var dayOneDiv = $("<div>");
  // $("#weatherSpot").append(dayOneDiv);
  // dayOneDiv.addClass("dayOne");
  // dayOneDiv.css("font-size", "10px");
  // // for (var i = 0; i < response.daily.length; i++) {

  //  // to fahrenheit
  // var tempFMax = (parseInt(response.daily[0].temp.max - 273.15) * 1.80 + 32).toFixed(0);
  // var tempFMin = (parseInt(response.daily[0].temp.min - 273.15) * 1.80 + 32).toFixed(0);

  // // add temp content to html
  // //$(".temp").text("Temparature: " + tempF.toFixed(2) + " °F");
  //   $(".dayOne").text("H: " + tempFMax + "°F   " + "  L: " + tempFMin + "°F");
  // //}
