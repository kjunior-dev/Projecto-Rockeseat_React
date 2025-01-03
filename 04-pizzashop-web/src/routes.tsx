import {createBrowserRouter} from "react-router-dom";
import {AppLayout} from "./pages/_layouts/app.tsx";
import {Dashboard} from "./pages/app/Dashboard/dashboard.tsx";
import {SingIn} from "./pages/auth/sing-in.tsx";
import {AuthLayout} from "./pages/_layouts/auth.tsx";
import {SingUp} from "./pages/auth/sing-Up.tsx";
import {Orders} from "./pages/app/Orders/orders.tsx";
import {NotFount} from "./pages/notFount.tsx";

export const router = createBrowserRouter([

        {
            path: '/', element: <AppLayout/>,
            errorElement: <NotFount/>,
            children: [
                {path: "/", element: <Dashboard/>},
                {path: "/orders", element: <Orders/>},
            ],
        },

        {
            path: '/', element: <AuthLayout/>,
            children: [
                {path: "/sing-in", element: <SingIn/>},
                {path: "/sing-up", element: <SingUp/>},
            ],
        },
    ],
)