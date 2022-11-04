import React, { useState } from "react";
import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";

// layout
import Layout from '../layout/Layout'

const RecipesPage = ({ isAuthenticated, isLoading, data, dataCategoriesFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading || !data) {
    return <div>Loading ...</div>;
  }

  return (
    <Layout
      pageTitle="Recipes"
      pageClass="recipe__search"
      userInteractions={<SearchInput data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      isAuthenticated={isAuthenticated}
    >
      <ul>
        <SearchResults data={data} searchTerm={searchTerm} />
      </ul>
    </Layout>

  )
}

export default RecipesPage;