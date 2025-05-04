import { createBrowserRouter } from "react-router";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <h2>Home layout</h2>,
        },
        {
            path: '/auth',
            element: <h2>Authentication layout</h2>,
        },
        {
            path: '/slider',
            element: <h2>Slider layout</h2>,
        },
        {
            path: '/Subscription Services Section',
            element: <h2>Subscription Services Section layout</h2>,
        },
        {
            path: '/*',
            element: <h2>Error404</h2>,
        },
        
    ]
);

export default router;