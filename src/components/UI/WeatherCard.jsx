import React, { useEffect, useState } from 'react';
import classes from '../style/style.module.css';
import clear from '../image/clear.png';
import cloud from '../image/cloud.png';
import mist from '../image/mist.png';
import rain from '../image/rain.png';
import snow from '../image/snow.png';

const WeatherCard = ({ weather }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    setFadeClass('fade-out');

    const timeoutId = setTimeout(() => {
      switch (weather) {
        case 'Clear':
          setImageSrc(clear);
          break;
        case 'Rain':
          setImageSrc(rain);
          break;
        case 'Snow':
          setImageSrc(snow);
          break;
        case 'Clouds':
          setImageSrc(cloud);
          break;
        case 'Haze':
          setImageSrc(mist);
          break;
        default:
          setImageSrc('');
      }
      setFadeClass('');
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [weather]);

  return (
    <div className={classes.weathe_image}>
      <img src={imageSrc} alt="Weather Icon" className={fadeClass ? classes[fadeClass] : ''} />
    </div>
  );
};

export default WeatherCard;
