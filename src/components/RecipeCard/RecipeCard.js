import React, { useState } from "react";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
import './RecipeCard.scss';

const RecipeCard = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients, calories } = recipe.recipe;
  const serving = recipe.recipe.yield;
  return (
    <div className="recipe">
      <h2 className="recipe__name">{label}</h2>
      <img src={image} alt={label} className="recipe__img" />
      <h3 className="recipe__cal">{Math.floor(parseFloat(calories))} kcal</h3>
      <p className="recipe__serving">{serving} Servings</p>
      <a href={url} target="_blank"  className="recipe__link">
        Click to see full Recipe !
      </a>
      <button onClick={() => setShow(!show)} className="recipe__btn">Ingredients</button>
      {show && <RecipeDetail ingredients={ingredients} />}
    </div>
  );
};

export default RecipeCard;