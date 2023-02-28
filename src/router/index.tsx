import App from "../App";
import Pokedex from "../pages/Pokedex/Pokedex";
import { PokemonDashboard } from "../pages/Pokedex/PokemonPage/PokemonDashboard";
import ErrorPage from "../pages/errorPage";
import { UnAuthorizedRoute, AuthorizedRoute } from "./AuthWrapper";
import { UserProfile } from "../pages/UserProfile/UserProfile";
import SignIn from "../pages/SignIn/SignIn";
import { SignUp } from "../pages/SignUp/SignUp";
import { HomePage } from "../pages/HomePage/HomePage";

const appRouter = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: (
          <AuthorizedRoute>
            <UserProfile></UserProfile>
          </AuthorizedRoute>
        ),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "pokedex",
        element: <Pokedex />,
        children: [
          {
            path: ":pokemonName",
            element: <PokemonDashboard className="dashboard" />,
            children: [{}],
          },
        ],
      },
    ],
  },
  {
    path: "sign-in",
    element: (
      <UnAuthorizedRoute>
        <SignIn></SignIn>
      </UnAuthorizedRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "sign-up",
    element: (
      <UnAuthorizedRoute>
        <SignUp></SignUp>
      </UnAuthorizedRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
  },
];
export default appRouter;
