// Practicing accessing the open weather API

// Get the long and lats for the city required

const getLongLang = async (locationQuery) => {
  let limit = 1;
  let apiKey = "2a7e07fe638ea604b92f79e5f876f590";
  let queryURL = `http://api.openweathermap.org/geo/1.0/direct?q=${locationQuery}&limit=${limit}&appid=${apiKey}`;

  const response = await fetch(queryURL);
  const data = await response.json();
  let results = [data[0].name, data[0].lat, data[0].lon];
  return results;
};

const fetchWeatherDetails = async (locationDetails) => {
  let longLang = await getLongLang(locationDetails);
  let latdetails = longLang[1];
  let longdetails = longLang[2];
  console.log(latdetails);
  console.log(longdetails);

  // Get the weather details
  // Here is the api details page: >> https://openweathermap.org/current

  let queryURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${latdetails}&lon=${longdetails}&appid=2a7e07fe638ea604b92f79e5f876f590&units=metric`;

  const response = await fetch(queryURL);
  const data = await response.json();
  console.log("success data returned");
  // today
  console.log(`temp: ${data.list[0].main.temp}`);
  console.log(`wind: ${data.list[0].wind.speed}kph`);
  console.log(`humidity: ${data.list[0].main.humidity}%`);

  console.log(data.list[0].dt_txt, data.list[0].main.temp);
  console.log(data.list[39].dt_txt, data.list[39].main.temp);

  //console.log(data.)
};

fetchWeatherDetails("Cambridge");

// Get the weather for Cambridge!!!

//const getWeatherInfo = async (lat,lon) => {

//}

//getWeatherInfo(latdetails, longdetails);
