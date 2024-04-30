import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/firebaseProvider/FirebaseProvider";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import UpdateTouristSpotPage from "../components/UpdateTouristSpotModal/UpdateTouristSpotPage";
import { Helmet } from "react-helmet-async";

const MyListPage = () => {
    const {user} = useContext(AuthContext);
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        fetch(`https://explore-southeast-aisa-server.vercel.app/touristSpot/${user?.email}`)
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            setMyList(data);
        })
    },[user])

    const newMyList = myList.filter(spot => user.email === spot.userEmail);
    // console.log(newMyList)

    // Handle Spot Delete
    const handleTouristSpotDelete = (id) =>{
        // console.log('Deleted id: ',id);

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
              fetch(`https://explore-southeast-aisa-server.vercel.app/deleteSpot/${id}`,{
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
                        location.reload()
                    }
                    // console.log(data);
                    // location.reload()
                })
            }
        });
    }

    return (
        <div className="mx-auto mt-5 min-h-screen">
            <Helmet>
                <title>My Spot List</title>
            </Helmet>
            <table className="table border  border-collapse border-slate-400">
                <thead className="text-base">
                    <th className="border border-slate-300">ID</th>
                    <th className="border border-slate-300">Spot Name</th>
                    <th className="border border-slate-300">Country</th>
                    <th className="border border-slate-300">Ave. Cost</th>
                    <th className="border border-slate-300">Action</th>
                </thead>

                <tbody>
                    {
                        newMyList.map((list, i) => (
                            
                            <tr key={i} className="">
                                <td className="border border-slate-300">{i+1}</td>
                                <td className="border border-slate-300">{list.spot}</td>
                                <td className="border border-slate-300">{list.country}</td>
                                <td className="border border-slate-300">${list.cost}</td>

                                <td className="md:flex gap-1 space-y-1 md:space-y-0 border border-slate-300">
                                    <div className="flex justify-between items-center">
                                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                        <button className="btn btn-sm btn-outline" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                                            <AiOutlineEdit />
                                        </button>

                                        <dialog id="my_modal_4" className="modal">
                                            <div className="modal-box w-full max-w-6xl">
                                                <div>
                                                    <UpdateTouristSpotPage id={list._id} />
                                                </div>
                                                <div className="modal-action flex justify-center items-center">
                                                    <form method="dialog w-full">
                                                        {/* if there is a button, it will close the modal */}
                                                        <button className="btn btn-sm btn-outline text-xl w-full bg-black text-white">X</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>

                                    <button onClick={() => handleTouristSpotDelete(list._id)} className="btn btn-outline btn-sm text-red-500 text-lg"><MdDeleteForever /></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyListPage;