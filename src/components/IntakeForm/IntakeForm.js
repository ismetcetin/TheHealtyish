import "./IntakeForm.scss";
import React, {useRef} from "react";

export default function IntakeForm({bmr, totalCal, deficit, mealName, ingredients, addMealName, addNewIngr, updateState, mealCards}) {
  const inputRef = useRef();
 
  function handleNewIngr () {
    addNewIngr(inputRef.current.value);
    inputRef.current.value = "";
  }
 
  function handleMealCard (e) {
    e.preventDefault();
    const mealCardData = {
      mealName,
      ingredients,
      totalCal
    }
    updateState("mealCards", [...mealCards, mealCardData])
    updateState("ingredients", [])
  }

  return (
    <section className="form__calorie__wrapper">
      <h2 className="form__title">Calorie Intake</h2>
      <div className="form__bmr">{bmr}</div>
      <div className="form__totalCal">{totalCal}</div>
      <div className="form__deficit">{deficit}</div>
      <form className="form__calorie" onSubmit={handleMealCard}>
        <label className="form__label">Meal</label>
        <select name="meal" className="form__meal" value={mealName} onChange={(e) => addMealName(e.target.value)}>
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
        <label className="form__label">Ingridient:</label>
        <input type="text" name="ingr" ref={inputRef} className="form__input"></input>
        <button>Create Meal Card</button>
      </form>
      <button onClick={handleNewIngr}>+</button>
      {ingredients.map(ingr => <p key={ingr}>{ingr}</p>  )}
    </section>
  );
}
