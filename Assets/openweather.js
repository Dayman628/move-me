
function getWeather() {
  $("#weatherSpot").html("");
  $("#cityName").html("");
  var APIKey = "644e2fd49d4e3e04ae6b482ca8428be6";

  var longitude = currentLocation.lng;
  var latitude = currentLocation.lat;

  var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly&appid=" + APIKey;
  var queryCityURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey;


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    var dayArray = ["dayOne", "dayTwo", "dayThree", "dayFour", "dayFive"];
    var iconArray = ["iconOne", "iconTwo", "iconThree", "iconFour", "iconFive"];
    var tempArray = ["tempOne", "tempTwo", "tempThree", "tempFour", "tempFive"];

    var weatherSpotDiv = $("#weatherSpot");
    weatherSpotDiv.css('text-align', 'center');

    weatherSpotDiv.css('display', 'inline-flex');
    weatherSpotDiv.css('background-image', 'linear-gradient(to bottom, rgba(140,212,212,0), rgba(140,212,212,1))');
    weatherSpotDiv.css('border', '15px 50px 30px 5px')

    for (var i = 0; i < 5; i++) {
      var eachDayDiv = $("<div>");
      eachDayDiv.addClass(dayArray[i]);
      eachDayDiv.css('padding', '5px');
      eachDayDiv.css('border-radius', '10%');
      weatherSpotDiv.append(eachDayDiv);

      // Displaying day of the week
      var timeValue = $("<p>");
      eachDayDiv.append(timeValue);
      timeValue.css("font-size", "16px");
      // JSON timestamp
      var timeStamp = response.daily[i].dt;
      timeValue.css('font-weight', 'bold')
      // Convert timestamp to milliseconds
      var date = new Date(timeStamp * 1000);
      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      var dayOfWeek = days[date.getDay()]
      timeValue.text(dayOfWeek)


      // Displaying weather icon
      var iconEl = $("<img>");
      iconEl.addClass(iconArray[i]);
      eachDayDiv.append(iconEl);
      var iconId = response.daily[i].weather[0].icon;
      var iconLink = "http://openweathermap.org/img/wn/" + iconId + "@2x.png";
      $("." + iconArray[i]).attr("src", iconLink);
      $("." + iconArray[i]).width(45);
      $("." + iconArray[i]).height(45);

      // Displaying High and Low Temperature
      var dayOneDiv = $("<div>");
      eachDayDiv.append(dayOneDiv);
      dayOneDiv.addClass(tempArray[i]);
      dayOneDiv.css("font-size", "12px");
      // Converting to fahrenheit
      var tempFMax = (parseInt(response.daily[i].temp.max - 273.15) * 1.80 + 32).toFixed(0);
      var tempFMin = (parseInt(response.daily[i].temp.min - 273.15) * 1.80 + 32).toFixed(0);
      dayOneDiv.text(tempFMax + "°F   " + " / " + tempFMin + "°F  ");
    }
  });

  // Another AJAX call to pull City Name
  $.ajax({
    url: queryCityURL,
    method: "GET"
  }).then(function (response) {

    var weatherSpotDiv = $("#weatherSpot");
    weatherSpotDiv.css('text-align', 'center');
    console.log(response)
    var cityName = $("<h3>");
    var cityDiv = $("#cityName")
    cityDiv.append(cityName);
    cityName.css("font-size", "15px");
    cityName.css("text-align", "center")
    cityName.css('padding-top', '20px')
    cityName.css('padding-bottom', '10px')
    cityName.css('font-weight', 'bolder')
    cityName.css('font-family', 'sans-serif')
    var currentCity = response.name;
    cityName.text("Weather Forecast for " + currentCity)
  })
}