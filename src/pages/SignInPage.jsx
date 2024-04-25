import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="min-h-screen bg-base-200 mt-10 md:mt-5 rounded-2xl">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>
                </div>
                <div className="card w-full max-w-sm shadow-green-500 shadow-sm bg-base-100 mt-10 md:mt-0">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email..." name="email" className="input input-bordered" required />
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

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-base font-medium">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button  className="btn bg-black text-white text-lg">Sign In</button>
                        </div>
                        <div className="flex justify-center gap-5 mt-2">
                            <h1>Don't have an account?</h1>
                            <Link to="/register"><p className="text-orange-400 font-bold hover:text-black link link-hover">Sign Up</p></Link>
                        </div>
                    </form>
                    <div className="rounded-b-2xl bg-slate-100 pt-2 pb-5">
                        <div className="text-2xl font-bold text-center">OR</div>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default SignInPage;