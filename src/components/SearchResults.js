import React from "react";
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const SearchResults = ({ data, searchTerm }) => {
  let navigate = useNavigate();
  const urlPath = `${process.env.REACT_APP_CDN}`;
  const imgPath = urlPath + 'icons/icons_';

  return (
    data.filter((value) => {
      if (searchTerm == '') {
        return value
      } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return value
      }
      else if (value.category.toLowerCase().includes(searchTerm.toLowerCase())) {
        return value
      }
    }).map((value, key) => {
      return (
        <Card
          cardType='recipeItem'
          className="card"
          key={key}
          onClick={() => { navigate(`/recipes/${value.slug}`) }}
          cardMedia={
            <div className={'card__icon--' + value.category}>
              <img
                width=""
                height=""
                src={imgPath + value.icon}
                data-src={imgPath + value.icon}
                alt={value.icon}
                loading="auto"
              />
            </div>
          }
          cardTitle={value.title}
          cardMeta={
            <small className="card__author">
              Contributed by: {value.name === 'kidkrazy' ? 'Keith' : value.name}
            </small>
          }
        />
      )
    })
  )
}

export default SearchResults;