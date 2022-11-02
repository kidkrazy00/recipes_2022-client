import React, { useState, useEffect } from "react";
import { fetchRecipes } from '../services/fetchRecipes'
import { useParams, useNavigate } from 'react-router-dom'
import TagButton from '../components/TagButton'

//layout
import Layout from '../layout/LayoutRecipe'

const RecipePost = ({ user, isAuthenticated, isLoading }) => {
  let navigate = useNavigate();
  let params = useParams();
  let paramsSlug = params.slug;

  const [data, setData] = useState([]);
  const urlPath = `${process.env.REACT_APP_CDN}`;
  const imgPath = urlPath + 'icons/icons_';


  useEffect(() => {
    let mounted = true;

    fetchRecipes()
      .then(data => {
        if (mounted) {
          setData(data.items.find(e => e.slug === paramsSlug))
        }
      })
    return () => mounted = false;
  }, [paramsSlug]);

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
        srcSet={imgPath + data.icon}
      />
      <img
        width=""
        height=""
        src={imgPath + data.icon}
        data-src={imgPath + data.icon}
        alt={imgPath + data.icon}
        loading="auto"
      />
    </picture>
  )

  const date = (
    <time dateTime={data.date}>{data.date}</time>
  )

  if (isLoading || !data) {
    return <div>Loading ...</div>;
  }

  return (
    < Layout
      pageTitle={data.title}
      pageClass="recipe"
      user={user}
      key={paramsSlug}
      isAuthenticated={isAuthenticated}
    >
      {heroImage}
      <small className="card__author">Contributed by: {data.name}</small>
      <h4>ingredients</h4>
      <p className="recipe--ingredients">{data.ingredients}</p>
      <h4>directions</h4>
      <p className="recipe--directions">{data.directions}</p>
      {controls}
    </Layout>
  )
}

export default RecipePost;