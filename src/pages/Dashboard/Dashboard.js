import React, { Component } from "react";
import "./Dashboard.scss";
import BMR from "../../components/BMR/BMR";
import IntakeForm from "../../components/IntakeForm/IntakeForm";
import MealCard from "../../components/MealCard/MealCard";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const SERVER_URL = "http://localhost:8080/dashboard/1";

export default class Dashboard extends Component {
  state = {
    user_id: "1",
    meals:[],
    ingredients:[],
    totalCalIntake: 0,
    bmr: 0,
    calDeficit: 0,
    mealCards: [],
  };

  componentDidMount(){
    
    axios.get(`${SERVER_URL}`)
    .then((res) =>{
      this.setState({
       mealCards: res.data.meals
      })
    })
  }

  // componentDidUpdate({

  // })


  getTotalCalorie = () => {
    const { mealName, ingredients, user_id } = this.state;
    axios
    .post(`${SERVER_URL}`, { mealName, ingredients, user_id })
    .then((res) => {
     console.log(res.data)
    })
    // //not bringing current meal
    // .get(`${SERVER_URL}`)
    //   .then((res) =>{
    //     console.log(res.data.meals)
    //     this.setState({
    //       totalCal: res.data.meals.totalCal
    //     })
    //   })
  };


  addNewIngr = (ingr) => {
    this.setState({
      ingredients: [...this.state.ingredients, ingr],
    });
  };

  addMealName = (mealName) => {
    this.setState({
      mealName,
    });
  };

  updateState = (stateField, newValue) => {
    this.setState({
      [stateField]: newValue,
    });
  };

  render() {
    return (
      <div className="dashboard">
        <BMR />
        <IntakeForm
          {...this.state}
          getTotalCalorie={this.getTotalCalorie}
          addNewIngr={this.addNewIngr}
          addMealName={this.addMealName}
          updateState={this.updateState}
        />
        <section className="mealcard__wrapper">{this.state.mealCards.map((mealCard) => (
          <MealCard key={uuidv4()} {...mealCard} />
        ))}</section>
      </div> 
    );
  }
}
