import { useLoaderData } from "react-router-dom";
import AllTouristSpotCard from "../components/AllTouristSpotCard/AllTouristSpotCard";
// https://i.postimg.cc/Qx9BdCBj/1.jpg

const AllTouristsSpotPage = () => {
    const allTouristsSpot = useLoaderData();

    // console.log(allTouristsSpot)

    return (
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3">
            {
                allTouristsSpot.map(touristSpot => <AllTouristSpotCard key={touristSpot._id} touristSpot={touristSpot} />)
            }
        </div>
    );
};

export default AllTouristsSpotPage;