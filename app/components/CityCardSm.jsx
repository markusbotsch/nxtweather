import React from 'react'

async function fetchData( { city }) {

    const apikey = process.env.APIKEY_OPENWEATHER;

    const locationResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${apikey}`);

    const locationData = await locationResponse.json();

    console.log(locationData);

    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationData[0].lat}&lon=${locationData[0].lon}&units=metric&lang=de&appid=${apikey}`);

    const data = await weatherResponse.json()

    return data;
}

const CityCardSm = async ({ city } ) => {

    const weather = await fetchData({city});

    console.log(weather);
  return (
    <div className='city-card-sm'>
        {weather.name}
        <p className="temp">{Math.round(weather.main.temp)}°</p>
    </div>
  )
}

export default CityCardSm