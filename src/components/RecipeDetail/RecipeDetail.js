import React from "react";
import { v4 as uuidv4 } from "uuid";
import './RecipeDetail.scss';

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map(ingredient => {
    return (
      <ul key={uuidv4()} className="ingredient__list">
        <li className="ingredient__text">{ingredient.text}</li>
      </ul>
    );
  });
};

export default RecipeDetails;