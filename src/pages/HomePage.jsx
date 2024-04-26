import CountriesCard from "../components/CountriesCard/CountriesCard";
import SliderSwiper from "../components/sliderSwiper/SliderSwiper";
import TouristsSpotCard from "../components/spots/TouristsSpotCard";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [spots, setSpot] = useState([]);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('touristsSport.json')
         .then(res => res.json())
         .then(data =>{
            setSpot(data);
         })
    })

    useEffect(() => {
        fetch("countries.json")
          .then(res => res.json())
          .then(data => {
            setCountries(data);
          }) 
    })

    return (
        <div className="mt-10">
            <div className="z-[-1]">
                <SliderSwiper />
            </div>
            <div className="mt-10">
                <div className="bg-black p-3 mb-10">
                    <h1 className="text-4xl font-extrabold text-center text-white">Tourists Spots</h1>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
                    {
                        spots.map(spot => <TouristsSpotCard key={spot.id} spot={spot} />)
                    }
                </div>
            </div>

            <div className="mt-10">
                <div className="bg-black p-3 mb-10">
                    <h1 className="text-4xl font-extrabold text-center text-white">Countries </h1>
                </div>
                <div className="grid lg:grid-cols-2 place-items-center gap-6">
                    {
                        countries.map(country => <CountriesCard key={country.id} country={country} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;