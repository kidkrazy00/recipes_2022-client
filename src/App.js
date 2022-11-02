import * as React from "react";
import { useRoutes } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";

import Landing from "./views/landing"
import About from "./views/about"
import Oops from "./views/Oops"

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
      element: <Oops
        pageClass="oops"
        isAuthenticated={false}
        isLoading={isLoading}
      />
    }
  ];

  let authenticatedRoutes = [
    {
      path: "/",
      element: <Dashboard
        pageTitle={Dashboard}
        user={user}
        isAuthenticated={isAuthenticated}
        isLoading={isLoading}
      />
    },
    {
      path: "/recipes",
      children: [
        {
          index: true,
          element: <Recipes
            pageTitle={Recipes}
            user={user}
            isAuthenticated={isAuthenticated}
            isLoading={isLoading}
          />
        },
        {
          path: ":slug",
          element: <Recipe
            user={user}
            isAuthenticated={isAuthenticated}
            isLoading={isLoading}
          />
        }
      ]
    },
    {
      path: "/contribute",
      element: <Contribute
        pageTitle={Contribute}
        user={user}
        isAuthenticated={isAuthenticated}
        isLoading={isLoading}
      />
    },
    {
      path: "/dashboard",
      element: <Dashboard
        pageTitle={Dashboard}
        user={user}
        isAuthenticated={isAuthenticated}
        isLoading={isLoading}
      />
    },
    {
      path: "*",
      element: <Oops
        pageClass="oops"
        isAuthenticated={isAuthenticated}
        isLoading={isLoading}
      />
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