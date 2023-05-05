// 'use client'

import CityCardLg from "./components/CityCardLg";
import CityCardSm from "./components/CityCardSm";
// import { useState } from 'react';


export default function Home() {

  // const [favorites, setFavorites] = useState([ 
  //                                           {lon: 14.5137, lat: 35.899},
  //                                           {lon: 11.425, lat: 48.763 }, ]);

  const favorites = [ {lon: 14.5137, lat: 35.899}, {lon: 11.425, lat: 48.763 }, ]

  return (
    <main>
      <CityCardLg city="Paris" />

      <div className="cities-grid">
        {favorites.map((location, index) => <CityCardSm location={location} key={index}/>)}
      </div>
      
    </main>
  )
}
