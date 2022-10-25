import React, { useState, useEffect } from "react";
import { fetchRecipes } from '../services/fetchRecipes'
import { Link } from 'react-router-dom'

// layout
import Layout from '../layout/Layout'

const RecipesPage = (token) => {
  const [selectedOption, setSelectedOption] = useState('all');
  const [list, setList] = useState([]);
  const urlPath = `${process.env.REACT_APP_CDN}`;
  const imgPath = urlPath + 'icons/icons_';

  useEffect(() => {
    let mounted = true;
    fetchRecipes()
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, []);

  const optionsArray = list.map((node, index) => {
    return node.category;
  });
  
  const uniqueOptions = optionsArray.filter((node, index, array) => array.indexOf(node) === index);
  
  const options = uniqueOptions.map((optionValue, index) => (
    <option key={index} value={optionValue}>{optionValue}</option>
  ));

  const itemFilter = (
    <div className="recipe__list__filter">
      <i />
      <select
        value={selectedOption}
        onChange={e => setSelectedOption((e.target.value))}
      >
        <option value="all">All ({optionsArray.length})</option>
        {options}
      </select>
    </div>
  )

  const itemList = (
    list.map((node, index) => (
      selectedOption === node.category || selectedOption === 'all'
        ? <li key={index} className="card" >
          <Link to={`/recipes/${node.id}`}>
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
            <div className="card__content">
              <h3 className="card__title">{node.title}</h3>
              <small className="card__author">Contributed by: {node.name === 'kidkrazy' ? 'Keith' : node.name}</small>
            </div>
          </Link>
        </li>
        : ''
    ))
  )

  return (
    <>
    {list 
      ?
      <Layout
        pageTitle="Recipes"
        pageClass="recipe__list"
        token={token}
        userInteractions={itemFilter}
      >
        <ul>
          {itemList}
        </ul>
      </Layout>
      : 'loading'
    }
    </>
  )
}

export default RecipesPage