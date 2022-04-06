import axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Alert from "../../components/Alert/Alert";
import './Recipes.scss'


export default function Recipes() {
  
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const BASE_URL = "https://api.edamam.com/api/recipes/v2?type=public&";
  const APP_ID_REC = "68e9bee2";
  const APP_KEY_REC = "d2a79615fc3321f26d34bc6651006a46";

  const url = `${BASE_URL}&q=${query}&app_id=${APP_ID_REC}&app_key=${APP_KEY_REC}`;

  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (result.data.count === 0) {
        return setAlert("No food with such name");
      }
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="recipes__page">
      <h1 className="recipes__page__title"> - Search Healtyish Recipes -</h1>
      <form onSubmit={onSubmit} className="recipes__page__searchform">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
          className="recipes__page__input"
        />
        <input type="submit" value="Search"  className="recipes__page__btn"/>
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <RecipeCard key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}


