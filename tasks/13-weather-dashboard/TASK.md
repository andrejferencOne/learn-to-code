# Task 13: Weather Dashboard

**Difficulty:** ★★★★☆ (Intermediate-Advanced)
**Module:** Building Real Apps
**Time estimate:** 3-5 hours
**Builds on:** [Task 12](../12-api-and-fetch/TASK.md)

## What You'll Learn

- Working with a real API that requires an API key
- Environment variables and API key security
- More complex data handling and transformation
- Building a polished, real-world application
- Geolocation API
- Advanced CSS (gradients, animations)

## Background

This is your first app that uses a **real** API with an API key. The key difference from Task 12 is:

1. You need to **register** to get an API key
2. You must **never** commit the API key to Git
3. The data is **real** and more complex

### Getting Your API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Create a free account
3. Go to "My API Keys" section
4. Copy your API key
5. The free tier gives you 60 calls per minute - more than enough

### API Security

**NEVER put API keys in your code that gets pushed to GitHub.** For this vanilla JS project, we'll use a simple approach - store the key in a separate file that's in `.gitignore`.

Create a file `config.js`:
```js
const API_KEY = "your-api-key-here";
```

Add to `.gitignore`:
```
config.js
```

Create a `config.example.js` (this one DOES get committed):
```js
const API_KEY = "paste-your-openweathermap-api-key-here";
```

## Your Task

Build a **weather dashboard** that shows current weather and a forecast for any city.

### Core Features

1. **City Search**
   - Search input to look up any city
   - Show suggestions as you type (bonus)
   - "Use My Location" button (browser geolocation)

2. **Current Weather Display**
   - City name and country
   - Temperature (with toggle for Celsius/Fahrenheit)
   - Weather condition (sunny, cloudy, rainy) with an icon
   - Humidity, wind speed, "feels like" temperature
   - Dynamic background based on weather (e.g., blue for clear, gray for cloudy)

3. **5-Day Forecast**
   - Next 5 days with date, icon, high/low temperature
   - Displayed as cards in a row

4. **Search History**
   - Save recent searches to localStorage
   - Show last 5 searched cities as quick-access buttons
   - Clear history button

### API Endpoints

```
Current weather:
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

5-day forecast:
https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric

Weather icons:
https://openweathermap.org/img/wn/{icon_code}@2x.png

By coordinates (for geolocation):
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric
```

### UI Layout

```
┌──────────────────────────────────────────┐
│  ☁️ Weather Dashboard                    │
│  ┌────────────────────────┐ ┌──────────┐│
│  │ Search city...         │ │📍 My Loc ││
│  └────────────────────────┘ └──────────┘│
│  Recent: [London] [Tokyo] [New York]     │
│                                          │
│  ┌──────────────────────────────────────┐│
│  │     London, UK                       ││
│  │     🌤️ 18°C  (C° / F°)             ││
│  │     Partly Cloudy                    ││
│  │     Feels like: 16°C                ││
│  │     Humidity: 65%  Wind: 12 km/h    ││
│  └──────────────────────────────────────┘│
│                                          │
│  5-Day Forecast                          │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   │
│  │ Mon  │ │ Tue  │ │ Wed  │ │ Thu  │   │
│  │  ☀️  │ │  🌧️  │ │  ⛅  │ │  ☀️  │   │
│  │20/14 │ │16/11 │ │18/13 │ │22/15 │   │
│  └──────┘ └──────┘ └──────┘ └──────┘   │
└──────────────────────────────────────────┘
```

## Step-by-Step Guide

1. Create all files: `index.html`, `styles.css`, `app.js`, `config.js`, `config.example.js`, `.gitignore`
2. Get your OpenWeatherMap API key
3. Build the HTML layout
4. Style it (make it look like a real weather app!)
5. Implement in this order:
   1. Fetch current weather for a hardcoded city (test the API works)
   2. Add the search input
   3. Display the weather data
   4. Add the 5-day forecast
   5. Add the temperature toggle (C/F)
   6. Add the "Use My Location" button
   7. Add search history with localStorage
   8. Add dynamic backgrounds

### Geolocation

```js
function getMyLocation() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherByCoords(latitude, longitude);
        },
        (error) => {
            showError("Location access denied. Please search for a city.");
        }
    );
}
```

### Processing Forecast Data

The API returns data every 3 hours. To get daily data, you need to group by day:

```js
function processForecast(forecastList) {
    const dailyData = {};
    forecastList.forEach(item => {
        const date = item.dt_txt.split(" ")[0]; // "2024-01-15"
        if (!dailyData[date]) {
            dailyData[date] = [];
        }
        dailyData[date].push(item);
    });
    // Now calculate min/max temp for each day
    // ...
}
```

## Acceptance Criteria

- [ ] Can search for any city and see current weather
- [ ] Shows temperature, condition, humidity, wind speed, feels like
- [ ] Shows weather icon from the API
- [ ] Has a working 5-day forecast display
- [ ] Celsius/Fahrenheit toggle works
- [ ] "Use My Location" button works (with permission prompt)
- [ ] Search history saved in localStorage (last 5 cities)
- [ ] Loading state while fetching
- [ ] Error handling (invalid city, network error)
- [ ] API key is NOT committed to git (in .gitignore)
- [ ] `config.example.js` exists with placeholder key
- [ ] App looks polished and professional

## Bonus Challenges

- Add dynamic backgrounds (sunny = warm gradient, rainy = gray, night = dark)
- Add weather animations (falling rain, floating clouds using CSS)
- Add a map showing the city location (using Leaflet.js)
- Show sunrise/sunset times
- Add hourly forecast for today
- Add air quality data (OpenWeatherMap has this API too)
- Make it a PWA (Progressive Web App) that works offline

## Using Claude Code

- **"How do I get an API key?"** - Ask Claude: `"Walk me through signing up for OpenWeatherMap and getting a free API key"`
- **"The API returns weird data"** - Ask Claude: `"I fetched data from OpenWeatherMap but I don't understand the response structure. Here's what I got: [paste JSON]. How do I get the temperature?"`
- **"How do I keep my API key secret?"** - Ask Claude: `"What's the best way to handle API keys in a vanilla JavaScript project so they don't get committed to GitHub?"`
- **"Geolocation not working"** - Ask Claude: `"navigator.geolocation.getCurrentPosition isn't working. It just does nothing. How do I debug this?"`
- **"How do I convert the forecast data?"** - Ask Claude: `"The OpenWeatherMap forecast API returns data every 3 hours but I want daily min/max. How do I process this?"`
