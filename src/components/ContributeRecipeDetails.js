import React from "react";
import PropTypes from "prop-types";
import TagButton from "./TagButton";

const RecipeDetails = ({ previousStep, nextStep, title, setTitle, category, setCategory, ingredients, setIngredients, directions, setDirections }) => {

  const categories = ["Beef", "Bread", "Cake", "Cookie", "Fish", "Pasta", "Pie", "Pork", "Poultry", "Potato", "Rice", "Salad", "Sandwich", "Sauce", "Soup", "Spices" ];

  const options = categories.map((optiionValue, index) => (
    <option key={index} value={optiionValue}>{optiionValue}</option>
  ));

  const optionsSelect = (
    <div className="select__category">
      <i />
      <select
        id="category"
        value={category}
        onChange={e => setCategory((e.target.value))}
        required
      >
        <option value="" disabled defaultValue>Please choose a category</option>
        {options}
      </select>
    </div>
  )

  return (
    <>
      <p>Now let's find out about your recipe.</p>
      <fieldset>
        <div className="element">
          <label htmlFor="title">Recipe Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={title === undefined || title === '' ? 'Recipe Title' : title}
            required
          />
        </div>
        <div className="element">
          <label htmlFor="title">Recipe Category</label>
          {optionsSelect}
        </div>
        <div className="element">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            rows="5"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder={ingredients === undefined || ingredients === '' ? 'Ingredients' : ingredients}
            required
          />
        </div>
        <div className="element">
          <label htmlFor="directions">Directions</label>
          <textarea
            id="directions"
            rows="5"
            value={directions}
            onChange={(e) => setDirections(e.target.value)}
            placeholder={directions === undefined || directions === '' ? 'Directions' : directions}
            required
          />
        </div>
      </fieldset>
      {/* <TagButton
        buttonType="button"
        className="btn__back"
        type="button"
        title="Previous"
        icon="true"
        onClick={previousStep}
      /> */}
      <TagButton
        buttonType="button"
        className="btn__next"
        type="button"
        title="Next"
        icon="true"
        disabled={
          title === '' ||
          category === '' ||
          ingredients === '' ||
          directions === '' ? 'disabled' : ''
        }
        onClick={nextStep}
      />
    </>
  )
}

RecipeDetails.propTypes = {
  title: PropTypes.string,
  ingredients: PropTypes.string,
  directions: PropTypes.string,
};

export default RecipeDetails;