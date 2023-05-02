import CityCardSm from "./components/CityCardSm";


export default function Home() {

  // const cities = ["Ingolstadt"];

  return (
    <main>
      <div className="cities-grid">
            <CityCardSm city="Ingolstadt"/>
            <CityCardSm city="Valetta"/>
      </div>
      
    </main>
  )
}
