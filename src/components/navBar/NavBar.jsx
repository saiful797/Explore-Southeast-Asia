import { useContext } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/firebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip"; 


const NavBar = () => {
    const {user, logout} = useContext(AuthContext);

    // console.log(user);

    const navLinks=<>
        <li className="md:hover:text-red-600 font-extrabold"><NavLink to="/">Home </NavLink></li>
        <li className="md:hover:text-red-600 font-medium"><NavLink to="/all/tourists/spot">All Tourists Spot</NavLink></li>
        {user?<li className="md:hover:text-red-600 font-medium"><NavLink to="/add/tourists/spot">Add Tourists Spot </NavLink></li> : ''}
        {user?<li className="md:hover:text-red-600 font-medium"><NavLink to="/myList">My List</NavLink></li> : ''}
        {user?<li className="md:hover:text-red-600 font-medium"><NavLink to="/add/country">Add Country</NavLink></li> : ''}
        <li className="md:hover:text-red-600 font-medium"><NavLink to="/about">About Us</NavLink></li>  
        {
            user? '' : <div>
            <li className="md:hidden"><NavLink to="/login">Sign in</NavLink></li>
            <li className="md:hidden"><NavLink to="/register">Sign up</NavLink></li>
        </div>
        }
            
    </>

    const myFunction = () =>{

        Swal.fire({
            title: 'Success!',
            text: 'Logout Successful!',
            icon: 'success',
            confirmButtonText: 'OK',
        })
        logout();
        location.reload();
    }


    return (
    <div className="navbar bg-black p-3 mt-3">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-outline btn-sm text-white lg:hidden">
                    
                    <FiAlignJustify className="w-5 h-5"/>

                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
            <div className="ml-3 lg:ml-0 text-white">
                <Link to='/' className="text-4xl font-bold flex">
                    <div className="relative">
                        <h1 className="font-Tangerine">Explore<span className="text-amber-600">Southeast</span>Asia</h1> 
                        <p className="text-xs font-extrabold absolute top-7 right-0 text-white">Best Tourism</p>
                    </div>
                </Link>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
                    {navLinks}
            </ul>
        </div>
        
        <div className="navbar-end">

            {
                user?<div className="flex justify-center items-center gap-2">

                    <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                        <div tabIndex={0}>
                            <div className="w-12" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} data-tooltip-place="left">
                                
                                {user?.photoURL ?(
                                    <img className="rounded-full" src={user.photoURL} alt="User profile"/>
                                ) : (
                                    <img className="rounded-full" src="https://i.ibb.co/Jq10C13/user.png" alt="User profile"/>
                                )}
                                
                            </div>
                        </div>
                        <div className="dropdown-content z-[1] menu">
                            <NavLink to="/">
                                <button onClick={myFunction} className="btn btn-sm bg-black text-white">Logout</button> 
                            </NavLink>
                        </div>
                    </div>

                </div>
                :
                <div className="space-x-3 hidden md:flex">
                    <Link className="btn btn-sm btn-outline text-white" to="/login">Sign in</Link>
                    <Link className="btn btn-sm btn-outline text-white" to="/register">Sign up</Link>
                </div>
            }
        </div>
        <Tooltip id="my-tooltip" />
    </div>
    );
};

export default NavBar;