import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../errorPage/ErrorPage";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import AddTourismSpotPage from "../pages/AddTourismSpotPage";
import UpdateTouristSpotPage from "../pages/UpdateTouristSpotPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                loader: () => fetch('http://localhost:5000/touristSpot')
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
                path: '/add/tourism/spot',
                element: <AddTourismSpotPage />
            },
            {
                path:'/update/tourism/Spot',
                element: <UpdateTouristSpotPage />
            }
        ]
    }
])

export default router;