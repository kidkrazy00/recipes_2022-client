import * as React from "react";
import { useRoutes } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import history from "./services/history";

import About from "./pages/about"
import Nag from "./components/Nag"

import Dashboard from "./pages/dashboard"
import Contribute from "./pages/contribute"
import Recipes from "./pages/recipes"
import Recipe from "./pages/recipe"

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  let inauthenticatedRoutes = [
    {
      path: "/",
      element: <About
        pageTitle={About}
        pageClass="about"
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