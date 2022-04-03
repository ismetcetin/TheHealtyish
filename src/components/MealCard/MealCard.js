import React from "react";
import "./MealCard.scss";

export default function MealCard(props) {
  const { mealName, ingredients, totalCal } = props;
  return(
  <section className="mealcard">
    <h2>{mealName}</h2>
    {ingredients.map(ingr => <p key={ingr}>{ingr}</p>  )}
    <h3>Total Calorie: {totalCal}</h3>
  </section>
  )}
