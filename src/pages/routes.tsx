import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./home/homePage";
import { PokemonPage } from "./pokemon-page/pokemonPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        // errorElement: "errorPageComponent",
    },
    {
        path: "/pokemon/:pokemonId",
        element: <PokemonPage />,
    }
])