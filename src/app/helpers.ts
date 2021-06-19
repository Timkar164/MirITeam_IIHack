export const weatherIcons = {
  "01d": "assets/animated-icons/sunset-weather/sunset-weather.json",
  "02d": "assets/animated-icons/cloudy-weather/cloudy-weather.json",
  "03d": "assets/animated-icons/cloudy-weather/cloudy-weather.json",
  "04d": "assets/animated-icons/cloudy-weather/cloudy-weather.json",
  "09d": "assets/animated-icons/rain-cloud-weather/rain-cloud-weather.json",
  "10d": "assets/animated-icons/rain-cloud-weather-2/rain-cloud-weather-2.json",
  "11d": "assets/animated-icons/lightning-weather/lightning-weather.json",
  "13d": "assets/animated-icons/snow-storm-weather/snow-storm-weather.json",
  "50d": "assets/animated-icons/cloudy-weather/cloudy-weather.json",
  "01n": "assets/animated-icons/night-weather/night-weather.json",
  "02n": "assets/animated-icons/night-weather/night-weather.json",
  "03n": "assets/animated-icons/night-weather/night-weather.json",
  "04n": "assets/animated-icons/night-weather/night-weather.json",
  "09n": "assets/animated-icons/rain-cloud-weather/rain-cloud-weather.json",
  "10n": "assets/animated-icons/rain-cloud-weather-2/rain-cloud-weather-2.json",
  "11n": "assets/animated-icons/lightning-weather/lightning-weather.json",
  "13n": "assets/animated-icons/snow-storm-weather/snow-storm-weather.json",
  "50n": "assets/animated-icons/cloudy-weather/cloudy-weather.json"
};

// Capitalize
export function capitalize(words) {
  return words.charAt(0).toUpperCase() + words.slice(1);
}

// Lowercase
export function lowercase(words) {
  return words.toLowerCase();
}

// Format price
export function formatPrice(val) {
  const fNumber = parseFloat(val);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(fNumber);
}

export function randomStatus() {
  return ["danger", "success", "info", "warning", "secondary"][
    Math.floor(Math.random() * 5)
    ];
}
