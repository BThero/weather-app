google_api_key = 'AIzaSyBv7wr-iYVyN7inRlm0d8gq7A5g75RoxLY'
cse_id = '34b4d2702844388b3'

async function google_search(query) {
  url = `https://www.googleapis.com/customsearch/v1?key=${google_api_key}&cx=${cse_id}&q=${query}`
  let response = await fetch(url)

  if (response.ok) {
    await response.json().then(json => {
      console.log(json)
    })
  }
  else {
    alert("Oops :(")
  }
}

google_search("Barcelona")