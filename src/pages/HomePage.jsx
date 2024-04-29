import { useLoaderData } from "react-router-dom";
import CountriesCard from "../components/CountriesCards/CountriesCard";
import FAQ from "../components/FAQ/FAQ";
import SliderSwiper from "../components/sliderSwiper/SliderSwiper";
import AllTouristSpotCard from "../components/AllTouristSpotCard/AllTouristSpotCard";
import ReviewSlider from "../components/reviewSlider/ReviewSlider";


const HomePage = () => {
    
    const allTouristsSpot = useLoaderData();

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
                        allTouristsSpot.map(touristSpot => <AllTouristSpotCard key={touristSpot._id} touristSpot={touristSpot} />)
                    }
                </div>
            </div>

            <div className="mt-10">
                <div className="bg-black p-3 mb-10">
                    <h1 className="text-4xl font-extrabold text-center text-white">Countries </h1>
                </div>
                <div className="">
                    <CountriesCard />
                </div>
                <div className="mt-20">
                    <div className="bg-black p-3 mb-10 shadow-transparent">
                        <h1 className="text-4xl font-extrabold text-center text-white">Customer's Reviews</h1>
                    </div>
                    <ReviewSlider />
                </div>

                <div className="mt-10 text-center">
                    <div className="bg-black p-3 mb-10">
                        <h1 className="text-4xl font-extrabold text-center text-white">FAQ</h1>
                    </div>

                    <FAQ />
                </div>
            </div>
        </div>
    );
};

export default HomePage;