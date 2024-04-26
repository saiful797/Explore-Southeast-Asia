import { useLoaderData } from "react-router-dom";
// https://i.postimg.cc/Qx9BdCBj/1.jpg

const AllTouristsSpotPage = () => {
    const allTouristsSpot = useLoaderData();

    console.log(allTouristsSpot)

    return (
        <div>
            <h1>All Tourist Spot: {allTouristsSpot.length} </h1>
        </div>
    );
};

export default AllTouristsSpotPage;