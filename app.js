

const apiKey = "25bae2c19c94e678f597b6115fdb1280";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      
        if(response.status == 404 ) {
            document.querySelector(".error").style.display = "block";
         document.querySelector(".weather").style.display = "none"; 
        } else {
            const data = await response.json();


            cityElement.innerHTML = data.name;
            tempElement.innerHTML = Math.round(data.main.temp) + "°C";
            humidityElement.innerHTML = data.main.humidity + "%";
            windElement.innerHTML = data.wind.speed + "km/h";
    
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "clouds.png ";
            }
            else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "clear.png";
            }
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "rain.png"
            }
            else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "drizzle.png"
            }
            else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "mist.png"
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
}
  
        }

    searchbtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        const city = searchbox.value.trim(); 
        if (city) {
            checkWeather(city);
        } else {
            console.warn("Please enter a city name");

        }
    });
    
    
        
       