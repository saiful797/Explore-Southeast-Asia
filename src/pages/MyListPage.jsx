import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/firebaseProvider/FirebaseProvider";
import AllTouristSpotCard from "../components/AllTouristSpotCard/AllTouristSpotCard";

const MyListPage = () => {
    const {user} = useContext(AuthContext);
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/touristSpot/${user?.email}`)
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            setMyList(data);
        })
    },[user])

    const newMyList = myList.filter(spot => user.email === spot.userEmail);
    // console.log(newMyList)
    return (
        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3">
            {
                newMyList.map(touristSpot => <AllTouristSpotCard key={touristSpot._id} touristSpot={touristSpot} />)
            }
        </div>
    );
};

export default MyListPage;