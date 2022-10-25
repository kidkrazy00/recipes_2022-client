import * as React from "react";
import { useRoutes } from "react-router-dom"

import useToken from "./services/useToken"
import Login from "./components/login"
import About from "./pages/about"
import Nag from "./components/Nag"

import Dashboard from "./pages/dashboard"
import Contribute from "./pages/contribute"
import Recipes from "./pages/recipes"
import Recipe from "./pages/recipe"

const App = () => {
  const { token, setToken } = useToken();

  let inauthenticatedRoutes = [
    {
      path: "/",
      element: <Login
        pageTitle={Login}
        pageClass="login"
        setToken={setToken}
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
        token={token}
      />
    },
    {
      path: "/recipes",
      children: [
        {
          index: true,
          element: <Recipes
            pageTitle={Recipes}
            token={token}
          />
        },
        {
          path: ":id",
          element: <Recipe token={token} />
        }
      ]
    },
    {
      path: "/contribute",
      element: <Contribute
        pageTitle={Contribute}
        token={token}
      />
    },
    {
      path: "/dashboard",
      element: <Dashboard
        pageTitle={Dashboard}
        token={token}
      />
    },
    {
      path: "*",
      element: <Nag />
    }
  ];

let inauthenticated = useRoutes(inauthenticatedRoutes);
let authenticated = useRoutes(authenticatedRoutes);

if (!token) {
  return inauthenticated
}
return authenticated
}

export default App