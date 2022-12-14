import React, { useState, useEffect } from "react";
import { fetchRecipes } from '../services/fetchRecipes'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/Button'

//layout
import Layout from '../layout/LayoutRecipe'

const RecipePost = (token) => {
  let navigate = useNavigate();
  let params = useParams();
  let paramsId = params.id - 1;
  
  const [data, setData] = useState([]);
  const urlPath = `${process.env.REACT_APP_CDN}`;
  const imgPath = urlPath + 'icons/icons_';

  useEffect(() => {
    let mounted = true;

    fetchRecipes()
      .then(items => {
        if (mounted) {
          setData(items[paramsId])
          // console.log('data: ', data)
        }
      })
    return () => mounted = false;
  }, [paramsId]);

  const controls = (
    <div className='controls'>
      <Button
        buttonType="button"
        cClass="btn__back"
        icon={true}
        name="Back"
        title="Back"
        click={() => navigate(-1)}
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
        alt={data.icon}
        loading="auto"
      />
    </picture>
  )

  const date = (
    <time dateTime={data.date}>{data.date}</time>
  )

  return (
    <>
      {data
        ?
        < Layout
          pageTitle={data.title}
          pageClass="recipe"
          token={token}
          key={params.id}
        >
          {/* {date} */}
          {heroImage}
          <small className="card__author">Contributed by: {data.name}</small>
          <h4>ingredients</h4>
          <p className="recipe--ingredients">{data.ingredients}</p>
          <h4>directions</h4>
          <p className="recipe--directions">{data.directions}</p>
          {controls}
        </Layout>
        : 'loding'
      }
    </>
  )
}

export default RecipePost