import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthRoutes } from '../auth';
import { HeroesRoutes } from "../heros/routes/HeroesRoutes";
import { ChildHeroesRoutes } from "./ChildHeroesRoutes ";
import { ChildAuthRoutes } from "./ChildAuthRoutes";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const routesConfig = createBrowserRouter([
    {
        path: "login",
        element: (
            <PublicRoute>
                <AuthRoutes />
            </PublicRoute>
        ),
        children: ChildAuthRoutes,
    },
    {
        path: "/",
        element: (
            <PrivateRoute>
                <HeroesRoutes />
            </PrivateRoute>
        ),
        children: ChildHeroesRoutes,
    },
]);
  
export const AppRouter = () => {
    return <RouterProvider router={routesConfig} />;
};