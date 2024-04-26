import { useLoaderData } from "react-router-dom";

const HomePage = () => {
    const tourismSpots = useLoaderData();

    console.log(tourismSpots);
    
    return (
        <div>
            <h1 className="text-6xl font-extrabold text-center">This is Home Page.</h1>
        </div>
    );
};

export default HomePage;