import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import SubscriptionBox from "../pages/SubscriptionBox";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import CardsDetails from "../pages/CardsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import ErrorPage from "../pages/ErrorPage";
import ForgatePass from "../pages/ForgatePass";
import Subscription from "../pages/Subscription";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path:'',
                    element: <Home></Home>,
                    loader: ()=> fetch('/subscription.json'),
                    hydrateFallbackElement: <Loading></Loading>
                },
            
                {
                    path:'/subscription/:id',
                    element: <SubscriptionBox></SubscriptionBox>,
                    loader: ()=> fetch('/subscription.json'),
                    hydrateFallbackElement: <Loading></Loading>
                },
            ]
        },

        {
            path:'/profile',
            element: <PrivateRoute>
                <MyProfile></MyProfile>,
            </PrivateRoute>
        },
        {
            path:'/subscription',
            element: <PrivateRoute>
                <Subscription></Subscription>
            </PrivateRoute>,
        },

        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element: <Login></Login>,
                },
                {
                    path:"/auth/register",
                    element: <Register></Register>
                },
                {
                    path:'/auth/forget-pass',
                    element: <ForgatePass></ForgatePass>,
                }
            ]
        },
        {
            path: '/cars-details/:id',
            element: <PrivateRoute>
                <CardsDetails></CardsDetails>,
            </PrivateRoute>,
            loader: ()=> fetch('/subscription.json'),
            hydrateFallbackElement: <Loading></Loading>

        },
        {
            path: '/*',
            element: <ErrorPage></ErrorPage>,
        },
        
    ]
);

export default router;