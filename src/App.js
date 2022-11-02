import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { fetchRecipes } from './services/fetchRecipes';

import Landing from "./views/landing"
import About from "./views/about"
import Oops from "./views/Oops"

import Dashboard from "./views/dashboard"
import Contribute from "./views/contribute"
import Recipes from "./views/recipes"
import Recipe from "./views/recipe"

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [data, setData] = useState([]);

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
            data={data}
            user={user}
            isAuthenticated={isAuthenticated}
            isLoading={isLoading}
          />
        },
        {
          path: ":slug",
          element: <Recipe
            data={data}
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
        data={data}
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

  useEffect(() => {
    let mounted = true;
    
    if (isAuthenticated) {
      fetchRecipes()
        .then(data => {
          if (mounted) {
            setData(data.items)
            // console.log(data.items)
          }
        })
      return () => mounted = false;
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return inauthenticated
  }

  return authenticated
}

export default App