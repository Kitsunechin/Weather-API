// getting the button from the DOM
var button = document.querySelector("button");
// listening for action
button.onclick = function() {
  fetch("https://ipapi.co/json/")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      // console.log(myJson);

      var city = myJson.city;
      var country = myJson.country;

      console.log(city, country);
      document.querySelector("#weatherContainer").style.display = "";
      document.querySelector("#cityHeader").innerHTML = city;
      document.querySelector("#Country").innerHTML = country;

      ///Jason weather api///////////
      var appId = "ae76d0efed32d9f29c4d54a5738b80ca";
      var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`;

      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // console.log(myJson);

          var celc = Math.floor(data.main.temp);
          document.querySelector("#temp").innerHTML = celc + "°" + "C";
          var humidity = data.main.humidity;
          document.querySelector("#hum").innerHTML =
            "Humidity level at " + humidity + "%";
          var summary = data.weather[0].description;
          document.querySelector("#summary").innerHTML = summary;

          /////////picture_icon////////////////
          var weatherIcon = document.querySelector("#documentIconImg");

          weatherIcon.src =
            "https://api.openweathermap.org/img/w/" +
            data.weather[0].icon +
            ".png";

          ///////////end of  current/////////////////
        });
      //////////////success function/////
    });
  /////////////end of button function//////////
};