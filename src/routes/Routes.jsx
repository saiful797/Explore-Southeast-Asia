import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../errorPage/ErrorPage";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AddTourismSpotPage from "../pages/AddTourismSpotPage";
import UpdateTouristSpotPage from "../pages/UpdateTouristSpotPage";
import AllTouristsSpotPage from "../pages/AllTouristsSpotPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path:'/login',
                element: <SignInPage />
            },
            {
                path:'/register',
                element: <SignUpPage />
            },
            {
                path: '/add/tourists/spot',
                element: <AddTourismSpotPage />
            },
            {
                path:'/update/tourism/Spot',
                element: <UpdateTouristSpotPage />
            },
            {
                path:'/all/tourists/spot',
                element: <AllTouristsSpotPage />,
                loader: () => fetch('http://localhost:5000/touristSpot')
            }
        ]
    }
])

export default router;