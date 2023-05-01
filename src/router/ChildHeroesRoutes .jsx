import { Navigate } from "react-router-dom";
import { DCPage, MarvelPage, HeroPage, SearchPage } from '../heros'

export const ChildHeroesRoutes = [
    { 
        path: "marvel", 
        element: <MarvelPage /> 
    },
    {
        path: "dc",
        element: <DCPage />,
    },
    {
        path: "search",
        element: <SearchPage />,
    },
    {
        path: "hero/:id",
        element: <HeroPage />,
    },
    {
        path: "/*",
        element: <Navigate to={"/marvel"} />,
    },
];