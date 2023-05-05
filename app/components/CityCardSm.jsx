import React from 'react'

async function fetchData(lon, lat) {

    const apikey = process.env.APIKEY_OPENWEATHER;
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=de&appid=${apikey}`,
        { next: {
            revalidate: 3600
        }});

    if(!weatherResponse.ok) {
        throw new Error('Failed to fetch data!')
    }

    const data = await weatherResponse.json()

    return data;
}

const CityCardSm = async ( { location: {lon, lat} } ) => {

    const weather = await fetchData(lon, lat);

    return (
        <div className='city-card-sm card-content'>
            <div>
                <h3>{weather.name}</h3>
                <p>{weather.weather[0].description}</p>
            </div>
            <div>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt=""/> 
                <p className="temp">{Math.round(weather.main.temp)}°</p>
                <p className='temp-min-max'>
                     Min: {Math.round(weather.main.temp_min)}° | Max: {Math.round(weather.main.temp_max)}°<br />
                </p>
                
            </div>
            
        </div>
  )
}

export default CityCardSm