import { useContext } from "react";
import { AuthContext } from "../../Context/firebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignInWithSocialMedia = () => {
    const {googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSocialMediaLogin = (socialMediaProvider) =>{

        socialMediaProvider().then(result =>{
            if(result.user){
                Swal.fire({
                    title: 'Success!',
                    text: 'You Login Successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                })
                
                navigate(location?.state || '/');
            }
        })

    }

    return (
        <div>

            <div>
                <button className="btn btn-secondary" onClick= {() => handleSocialMediaLogin(googleLogin)}>Google Sign In</button>
            </div>
            
        </div>
    );
};

export default SignInWithSocialMedia;