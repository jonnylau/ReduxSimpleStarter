import axios from 'axios';

const API_KEY = 'f920b7d4f907bdbde98773b78b75a414';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
  	type: FETCH_WEATHER,
  	payload: request	//sent to all the reducers in the application
  };  
}

// REDUX PROMISE looks at payload property if payload is a promise.  Stops action and unwraps the data in the promise 