import { useLoaderData } from "react-router-dom";
import AllTouristSpotCard from "../components/AllTouristSpotCard/AllTouristSpotCard";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
// https://i.postimg.cc/Qx9BdCBj/1.jpg

const AllTouristsSpotPage = () => {
    const allTouristsSpot = useLoaderData();

    const [sortedSpot, setSortedSpot] = useState(allTouristsSpot)

    const handleSortButton = () =>{
        fetch('http://localhost:5000/sortedSpots')
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            setSortedSpot(data);
          })
    }

    return (
        <div className="mt-10">
            <div className="flex justify-center items-center">
                <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn btn-outline btn-sm btn-info">SORT BY <span className="text-lg"><IoIosArrowDown /></span></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={handleSortButton} className="text-lg font-medium"><a>Cost</a></li>
                    </ul>
                </div>
            </div>
            <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3">
                {
                    sortedSpot.map(touristSpot => <AllTouristSpotCard key={touristSpot._id} touristSpot={touristSpot} />)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpotPage;