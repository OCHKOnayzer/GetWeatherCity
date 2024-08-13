import React, { useState } from 'react'
import API_WEATHER from './http';
import WeatherCard from './UI/WeatherCard';
import classes from './style/style.module.css'
import ButtonSearch from './UI/ButtonSearch';
import point from './image/mapPoint.svg'

const Weather = () => {

  const styleExpanded  = { 
    height:"80vh"
  }
  const styleCollapsed  = { 
    height:"10vh"
  }
  const err = { 
    height:"20vh"
  }
    const [city,setCity] = useState();

    const [weather,setWeather] = useState(null);

    const [error,setError] = useState();

    const getWeather = async()=> { 

      if(!city){ 
        setError('Введите название города')
        setWeather(null);
        return;
      }

      try{ 
        const response = await API_WEATHER.get('weather', { 
          params:{ 
            q: city, 
            units:'metric'
          }
        })
        setWeather(response.data)
        setError('')
      }catch(e){ 
        setError('Ошибка при получении данных о погоде. Проверьте правильность ввода города.');
        setWeather(null);
      };

      // API_WEATHER.get('weather', { 
      //   params:{ 
      //     q: city, 
      //     units:'metric'
      //   }
      // })
      // .then(response =>{ 
      //   setWeather(response.data);
      //   setError('')
      // })
      // .catch(() =>{ 
      //   setError('Ошибка при получении данных о погоде. Проверьте правильность ввода города.');
      //   setWeather(null);
      // })
    };

  return (
    <div className={`${classes.weater_wrapper}`} style={weather !== null ? styleExpanded : styleCollapsed}>
      <div className={classes.weather_search}>
        <div className={classes.input_wrapper}>
          <div className={classes.image_conteiner}>
            <img src={point} alt="" />
          </div>
         
          <input 
              type="text" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Введите город"
          />
        </div>
       
          <ButtonSearch onViwe={getWeather}/>
      </div>
      {weather && (
          <div className={classes.city_weather}>
            <WeatherCard weather={weather.weather[0].main}/>
              <div className={classes.temp_conteiner}>
                <div className={classes.t_cont}>
                <p>{Math.round(weather.main.temp)}</p><span className={classes.metric}>°C</span>
                </div>
                <p className={classes.description_conteiner}>{weather.weather[0].description}</p>
              </div>
              <div>

              </div>
          </div>
      )}
      {error && <p className={classes.error}>{error}</p>}
  </div>
  )
}

export default Weather