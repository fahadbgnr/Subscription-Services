import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import SubscriptionBox from "../pages/SubscriptionBox";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import CardsDetails from "../pages/CardsDetails";

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
                },
                {
                    path:'/profile',
                    element: <MyProfile></MyProfile>,
                },
            
                {
                    path:'/subscription/:id',
                    element: <SubscriptionBox></SubscriptionBox>,
                    loader: ()=> fetch('/subscription.json'),
                },
            ]
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
            ]
        },
        {
            path: '/cars-details/:id',
            element: <CardsDetails></CardsDetails>,
            loader: ()=> fetch('/subscription.json'),

        },
        {
            path: '/*',
            element: <h2>Error404</h2>,
        },
        
    ]
);

export default router;