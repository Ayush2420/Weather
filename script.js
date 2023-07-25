 
const API_BASE_URL = "http://samples.openweathermap.org/data/2.5/forecast/hourly";
const API_KEY = "b6907d289e10d714a6e88b30761fae22";
const LOCATION = "London,us";


async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        console.log();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

async function getWeatherData(date) {
    const url = `${API_BASE_URL}?q=${LOCATION}&appid=${API_KEY}`;
    const data = await fetchData(url);
   
    if (data) {
        let output = "";
        let foundData = false;
        for (const forecast of data.list) {
            if (forecast.dt_txt.startsWith(date)) {
                output += `Weather on ${forecast.dt_txt}: ${forecast.weather[0].main}<br>`;
                foundData = true;
            }
        }

        if (foundData) {
            document.getElementById("output").innerHTML = output;
        } else {
            document.getElementById("output").innerHTML = "No data available for the specified date.";
        }
    }
}

async function getWindSpeedData(date) {
    const url = `${API_BASE_URL}?q=${LOCATION}&appid=${API_KEY}`;
    const data = await fetchData(url);
   
    if (data) {
        let output = "";
        let foundData = false;
        for (const forecast of data.list) {
            if (forecast.dt_txt.startsWith(date)) {
                output += `Wind Speed on ${forecast.dt_txt}: ${forecast.wind.speed}<br>`;
                foundData = true;
            }
        }

        if (foundData) {
            document.getElementById("output").innerHTML = output;
        } else {
            document.getElementById("output").innerHTML = "No data available for the specified date.";
        }
    }
}

async function getPressureData(date) {
    const url = `${API_BASE_URL}?q=${LOCATION}&appid=${API_KEY}`;
    const data = await fetchData(url);
   
    if (data) {
        let output = "";
        let foundData = false;
        for (const forecast of data.list) {
            if (forecast.dt_txt.startsWith(date)) {
                output += `Pressure on ${forecast.dt_txt}: ${forecast.main.pressure}<br>`;
                foundData = true;
            }
        }

        if (foundData) {
            document.getElementById("output").innerHTML = output;
        } else {
            document.getElementById("output").innerHTML = "No data available for the specified date.";
        }
    }
}

function showInput() {
    const option = document.getElementById("option").value;
    const dateInput = document.getElementById("dateInput");

    if (option === "0") {
        dateInput.style.display = "none";
    } else {
        dateInput.style.display = "block";
    }
}

 
function getData() {
    const option = document.getElementById("option").value;
    const date = document.getElementById("date").value;

    if (option === "1") {
        getWeatherData(date);
    } else if (option === "2") {
        getWindSpeedData(date);
    } else if (option === "3") {
        getPressureData(date);
    }
}
