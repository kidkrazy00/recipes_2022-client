import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import TagButton from '../components/TagButton'

//layout
import Layout from '../layout/LayoutRecipe'

const RecipePost = ({ user, isAuthenticated, isLoading, data }) => {
  let navigate = useNavigate();
  let params = useParams();
  let paramsSlug = params.slug;

  const urlPath = `${process.env.REACT_APP_CDN}`;
  const imgPath = urlPath + 'icons/icons_';
  const recipeData = data.find(e => e.slug === paramsSlug);

  const controls = (
    <div className='controls'>
      <TagButton
        buttonType="button"
        className="btn__back"
        icon={true}
        name="Back"
        title="Back"
        onClick={() => navigate(-1)}
      />
    </div>
  )

  const heroImage = (
    <picture
      className="recipe__media"
    >
      <source
        media=""
        srcSet={imgPath + recipeData.icon}
      />
      <img
        width=""
        height=""
        src={imgPath + recipeData.icon}
        data-src={imgPath + recipeData.icon}
        alt={imgPath + recipeData.icon}
        loading="auto"
      />
    </picture>
  )

  const date = (
    <time dateTime={recipeData.date}>{recipeData.date}</time>
  )

  if (isLoading || !recipeData) {
    return <div>Loading ...</div>;
  }

  return (
    < Layout
      pageTitle={recipeData.title}
      pageClass="recipe"
      user={user}
      key={paramsSlug}
      isAuthenticated={isAuthenticated}
    >
      {heroImage}
      <small className="card__author">Contributed by: {recipeData.name}</small>
      <h4>ingredients</h4>
      <p className="recipe--ingredients">{recipeData.ingredients}</p>
      <h4>directions</h4>
      <p className="recipe--directions">{recipeData.directions}</p>
      {controls}
    </Layout>
  )
}

export default RecipePost;