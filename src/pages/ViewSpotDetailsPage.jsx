import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Context/firebaseProvider/FirebaseProvider";

const ViewSpotDetailsPage = () => {
    const {user} = useContext(AuthContext);
    
    const allSpots = useLoaderData();
    const {id} = useParams();

    // console.log('Spot:', allSpots);
    // console.log('ID:', id);

    const singleSpot = allSpots.find(singleSpot => singleSpot._id === id);
    // console.log(singleSpot);

    const {time, visitors, cost, description, photo, spot, location, country, seasonality, userEmail, } = singleSpot;

    console.log(user.email && userEmail);

    return (
        <div className="mt-10">
            <h1 className="text-center text-5xl font-extrabold ">Spot: {spot}</h1>
            <div className="mt-5  grid lg:grid-cols-2 shadow-lg shadow-black">
                <div className="w-full">
                    <img className="h-full" src={photo} alt="Tourist spot" />
                </div>
                <div className="p-5">
                    <h2 className="text-lg font-medium">Location: <span className="text-xl font-bold">{location}</span></h2>
                    <h3 className="text-lg font-medium">Country: <span className="text-4xl font-bold">{country}</span></h3>
                    <div className="md:flex md:justify-between">
                        <div className="">
                            <h4 className="text-lg font-medium">Average Cost(per person): ${cost}</h4>
                            <p className="text-lg font-medium">Seasonality: {seasonality}</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Time: {time}</h4>
                            <p className="text-lg font-medium">Average Visitors Per Year: {visitors}</p>
                        </div>
                    </div>
                    <p className="text-justify">
                        <span className="text-xl font-bold">Description:</span> {description}
                    </p>
                    
                    {
                        user?.email && userEmail && <div className="mt-10">
                        <button className="btn btn-sm btn-outline">
                            Update This Spot 
                        </button>
                    </div>
                    }
                        
                </div>
            </div>
        </div>
    );
};

export default ViewSpotDetailsPage;