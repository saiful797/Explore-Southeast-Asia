import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../errorPage/ErrorPage";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path:'/login',
                element: <SignInPage />
            }
        ]
    }
])

export default router;