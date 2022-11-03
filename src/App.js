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
// import { initialize } from "workbox-google-analytics";

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [data, setData] = useState([]);
  const [dataSorted, setDataSorted] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [dataCategoriesFilter, setDataCategoriesFilter] = useState([]);

  const initializeData = (data) => {
    let sortedDataArray = data.sort((a, b) => a.category.localeCompare(b.category));
    let dataCategoriesArray = data.reduce((obj, item) => (obj[item.category] = item.category, obj), []);
    let sortedCategories = dataCategoriesArray.sort((a, b) => a.value.localeCompare(b.value));

    let newCategories = data.reduce(
      (previousValue, currentValue) => [...previousValue, currentValue.category],
      [],
    );
    let filteredCategories = [...new Set(newCategories)];

    setDataSorted(sortedDataArray)
    setDataCategories(sortedCategories)
    setDataCategoriesFilter(filteredCategories)
    // console.group(sortedDataArray, sortedCategories, filteredCategories)
    console.log('initiallized')
  }

  useEffect(() => {
    let mounted = true;

    if (mounted && isAuthenticated === true) {
      fetchRecipes()
        .then(data => {
          setData(data.items)
          initializeData(data.items)
        })
    }
    return () => mounted = false, setData('')
  }, [isAuthenticated]);

  // routes
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
            data={dataSorted}
            dataCategoriesFilter={dataCategoriesFilter}
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
        dataCategoriesFilter={dataCategoriesFilter}
        user={user}
        isAuthenticated={isAuthenticated}
        isLoading={isLoading}
      />
    },
    {
      path: "/dashboard",
      element: <Dashboard
        pageTitle={Dashboard}
        data={dataSorted}
        dataCategories={dataCategories}
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

  if (isAuthenticated) {
    return authenticated
  }

  return inauthenticated

}

export default App