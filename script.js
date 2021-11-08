container = document.querySelector('.weather-container')
city_info = document.querySelector('.city-name')
city_name = city_info.innerHTML
weather_data = document.querySelector('.weather-data')
weather_icon = document.querySelector('.weather-icon')
city_input = document.querySelector('.city-input')
btn = document.querySelector('.city-send')

api_key = '24df5e0bda884b5d9e3162557212510'

async function api_request(city_name) {
  url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city_name}&aqi=no`
  let response = await fetch(url)

  if (response.ok) {
    await response.json().then((json => {
      update_screen(json)
    }))
  }
  else {
    alert('Something went wrong..')
  }
}

function update_screen(json) {
  console.log(json)
  temp_c = json['current']['temp_c']
  temp_f = json['current']['temp_f']
  icon = json['current']['condition']['icon']
  weather_icon.setAttribute('src', icon)
  weather_data.innerHTML = `${temp_c} degrees C, ${temp_f} degrees F`
  city_info.innerHTML = city_name
  console.log(temp_c, temp_f)
}

api_request(city_name)

btn.onclick = () => {
  str = city_input.value
  console.log(str)
  city_name = str
  api_request(city_name)
}


