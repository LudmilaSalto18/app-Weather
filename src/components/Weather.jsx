import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Weather = () => {
   

    const [weather, setWeather] = useState({})
    useEffect(() => {

        const success = (pos) => {
            const lat = pos.coords.latitude
            const lon = pos.coords.longitude
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bfbe6b1b6c8ecd1fe141b781a4dc9416`)
                .then(res => setWeather(res.data))
        }

        navigator.geolocation.getCurrentPosition(success);
    }, [])

    console.log(weather);
    return (
        <div className='App' >
            <h1>Wheather App</h1>

            <h1 id='temps' > Country: {weather.name} {' '}
                {weather.sys?.country} {' '}
            </h1>


            <img id='img' src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
            <h1> {weather.main?.temp} </h1>
            <button> Change Temperature  </button>
        </div>
    );
};

export default Weather;