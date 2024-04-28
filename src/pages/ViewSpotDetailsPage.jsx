import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Context/firebaseProvider/FirebaseProvider";
import UpdateTouristSpotPage from "./UpdateTouristSpotPage";

const ViewSpotDetailsPage = () => {
    const {user} = useContext(AuthContext);
    
    const allSpots = useLoaderData();
    const {id} = useParams();

    // console.log('Spot:', allSpots);
    // console.log('ID:', id);

    const singleSpot = allSpots.find(singleSpot => singleSpot._id === id);
    // console.log(singleSpot);

    const {_id, time, visitors, cost, description, photo, spot, location, country, seasonality, userEmail, } = singleSpot;

    // console.log(user.email === userEmail);
    // console.log('From Details page:',_id);

    return (
        <div className="mt-10">
            <h1 className="text-center text-5xl font-extrabold "><span className="text-5xl font-extralight">Tourist Spot: </span>{spot}</h1>
            <div className="mt-10  grid lg:grid-cols-2 shadow-lg shadow-black">
                <div className="w-full">
                    <img className="h-full" src={photo} alt="Tourist spot photo" />
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
                        (user.email=== userEmail)?<div className="mt-10">
                            {/* <button className="btn btn-sm btn-outline">
                                Update This Spot 
                            </button> */}
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-outline w-full" onClick={()=>document.getElementById('my_modal_4').showModal()}>Update Spot Info</button>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-full max-w-7xl">
                                    <div>
                                        <UpdateTouristSpotPage _id={_id} />
                                    </div>
                                    <div className="modal-action flex justify-center items-center">
                                        <form method="dialog w-full">
                                            {/* if there is a button, it will close the modal */}
                                            <button className="btn btn-sm btn-outline text-xl w-full bg-black text-white">X</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                            <div className="mt-1">
                                <button className="btn btn-outline w-full">
                                    delete
                                </button>
                            </div>
                        </div>
                        
                        :
                        ''
                    }
                        
                </div>
            </div>
        </div>
    );
};

export default ViewSpotDetailsPage;