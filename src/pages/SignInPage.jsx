import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/firebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import SignInWithSocialMedia from "../components/SignInWithSocialMedia/SignInWithSocialMedia";


const SignInPage = () => {
    const {singInUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const {register ,reset , handleSubmit} = useForm();

    // Navigation Process
    const navigate = useNavigate(null);

    const onSubmit = (data) => {
        const {email, password} = data;
        // console.log(data);
        singInUser(email, password).then(result => {
            if(result.user){
                Swal.fire({
                    title: 'Success!',
                    text: 'You Login Successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                })
            }

            navigate(location?.state || '/');
            
            reset();
        })
        .catch(error =>{
            if(error.message){
                Swal.fire({
                    title: 'Error!',
                    text: 'Invalid Credential!',
                    icon: 'error',
                    confirmButtonText: 'OK',
                })
            }
        })
    }

    return (
        <div className="min-h-screen bg-[url('https://i.postimg.cc/Gh3XYhh6/tourism3.jpg')] bg-no-repeat bg-cover">
            <div className="hero-content flex-col">
                <div className="text-center md:mb-2">
                    <h1 className="text-5xl mt-5 font-bold text-white">Sign In now!</h1>
                </div>
                <div className="card w-full max-w-sm shadow-green-500 shadow-sm bg-base-100 mt-5 md:mt-0">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email..." name="email" className="input input-bordered" {...register("email")} required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword? "text":"password"} placeholder="Password..." name="password" className="input input-bordered" {...register("password")} required />

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
                            <Link to="/register"><p className="text-sky-400 font-bold hover:text-black link link-hover">Sign Up</p></Link>
                        </div>
                    </form>
                    <div className="pb-5 -mt-5">
                        <div className="text-2xl font-bold text-center text-orange-500 font-DancingScript">OR</div>
                        <div className="mt-2">
                            <SignInWithSocialMedia/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default SignInPage;