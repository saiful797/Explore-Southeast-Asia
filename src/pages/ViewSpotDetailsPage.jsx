import { useLoaderData, useParams } from "react-router-dom";

const ViewSpotDetailsPage = () => {

    const allSpots = useLoaderData();
    const {id} = useParams();

    // console.log('Spot:', allSpots);
    // console.log('ID:', id);

    const singleSpot = allSpots.find(singleSpot => singleSpot._id === id);
    // console.log(singleSpot);

    const { time, visitors, cost, description, photo, spot, location, country, seasonality } = singleSpot;

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
                </div>
            </div>
        </div>
    );
};

export default ViewSpotDetailsPage;