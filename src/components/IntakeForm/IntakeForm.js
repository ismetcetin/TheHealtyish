import "./IntakeForm.scss";
import React from "react";

export default function IntakeForm({
  bmr,
  deficit,
  meal,
  ingr1,
  ingr2,
  ingr3,
  ingr4,
  ingr5,
}) {
  return (
    <section className="form__calorie__wrapper">
      <h2 className="form__title">Calorie Intake</h2>
      <div className="form__bmr">{bmr}</div>
      <div className="form__deficit">{deficit}</div>
      <form className="form__calorie">
        <label className="form__label">Meal</label>
        <select name="meal" value={meal} className="form__meal">
          <option type="text" value="breakfast">
            Breakfast
          </option>
          <option type="text" value="snackOne">
            Snack-1
          </option>
          <option type="text" value="lunch">
            Lunch
          </option>
          <option type="text" value="snackTwo">
            Snack-2
          </option>
          <option type="text" value="dinner">
            Dinner
          </option>
        </select>
        <label className="form__label">Ingridient 1:</label>
        <input type="text" name="ingr1" value={ingr1} className="form__input"></input>
        <label className="form__label">Ingridient 2:</label>
        <input type="text" name="ingr2" value={ingr2} className="form__input"></input>
        <label className="form__label">Ingridient 3:</label>
        <input type="text" name="ingr3" value={ingr3} className="form__input"></input>
        <label className="form__label">Ingridient 4:</label>
        <input type="text" name="ingr4" value={ingr4} className="form__input"></input>
        <label className="form__label">Ingridient 5:</label>
        <input type="text" name="ingr5" value={ingr5} className="form__input"></input>
      </form>
    </section>
  );
}
