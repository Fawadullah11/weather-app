// declaring all the elements
document.addEventListener("DOMContentLoaded", () => {
const search=document.getElementById("search");
const button=document.getElementById("search-btn");
// const appcontainer=document.getElementById("image-style");
const weatherIcon = document.querySelector("#weather-icon");
const body=document.body;
body.id="image-style"



// api keys
const imageapikey="nPgPdQBXArOB3DO-vgahFbVGTz8mNL7rOjXora5N8_g";
const imageurl="https://api.unsplash.com/search/photos?page=1&query=";

const weatherkey="7fd49e1356d849829839d9b465b34aba";
const weatherurl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const forcastkey="7fd49e1356d849829839d9b465b34aba";
const forcastulr=`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=`;

async function cheackweather(city) {
    if (!city) {
        showError("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(weatherurl + city + `&appid=${weatherkey}`);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        updateData(data);
    } catch (error) {
        showError("City not found. Please try again.");
    }
}async function updateData(data){

    //Update the weather data
    document.querySelector("#city").textContent = data.name;
    document.querySelector("#temp").textContent = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").textContent = data.main.humidity + '%';
    document.querySelector(".windspeed").textContent = data.wind.speed + "Km/h";
    document.querySelector("#condition").textContent = data.weather[0].main;

    //Change the Weather Icon
   const weatherconditon=data.weather[0].main;
   if(weatherconditon=="Clear"){
    weatherIcon.src="images/clear.png";
    document.querySelector("#condition").textContent=data.weather[0].main;


   }
   else if(weatherconditon=="Haze"){
    weatherIcon.src="images/drizzle.png";
    document.querySelector("#condition").textContent=data.weather[0].main;

   }
   else if(weatherconditon=="Clouds"){
    weatherIcon.src= "images/clouds.png"
    document.querySelector("#condition").textContent=data.weather[0].main;
    
   }
   else if(weatherconditon == 'Mist'){
    weatherIcon.src = "images/mist.png"
    document.querySelector("#condition").textContent = data.weather[0].main;
}
else if(weatherconditon == 'Rain'){
    weatherIcon.src = "images/rain.png"
    document.querySelector("#condition").textContent = data.weather[0].main;
}
else if(weatherconditon == 'Snow'){
    weatherIcon.src = "images/snow.png"
    document.querySelector("#condition").textContent = data.weather[0].main;
}
else if(weatherconditon=="Thunderstorm"){
    weatherIcon.src = "images/thunderstorm.png"
    document.querySelector("#condition").textContent = data.weather[0].main;

}
else if(weatherconditon=="Smoke"){
    weatherIcon.src = "images/cloud.png"
    document.querySelector("#condition").textContent = data.weather[0].main;

}

document.querySelector(".weather-cont").style.display = "block";
document.querySelector(".row").style.display = "flex";
document.querySelector(".detail").style.display = "flex";
document.querySelector(".error").style.display = 'none';
document.querySelector(".error2").style.display = 'none';
generateImage(data.name);
}
// default call 
cheackweather("karachi");
generateImage("karachi");
forecast("karachi");


// image generator 
async function generateImage(city){
    const response = await fetch(imageurl + city + `&client_id=${imageapikey}`)
    const data = await response.json();

    const img = data.results[0].urls.full;

    body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img})`;
    
}
// forecast generator
async function forecast(city) {
    try {
        const response = await fetch(forcastulr + city + `&appid=${forcastkey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        updateData2(data);
    } catch (error) {
        console.error("Error fetching forecast data:", error);
    }
}
// forecast data update
async function updateData2(data) {
    const forecastDays = document.querySelectorAll(".forcast-day");
    for (let i = 0; i < 5; i++) {
        const forecast = data.list[i * 8]; // Get data for every 24 hours (8 items per day)
        const date = new Date(forecast.dt * 1000); // Convert timestamp to date
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" }); // Get day name
        const temp = Math.round(forecast.main.temp); // Round temperature
        const desc = forecast.weather[0].main; // Weather description

        // Update the DOM
        forecastDays[i].querySelector(".forcast-date").textContent = dayName;
        forecastDays[i].querySelector(".forcast-tmp").textContent = `${temp}°C`;
        forecastDays[i].querySelector(".forcast-desc").textContent = desc;
    }
}
function showError(message) {
    document.querySelector(".error").textContent = message;
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather-cont").style.display = "none";
    document.querySelector(".row").style.display = "none";
    document.querySelector(".detail").style.display = "none";
    body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("images/weather.jpg")`;
}

function hideError() {
    document.querySelector(".error").style.display = "none";
}
// search bttn function
button.addEventListener('click', (e)=>{
    generateImage(search.value.trim());
    cheackweather(search.value.trim());
    forecast(search.value.trim())
})
});