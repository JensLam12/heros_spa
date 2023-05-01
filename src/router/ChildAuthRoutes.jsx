import { Navigate } from "react-router-dom";
import { LoginPage } from '../auth'

export const ChildAuthRoutes = [
    {
        path: "",
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <Navigate to={"/login"} />,
    },
];