import { RouteObject } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import NotFound from "./pages/misc/NotFound";
import Shop from "./pages/shop/Shop";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
        ],
    },
];

export default routes;
