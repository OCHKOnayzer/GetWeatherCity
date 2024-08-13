import axios from 'axios';

const API_WEATHER_KEY = '';//your api key

const API_WEATHER = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/`,
    params: {
        appid: API_WEATHER_KEY
    }
});

export default API_WEATHER;
