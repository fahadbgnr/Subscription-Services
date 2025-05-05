import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import SubscriptionBox from "../pages/SubscriptionBox";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path:'',
                    element: <Home></Home>,
                },
                {
                    path:'/profile',
                    element: <MyProfile></MyProfile>,
                },
            
                {
                    path:'/subscription/:id',
                    element: <SubscriptionBox></SubscriptionBox>
                },
            ]
        },
        {
            path: '/auth',
            element: <h2>Authentication layout</h2>,
        },
        {
            path: '/news',
            element: <h2>news layout</h2>,
        },
        {
            path: '/*',
            element: <h2>Error404</h2>,
        },
        
    ]
);

export default router;