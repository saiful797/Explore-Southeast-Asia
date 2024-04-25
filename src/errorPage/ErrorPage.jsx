import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-center items-center mt-10 rounded-xl gap-10">
            <div>
                <Link to="/">
                    <button className="btn btn-outline btn-accent flex"> 
                        <img className="w-10 rounded-full" src="https://i.ibb.co/qjrHDSr/arrow2.jpg" alt="" />
                        Back to Home
                    </button>
                </Link>
            </div>
            <div className="w-1/2">
                <img src="https://i.ibb.co/2Z9pSVL/404.png" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;