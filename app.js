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
let empty = document.querySelector(".empty")



async function checkWeather(event) {
  event.preventDefault();
  let location = document.querySelector(".input").value.trim();

if (location === ""){
    empty.innerHTML = "Please Enter Your City "
    return;
}
  let output = await axios(
    `https://api.weatherapi.com/v1/current.json?key=60e0a3d2f152486e950213038260606&q=${location}`,
  );

  place.innerHTML = "Name :" + output.data.location.name;
  region.innerHTML = "Region : " + output.data.location.region;
  temp.innerHTML = "Temp : " + output.data.current.temp_c;
  conditionText.innerHTML = "Condition : " + output.data.current.condition.text;
  conditionIcon.src = "https:" + output.data.current.condition.icon;
  feelslike.innerHTML = " Feels Like : " + output.data.current.feelslike_c;
  time.innerHTML = "Time :" + output.data.location.localtime;
  humidity.innerHTML = "Humidity : " + output.data.current.humidity;
  rain.innerHTML = "Chances Of Rain : " + output.data.current.chance_of_rain;
  wind.innerHTML = "Wind Speed : " + output.data.current.wind_kph;
  visiblity.innerHTML = " Visibility : " + output.data.current.vis_km + " km";
}
