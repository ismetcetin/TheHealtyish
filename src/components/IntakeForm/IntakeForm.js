import "./IntakeForm.scss";
import React, { useRef } from "react";

export default function IntakeForm({
  bmr,
  dcn,
  totalCal,
  deficit,
  mealName,
  ingredients,
  addMealName,
  addNewIngr,
  updateState,
  mealCards,
  getTotalCalorie
}) {
  const inputRef = useRef();

  function handleNewIngr() {
    addNewIngr(inputRef.current.value);
    inputRef.current.value = "";
  }

  function handleMealCard(e) {
    e.preventDefault();
    const mealCardData = {
      mealName,
      ingredients,
      totalCal,
    };
    updateState("mealCards", [...mealCards, mealCardData]);
    getTotalCalorie();

    updateState("ingredients", []);
  }

  return (
    <div className="form__calorie">
      <section className="form__calorie__wrapper">
        <h2 className="form__calorie__title">Calorie Intake</h2>
        <div className="form__calorie__info">
          <div className="form__calorie__info--left">
            <div className="form__calorie__info--text form__calorie__bmr">BMR: {bmr}</div>
            <div className="form__calorie__info--text form__calorie__dcn">Daily Calorie Need: {dcn}</div>
          </div>
          <div className="form__calorie__info--right">
            <div className="form__calorie__info--text form__calorie__totalCal">
              Total Calorie Intake: {totalCal}
            </div>
            <div className="form__calorie__info--text form__calorie__deficit">
              Calorie Deficit: {deficit}
            </div>
          </div>
        </div>
        <form className="form__calorie__container" onSubmit={handleMealCard}>
          <label className="form__calorie__label">Meal</label>
          <select
            name="meal"
            className="form__calorie__meal"
            value={mealName}
            onChange={(e) => addMealName(e.target.value)}
          >
            <option type="text" value="" disabled hidden>
              Plese Select Your Meal...
            </option>
            <option type="text" value="Breakfast">
              Breakfast
            </option>
            <option type="text" value="Snack-1">
              Snack-1
            </option>
            <option type="text" value="Lunch">
              Lunch
            </option>
            <option type="text" value="Snack-2">
              Snack-2
            </option>
            <option type="text" value="Dinner">
              Dinner
            </option>
          </select>
          <label className="form__calorie__label">Ingridient:</label>
          <input
            type="text"
            name="ingr"
            ref={inputRef}
            className="form__calorie__input"
          ></input>
          <button className="form__calorie__btn">Create Meal Card</button>
        </form>
        <button onClick={handleNewIngr} className="form__calorie__btn--add">
          +
        </button>
        {ingredients.map((ingr) => (
          <p key={ingr} className="form__calorie__ing">{ingr}</p>
        ))}
      </section>
    </div>
  );
}
