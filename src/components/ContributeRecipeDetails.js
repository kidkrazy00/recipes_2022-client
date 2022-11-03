import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TagButton from "./TagButton";

const RecipeDetails = ({ dataCategoriesFilter, previousStep, nextStep, title, setTitle, category, setCategory, ingredients, setIngredients, directions, setDirections }) => {

  const options = dataCategoriesFilter.map((optiionValue, index) => (
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
  );

  // Test form Data
  // useEffect(() => {
  //   setTitle('Basic Banana Loaf')
  //   setCategory('Bread')
  //   setIngredients("1/2 cup (125 ml) butter or margarine\n1 cup (250 ml) sugar\n2 eggs\n1-1/3 cups (335 ml) mashed bananas (about 4 medium bananas)\n1 tbs (15 ml) milk\n1 tsp (5 ml) vanilla\n2 cups (500 ml) flour\n1 tsp (5 ml) baking soda\n1/2 cup nuts, chopped (pecans are good)\n1/2 cup (125 ml) raisins or chocolate chips")
  //   setDirections("Preheat the oven 350°F (180°C)\r\n\r\nCream butter and sugar. Beat in eggs. Add bananas, milk and vanilla.\r\n\r\nMix dry ingredients.\r\n\r\nBlend flour mixture alternately with banana mixture. Add nuts and raisins.\r\n\r\nPour into a greased loaf pan and bake for 70 min\r\n\r\nCool loaf in pan for 10 min and then remove from pan.")
  //   return () => {};
  // }, []);

  return (
    <>
      <p>Now let's find out about your recipe.</p>
      <fieldset>
        <div className="element">
          <label htmlFor="title">Title:</label>
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
          <label htmlFor="title">Category:</label>
          {optionsSelect}
        </div>
        <div className="element">
          <label htmlFor="ingredients">Ingredients:</label>
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
          <label htmlFor="directions">Directions:</label>
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
  category: PropTypes.string,
  ingredients: PropTypes.string,
  directions: PropTypes.string
};

export default RecipeDetails;