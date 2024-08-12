import axios from 'axios';

const API_WEATHER_KEY = 'e7b9354c6a7c69311fef772ab2cb313e';

const API_WEATHER = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/`,
    params: {
        appid: API_WEATHER_KEY
    }
});

export default API_WEATHER;