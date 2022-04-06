import React from "react";
import "./MealCard.scss";

export default function MealCard(props) {
  const { name, ingredients, totalCal, calIntake } = props;

  return(
  <section className="mealcard">
    <h2 className="mealcard__title">{name}</h2>
    {ingredients.map(ingr => <p key={ingr}  className="mealcard__ing">{ingr}</p>  )}
    <h3 className="mealcard__subtitle">Total Calorie: {totalCal} </h3>
  </section>
  )}
