import React, { useState, useEffect } from "react";
import { fetchRecipes } from '../services/fetchRecipes';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

// layout
import Layout from '../layout/Layout'

const RecipesPage = ({ isAuthenticated, isLoading, data, dataCategoriesFilter }) => {
  let navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('all');
  const urlPath = `${process.env.REACT_APP_CDN}`;
  const imgPath = urlPath + 'icons/icons_';

  const recipeFilter = dataCategoriesFilter.map((optionValue, index) => (
    <option key={index} value={optionValue}>{optionValue}</option>
  ));

  const itemFilter = (
    <div className="recipe__list__filter">
      <i />
      <select
        value={selectedOption}
        onChange={e => setSelectedOption((e.target.value))}
      >
        <option value={'all'}> {'all'} </option>
        {recipeFilter}
      </select>
    </div>
  )

  const itemList = (
    data.map((node, index) => (
      selectedOption === node.category || selectedOption === 'all'
        ?
        <Card
          cardType='recipeItem'
          className="card"
          key={index}
          onClick={() => { navigate(`/recipes/${node.slug}`) }}
          cardMedia={
            <div className={'card__icon--' + node.category}>
              <img
                width=""
                height=""
                src={imgPath + node.icon}
                data-src={imgPath + node.icon}
                alt={node.icon}
                loading="auto"
              />
            </div>
          }
          cardTitle={node.title}
          cardMeta={
            <small className="card__author">
              Contributed by: {node.name === 'kidkrazy' ? 'Keith' : node.name}
            </small>
          }
        />
        : ''
    ))
  )

  if (isLoading || !data) {
    return <div>Loading ...</div>;
  }

  return (
    <Layout
      pageTitle="Recipes"
      pageClass="recipe__list"
      userInteractions={itemFilter}
      isAuthenticated={isAuthenticated}
    >
      <ul>
        {itemList}
      </ul>
    </Layout>

  )
}

export default RecipesPage;