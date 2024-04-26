import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const SignUpPage = () => {
    
    const [showPassword, setShowPassword]=useState(false);
  
    return (
        <div className="min-h-screen bg-base-200 mt-5 rounded-2xl">
            <div className="hero-content flex-col">
                <div className="text-center mb-2">
                    <h1 className="text-5xl font-bold">Create an Account</h1>
                </div>
                <div className="card w-full max-w-sm shadow-green-500 shadow-sm bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name..." name="fullName" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email..." name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Enter your photo url..." name="imageURL" className="input input-bordered"/>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword? "text":"password"} placeholder="Password..." name="password" className="input input-bordered" required />
                            <span className="top-[54px] right-5  absolute" onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-black text-white text-lg">Register</button>
                        </div>
                        <div className="flex justify-center gap-5">
                            <h1>Have an account?</h1>
                            <Link to="/login"><p className="text-sky-400 font-bold hover:text-black link link-hover"> Sign In </p></Link>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default SignUpPage;