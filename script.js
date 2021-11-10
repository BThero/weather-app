apiKey = '24df5e0bda884b5d9e3162557212510'

async function getWeather(cityName, callback) {
  let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`

  await fetch(url).then((res) => {
    if (res.ok) {
      (res.json()).then((res) => {
        callback(res)
      })
    }
    else {
      alert("Something went wrong...")
    }
  })
}

function updateState(res) {
  console.log(res)

  let countryName = res["location"]["country"]
  let cityName = res["location"]["name"]
  let localTime = res["location"]["localtime"]
  let tempC = res["current"]["temp_c"]
  let tempF = res["current"]["temp_f"]
  let lastUpdated = res["current"]["last_updated"]
  let icon = res["current"]["condition"]["icon"]
  let condition = res["current"]["condition"]["text"]

  let elCity = document.querySelector("#search-results .city") 
  let elWeather = document.querySelector("#search-results .weather")
  let elLocalTime = document.querySelector("#search-results .local-time")
  let elLastUpdated = document.querySelector("#search-results .last-updated")
  let elCondition = document.querySelector("#search-results .condition")
  let elIcon = document.querySelector("#search-results .icon")

  console.log(elCondition)
  console.log(elIcon)

  elCity.textContent = `${countryName}, ${cityName}`
  elWeather.innerHTML = `${tempC}&deg;C, ${tempF}&deg;F`
  elLocalTime.textContent = `Local time is ${localTime}`
  elLastUpdated.textContent = `Last updated at ${lastUpdated}`
  elCondition.textContent = condition
  elIcon.setAttribute("src", icon)
}

getWeather('Barcelona', updateState)

let cityInput = document.querySelector("#city-search #city") 
let submitBtn = document.querySelector("#city-search #btn")

console.log(cityInput)
console.log(submitBtn)

submitBtn.onclick = () => {
  console.log("Clicked!")
  let cityName = cityInput.value; 
  getWeather(cityName, updateState)
}


