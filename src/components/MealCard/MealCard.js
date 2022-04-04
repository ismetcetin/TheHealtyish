import React from "react";
import "./MealCard.scss";

export default function MealCard(props) {
  const { mealName, ingredients, totalCal } = props;
  return(
  <section className="mealcard">
    <h2 className="mealcard__title">{mealName}</h2>
    {ingredients.map(ingr => <p key={ingr}  className="mealcard__ing">{ingr}</p>  )}
    <h3 className="mealcard__subtitle">Total Calorie: {totalCal}</h3>
  </section>
  )}
