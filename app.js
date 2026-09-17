// selecting elemnts to display the results
let temp = document.querySelector(".temp");
let place = document.querySelector(".place");
let region = document.querySelector(".region");
let conditionText = document.querySelector(".conditionText");
let conditionIcon = document.querySelector(".conditionIcon");
let feelslike = document.querySelector(".feelslike");
let time = document.querySelector(".time");
let humidity = document.querySelector(".humidity");
let rain = document.querySelector(".rain");
let wind = document.querySelector(".wind");
let uv = document.querySelector(".uv");
let visiblity = document.querySelector(".visiblity");
let empty = document.querySelector(".empty");
let notfound = document.querySelector(".notfound");
let all = document.querySelectorAll(".all");

// function for onsubmiting form
async function checkWeather(event) {
  try {
    event.preventDefault();

    // saving input value
    let location = document.querySelector(".input").value.trim();

    // handling empty input
    if (location === "") {
      // removing previous not found msg
      notfound.innerHTML = "";
      // removing previous empty msg
      empty.innerHTML = "";

      // removing previuos location data
      temp.innerHTML = "";
      place.innerHTML = "";
      region.innerHTML = "";
      conditionText.innerHTML = "";
      conditionIcon.style.display = "none";
      feelslike.innerHTML = "";
      time.innerHTML = "";
      humidity.innerHTML = "";
      rain.innerHTML = "";
      wind.innerHTML = "";
      uv.innerHTML = "";
      visiblity.innerHTML = "";

      // showing msg for empty input box
      empty.innerHTML = "Please Enter Your City ";

      // if input value is empty then stop the code
      return;
    }

    // weather api
    let output = await axios(
      `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${location}`,
    );

    // clearing the empty msg before displaying the data of location
    empty.innerHTML = "";

    // showing searched locations data
    place.innerHTML = "📍 Name: " + output.data.location.name;
    region.innerHTML = "🌍 Region: " + output.data.location.region;
    temp.innerHTML = "🌡️ Temp: " + output.data.current.temp_c + "°C";
    conditionText.innerHTML =
      "🌤️ Condition: " + output.data.current.condition.text;
    conditionIcon.src = "https:" + output.data.current.condition.icon;
    conditionIcon.style.display = "inline";
    feelslike.innerHTML =
      "😌 Feels Like: " + output.data.current.feelslike_c + "°C";
    time.innerHTML = "🕒 Time: " + output.data.location.localtime;
    humidity.innerHTML = "💧 Humidity: " + output.data.current.humidity + "%";
    rain.innerHTML =
      "☔ Chances Of Rain: " + output.data.current.chance_of_rain + "%";
    wind.innerHTML = "💨 Wind Speed: " + output.data.current.wind_kph + " kph";
    visiblity.innerHTML =
      "👁️ Visibility: " + output.data.current.vis_km + " km";
  } catch (error) {
    // clear all previous data before showing not found
    temp.innerHTML = "";
    place.innerHTML = "";
    region.innerHTML = "";
    conditionText.innerHTML = "";
    conditionIcon.style.display = "none";
    feelslike.innerHTML = "";
    time.innerHTML = "";
    humidity.innerHTML = "";
    rain.innerHTML = "";
    wind.innerHTML = "";
    uv.innerHTML = "";
    visiblity.innerHTML = "";

    // show location not found msg
    notfound.innerHTML = error.response
      ? error.response.data.error.message
      : error.message;
    // clear empty value msg
    empty.innerHTML = "";
  }
}
