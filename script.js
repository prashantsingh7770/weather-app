const temp = document.querySelector(".temp");
const feels = document.querySelector(".feels_like")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind-speed")
const imgIcon = document.querySelector(".icon")
async function getData(cityName) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=86442e62a09342ea870133638242711&q=${cityName}&aqi=yes`);
    return await promise.json();
}
document.getElementById('btn').addEventListener('click', async () => {
    const val = document.getElementById('city-name').value;
    const result = await getData(val);
    console.log(result);
     imgIcon.innerHTML = `<img src=${result.current.condition.icon} alt="">`
    temp.innerText = `${result.current.temp_c}°C`
    feels.innerText = `Feels Like:  ${result.current.temp_c}°C`
    humidity.innerText = `Humidity: ${result.current.humidity}%`
    wind.innerText = `Wind Speed: ${result.current.wind_kph} km/h`
});
