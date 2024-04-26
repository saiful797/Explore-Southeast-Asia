import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const AllTouristSpotCard = ({touristSpot}) => {
    console.log(touristSpot);

    const {photo, cost, seasonality, spot, time} = touristSpot;

    return (
        <div className="w-80 glass mt-10 shadow-2xl mx-auto">
            <figure><img className='w-full h-60' src={photo} alt=""/></figure>
            <div className="card-body">
                <div className='text-xl'>
                    <h3>Spot Name:<span className='font-bold'>{spot}</span></h3>
                    <h5>Average Cost: <span className='font-bold'>{cost}</span></h5>
                    <p>travel time: <span className='font-bold'>{time}</span></p>
                    <p>Seasonality: <span className='font-bold'>{seasonality}</span></p>
                </div>
                
                <div className='mt-10 flex justify-center items-center w-full'>
                    <Link className='w-full'>  
                        <button className="btn btn-sm btn-outline  w-full">View Details</button> 
                    </Link>
                </div>
            </div>
        </div>
    );
};

AllTouristSpotCard.propTypes ={
    touristSpot: PropTypes.object.isRequired,
}
export default AllTouristSpotCard;