// Foursquare API Info
const clientId = 'DINSHPTLD3V21T33OLLNARVLLJMUIFPD00JS4K0MR5HHCVIY';
const clientSecret = '00UO4L2NULKVHEBEG44TTO503DFTV0SCDLHHEHLSGKOYCR2G';
const url ='https://api.foursquare.com/v2/venues/explore?near=';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'fsq3yOPCNp+z5jgioosOZq/eMG7QTS3AyW672wgLkmOCCck='
  }
};



// OpenWeather Info
const openWeatherKey = '5a4fd6ddc927a8873b6387e9ec52ab26';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}
async function getVenues(){
  return new Promise(async (resolve, reject) => {
    const city = $input.val();
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${getCurrentDate()}`;

    try {


        const response = await fetch(urlToFetch);
        console.log(response);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
            resolve(venues);
        } else {
            reject(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        reject(`Error: ${error}`);
    }
});
}

async function getForecast() {
  const urlToFetch = `${weatherUrl}?q=${$input.val()}&APPID=${openWeatherKey}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
  } catch(error) {
    console.log(error);
  }
}



// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = '';
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
  getVenues().then(venues => renderVenues(venues));
  getForecast().then(forecast => renderForecast(forecast));
}

$submit.click(executeSearch)