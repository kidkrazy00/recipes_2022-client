import React from "react";
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    cardType,
    disabled,
    className,
    onClick,
    onKeyPress,
    cardTitle,
    cardMeta,
    cardMedia,
    cardContent,
    cardActions
  } = props;

  return (
    <>
      {cardType === 'default'
        ?
          <div
            className={disabled ? className : 'card'}
            onClick={onClick}
            onKeyPress={onKeyPress ? onKeyPress : onClick}
            tabIndex="0"
            disabled={disabled ? disabled : ''}
          >
            {cardMedia ? cardMedia : ''}
            <div className="card__content">
              {cardTitle ? <h3 className="card__title">{cardTitle}</h3> : ''}
              {cardMeta ? cardMeta : ''}
              {cardContent ? cardContent : ''}
              {cardActions ? cardActions : ''}
            </div>
          </div>
        : ''
      }

      {cardType === 'recipeItem'
        ? <>
          <li
            className={className ? className : 'card'}
            onClick={onClick}
            onKeyPress={onKeyPress ? onKeyPress : onClick}
            tabIndex="0"
            disabled={disabled ? disabled : ''}
          >
            {cardMedia ? cardMedia : ''}
            <div className="card__content">
              {cardTitle ? <h3 className="card__title">{cardTitle}</h3> : ''}
              {cardMeta ? cardMeta : ''}
              {cardContent ? cardContent : ''}
            </div>
          </li>
        </>
        : ''
      }
    </>
  )
}

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
  disabled: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
  cardMedia: PropTypes.any,
  cardTitle: PropTypes.any,
  cardMeta: PropTypes.any,
  cardContent: PropTypes.any
}

export default Card;