# weather-app
weather app using Html Css and Javascript




### 🌤 **Weather Forecast Website - Overview**  

This weather forecast website provides users with **real-time weather updates** and **5-day forecasts** based on the city they enter. It also dynamically changes the **background image** using Unsplash API, making it visually appealing.  

---

## **🔹 Key Features**  
### 1️⃣ **Search for Weather by City**  
- Users enter a city name in the search bar to fetch the latest weather conditions.  
- If the input is empty or the city is invalid, an error message is displayed.  

### 2️⃣ **Real-Time Weather Data**  
- Fetches **temperature (°C), humidity (%), wind speed (km/h), and weather condition (Cloudy, Rainy, etc.)** from OpenWeather API.  
- Updates the UI dynamically without refreshing the page.  

### 3️⃣ **Weather Icons & Backgrounds**  
- Weather icons change based on conditions (e.g., ☀️ for Clear, 🌧️ for Rain).  
- Background images update dynamically using **Unsplash API**, displaying a relevant image of the searched city.  

### 4️⃣ **5-Day Weather Forecast**  
- Displays a 5-day forecast with **daily temperature, conditions, and day names**.  
- Updates dynamically when a new city is searched.  

### 5️⃣ **Error Handling & User Experience**  
- If an invalid city is entered, it shows `"City not found. Please try again."`  
- If the search box is empty, it prompts users with `"Please enter a city name."`  
- Prevents UI from breaking by resetting the background and hiding incorrect data.  

---

## **🛠️ Technologies Used**  
✅ **HTML & CSS** – For structure and styling.  
✅ **JavaScript (ES6+)** – Handles API requests, DOM updates, and event listeners.  
✅ **OpenWeather API** – Fetches live weather data.  
✅ **Unsplash API** – Fetches dynamic background images.  

---

## **📌 How It Works?**
1️⃣ **User enters a city name** → Clicks the **Search** button.  
2️⃣ **API fetches weather data** → Displays it with matching icons.  
3️⃣ **API fetches a background image** → Sets it as the page background.  
4️⃣ **5-day forecast updates** with temperature & conditions.  
5️⃣ **Handles errors gracefully** for empty input or incorrect city names.  

---

## **🎯 Possible Future Enhancements**
- **Auto-detect user location** for local weather updates.  
- **Dark mode toggle** for better UI experience.  
- **Hourly forecast** instead of just daily updates.  
- **Save favorite cities** for quick access.  

This website is a simple yet **visually appealing** weather app with **dynamic content updates** and **real-time API integration**! 🚀  

Let me know if you need any more details! 😊
