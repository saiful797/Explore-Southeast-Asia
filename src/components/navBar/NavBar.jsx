import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    const navLinks=<>
        <li className="md:hover:text-red-600 md:text-teal-500"><NavLink to="/">Home </NavLink></li>
        <li className="md:hover:text-red-600"><NavLink to="/about">About</NavLink></li>
        <li className="md:hover:text-red-600"><NavLink to="/contact">Contact Us</NavLink></li>  
        <div>
            <li className="md:hidden"><NavLink to="/login">Sign in</NavLink></li>
            <li className="md:hidden"><NavLink to="/register">Sign up</NavLink></li>
        </div>
    </>



    return (
    <div className="navbar bg-black p-3 mt-3">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-sm bg-slate-50 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
            <div className="ml-3 lg:ml-0 text-white">
                <Link to='/' className="text-2xl md:text-4xl lg:text-4xl font-bold flex">
                    Explore Southeast Asia
                </Link>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-1 text-lg font-bold text-white">
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