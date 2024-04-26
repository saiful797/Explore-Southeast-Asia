import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    const navLinks=<>
        <li className="md:hover:text-red-600 font-extrabold"><NavLink to="/">Home </NavLink></li>
        <li className="md:hover:text-red-600 font-medium"><NavLink to="/tourism/spot">All Tourism Spot</NavLink></li>
        <li className="md:hover:text-red-600 font-medium"><NavLink to="/add/tourism/spot">Add Tourists Spot </NavLink></li>
        <li className="md:hover:text-red-600 font-medium"><NavLink to="/update/tourism/Spot">Update Tourists Spot </NavLink></li>
        <li className="md:hover:text-red-600 font-medium"><NavLink to="/myList">My List</NavLink></li>
        <li className="md:hover:text-red-600 font-medium"><NavLink to="/about">About Us</NavLink></li>
        <li className="md:hover:text-red-600 font-medium"><NavLink to="/contact">Contact Us</NavLink></li>  
        <div>
            <li className="md:hidden"><NavLink to="/login">Sign in</NavLink></li>
            <li className="md:hidden"><NavLink to="/register">Sign up</NavLink></li>
        </div>
    </>



    return (
    <div className="navbar bg-black p-3 mt-3">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-outline btn-sm btn-info lg:hidden">
                    
                    <FiAlignJustify className="w-5 h-5"/>

                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
            <ul className="menu menu-horizontal px-1 gap-1 text-white">
                    {navLinks}
            </ul>
        </div>
        
        <div className="navbar-end">
            {
                // user?<div className="flex justify-center items-center gap-2">

                //     <div className="w-10 tooltip">
                        
                //             {/* user?.photoURL? <img className="rounded-full" src={user.photoURL}/>
                //             : */}
                //             <img className="rounded-full" src="https://i.ibb.co/Jq10C13/user.png" alt="User profile..."/>
                        
                //     </div>

                //     <div>
                //         <Link to="/">
                //             <button className="btn btn-sm btn-outline btn-success">Logout</button>
                //         </Link>
                //     </div>

                // </div>
                // :
                <div className="space-x-3 hidden md:flex">
                    <Link className="btn btn-sm btn-outline text-white" to="/login">Sign in</Link>
                    <Link className="btn btn-sm btn-outline text-white" to="/register">Sign up</Link>
                </div>
            }
        </div>
    </div>
    );
};

export default NavBar;