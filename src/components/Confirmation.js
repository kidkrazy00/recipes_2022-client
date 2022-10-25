import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Confirmation = ({ previousStep, name, email, title, category, ingredients, directions }) => {
  let nameErr = ('We\'re going want to know your name.')
  let emailErr = ('We\'re going to want to know your email.')
  let titleErr = ('A recipe title is required.')
  let categoryErr = ('You need to choose an appropriate category for this recipe.')
  let ingredientsErr = ('Hey now, a recipe needs ingredients.')
  let directionsErr = ('Lacking some direction here.')

  return (
    <>
      {
        name === undefined || name === '',
        email === undefined || email === '',
        title === undefined || title === '',
        category === undefined || category === '',
        ingredients === undefined || ingredients === '',
        directions === undefined || directions === ''
          ? <p>Oh no, it looks like you missed something.</p>
          : <p>Here's what you're going to contribute.</p>
      }
      <fieldset>
        {name === undefined || name === '' ? <p className="error">{nameErr}</p> : <p><b>Name: </b>{name}</p>}
        {email === undefined || email === '' ? <p className="error">{emailErr}</p> : <p><b>Email: </b>{email}</p>}
        <hr />
        {title === undefined || title === '' ? <p className="error">{titleErr}</p> : <h3>{title}</h3>}
        {category === undefined || category === '' ? <p className="error">{categoryErr}</p> : <><p><b>Category: </b>{category}</p></>}
        {ingredients === undefined || ingredients === '' ? <p className="error">{ingredientsErr}</p> : <><h4>Ingredients: </h4><p>{ingredients}</p></>}
        {directions === undefined || directions === '' ? <p className="error">{directionsErr}</p> : <><h4>Directions: </h4><p>{directions}</p></>}
      </fieldset>
      <Button
        buttonType="button"
        cClass="btn__back"
        type="button"
        title="Previous"
        icon="true"
        click={previousStep}
      />
      <Button
        buttonType="button"
        cClass="btn__send"
        type="submit"
        title="Submit"
        icon="true"
      />
    </>
  )
}

export default Confirmation;