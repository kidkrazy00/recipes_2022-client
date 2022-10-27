import * as React from "react";
import { useRoutes } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";

import Landing from "./views/landing"
import About from "./views/about"
import Nag from "./components/Nag"

import Dashboard from "./views/dashboard"
import Contribute from "./views/contribute"
import Recipes from "./views/recipes"
import Recipe from "./views/recipe"

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  let inauthenticatedRoutes = [
    {
      path: "/",
      element: <Landing
        pageTitle={Landing}
        pageClass="landing"
      />
    },
    {
      path: "/about",
      element: <About
        pageTitle={About}
        pageClass="about"
      />
    },
    {
      path: "*",
      element: <Nag />
    }
  ];

  let authenticatedRoutes = [
    {
      path: "/",
      element: <Dashboard
        pageTitle={Dashboard}
        isAuthenticated={isAuthenticated}
        user={user}
      />
    },
    {
      path: "/recipes",
      children: [
        {
          index: true,
          element: <Recipes
            pageTitle={Recipes}
            isAuthenticated={isAuthenticated}
            user={user}
          />
        },
        {
          path: ":id",
          element: <Recipe
            isAuthenticated={isAuthenticated}
            user={user}
          />
        }
      ]
    },
    {
      path: "/contribute",
      element: <Contribute
        pageTitle={Contribute}
        isAuthenticated={isAuthenticated}
        user={user}
      />
    },
    {
      path: "/dashboard",
      element: <Dashboard
        pageTitle={Dashboard}
        isAuthenticated={isAuthenticated}
        user={user}
      />
    },
    {
      path: "*",
      element: <Nag />
    }
  ];

  let inauthenticated = useRoutes(inauthenticatedRoutes);
  let authenticated = useRoutes(authenticatedRoutes);

  if (!isAuthenticated) {
    return inauthenticated
  }
  return authenticated
}

export default App