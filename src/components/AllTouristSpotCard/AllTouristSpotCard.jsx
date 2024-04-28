import PropTypes from 'prop-types'
import { useContext } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../Context/firebaseProvider/FirebaseProvider';
import UpdateTouristSpotPage from "../UpdateTouristSpotModal/UpdateTouristSpotPage";
import Swal from 'sweetalert2';

const AllTouristSpotCard = ({touristSpot}) => {
    const {user} = useContext(AuthContext);
    const {_id, photo, cost, seasonality, spot, time, userEmail} = touristSpot;

    const handleTouristSpotDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/deleteSpot/${id}`,{
                method: 'DELETE',
              })
                .then(res => res.json())
                .then(data =>{
                    // alert(data.deletedCount);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your tourist spot has been deleted.",
                            icon: "success"
                        });
                    }
                    // console.log(data);
                    // location.reload()
                })
            }
        });

    }

    return (
        <div className="w-[320px] h-[600px] glass mt-10 shadow-2xl mx-auto">
            <figure><img className='w-full h-60' src={photo} alt="tourist spot photo"/></figure>
            <div className="card-body flex flex-col">
                <div className='text-xl h-40'>
                    <h3>Spot Name:<span className='font-bold'>{spot}</span></h3>
                    <h5>Average Cost: <span className='font-bold'>${cost}</span></h5>
                    <p>travel time: <span className='font-bold'>{time}</span></p>
                    <p>Seasonality: <span className='font-bold'>{seasonality}</span></p>
                </div>
                
                <div className='mt-10 flex justify-center items-center w-full'>
                    <Link to={`/viewDetails/${_id}`} className='w-full'>  
                        <button className="btn btn-sm btn-outline  w-full">View Details</button> 
                    </Link>
                </div>
                    {
                        (user?.email=== userEmail)?<div className="flex justify-between items-center gap-1">
                            {/* <button className="btn btn-sm btn-outline">
                                Update This Spot 
                            </button> */}
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-sm btn-outline btn-success w-1/2" onClick={()=>document.getElementById('my_modal_4').showModal()}>Update</button>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-full max-w-6xl">
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

                            <div className="w-1/2">
                                <button onClick={() => handleTouristSpotDelete(_id)} className="btn btn-sm btn-outline btn-error w-full">
                                    Delete
                                </button>
                            </div>
                        </div>
                        
                        :
                        ''
                    }
            </div>
        </div>
    );
};

AllTouristSpotCard.propTypes ={
    touristSpot: PropTypes.object.isRequired,
}
export default AllTouristSpotCard;