// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f5a23979a0msh5e5b3028f95502ap14923djsnc25304b14299',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }






// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': 'f5a23979a0msh5e5b3028f95502ap14923djsnc25304b14299',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    // "X-RapidAPI-Key": "699bd3bad3msh60c6cd384220b38p143808jsnd035d81e5ad3",
    // "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) =>{
    cityName.innerHTML = city;
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    // cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;

// //


// var options = { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', hour12: true };
// sunrise.innerHTML =  Date(response.sunrise*1000).toLocaleString('en-US', options);
// sunset.innerHTML =  Date(response.sunset*1000).toLocaleString('en-US', options);

// //



})
  .catch((err) => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Kolkata")
// getWeather("Delhi")
// getWeather("Delhi")
// getWeather("Delhi")



const getWeather3 = (city3) =>{
  cityName3.innerHTML = city3;
fetch(
"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city3,
options)
.then((response) => response.json())
.then((response) => {
  console.log(response);
  // cloud_pct3.innerHTML = response.cloud_pct;
  temp3.innerHTML = response.temp;
  feels_like3.innerHTML = response.feels_like;
  humidity3.innerHTML = response.humidity;
  min_temp3.innerHTML = response.min_temp;
  max_temp3.innerHTML = response.max_temp;
  wind_speed3.innerHTML = response.wind_speed;
  // wind_degrees3.innerHTML = response.wind_degrees;
  // sunrise3.innerHTML = response.sunrise;
  // sunset3.innerHTML = response.sunset;
})
.catch((err) => console.error(err));
}
getWeather3("Delhi")



const getWeather4 = (city4) =>{
  cityName4.innerHTML = city4;
fetch(
"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city4,
options)
.then((response) => response.json())
.then((response) => {
  console.log(response);
  temp4.innerHTML = response.temp;
  feels_like4.innerHTML = response.feels_like;
  humidity4.innerHTML = response.humidity;
  min_temp4.innerHTML = response.min_temp;
  max_temp4.innerHTML = response.max_temp;
  wind_speed4.innerHTML = response.wind_speed;
})
.catch((err) => console.error(err));
}
getWeather4("Chennai")



const getWeather5 = (city5) =>{
  cityName5.innerHTML = city5;
fetch(
"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city5,
options)
.then((response) => response.json())
.then((response) => {
  console.log(response);
  temp5.innerHTML = response.temp;
  feels_like5.innerHTML = response.feels_like;
  humidity5.innerHTML = response.humidity;
  min_temp5.innerHTML = response.min_temp;
  max_temp5.innerHTML = response.max_temp;
  wind_speed5.innerHTML = response.wind_speed;
})
.catch((err) => console.error(err));
}
getWeather5("Mumbai")



const getWeather6 = (city6) =>{
  cityName6.innerHTML = city6;
fetch(
"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city6,
options)
.then((response) => response.json())
.then((response) => {
  console.log(response);
  temp6.innerHTML = response.temp;
  feels_like6.innerHTML = response.feels_like;
  humidity6.innerHTML = response.humidity;
  min_temp6.innerHTML = response.min_temp;
  max_temp6.innerHTML = response.max_temp;
  wind_speed6.innerHTML = response.wind_speed;
})
.catch((err) => console.error(err));
}
getWeather6("Hyderabad")


const getWeather7 = (city7) =>{
  cityName7.innerHTML = city7;
fetch(
"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city7,
options)
.then((response) => response.json())
.then((response) => {
  console.log(response);
  temp7.innerHTML = response.temp;
  feels_like7.innerHTML = response.feels_like;
  humidity7.innerHTML = response.humidity;
  min_temp7.innerHTML = response.min_temp;
  max_temp7.innerHTML = response.max_temp;
  wind_speed7.innerHTML = response.wind_speed;
})
.catch((err) => console.error(err));
}
getWeather7("Pune")



const getWeather8 = (city8) =>{
  cityName8.innerHTML = city8;
fetch(
"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city8,
options)
.then((response) => response.json())
.then((response) => {
  console.log(response);
  temp8.innerHTML = response.temp;
  feels_like8.innerHTML = response.feels_like;
  humidity8.innerHTML = response.humidity;
  min_temp8.innerHTML = response.min_temp;
  max_temp8.innerHTML = response.max_temp;
  wind_speed8.innerHTML = response.wind_speed;
})
.catch((err) => console.error(err));
}
getWeather8("Kanpur")