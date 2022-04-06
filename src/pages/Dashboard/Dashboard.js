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
    ingredients: [],
    bmr: 2150,
    dcn: 3440,
    calIntake: 0,
    mealCards: [],
    name:"",
  };

  // [asd, asd,aasd,asd ] => 12
  setCalIntake(state) {
    const calIntake = state.mealCards.reduce((prev, current) => {
      prev += current.totalCal;
      return prev;
    }, 0);

    this.setState({ calIntake }); 
  }

  componentDidMount() {
    axios.get(`${SERVER_URL}`).then((res) => {
      this.setState({
        mealCards: res.data.meals,
        name: res.data.name
      });

      this.setCalIntake(this.state);
    });
  }


  getTotalCalorie = () => {
    const { mealName, ingredients, user_id } = this.state;
    axios
      .post(`${SERVER_URL}`, { mealName, ingredients, user_id })
      .then((res) => {
        console.log("getTotatlCalorie", res.data);
        this.setState({ mealCards: res.data[0].meals}); 
        this.setCalIntake(this.state);
      });
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

  getCalorieIntake = (sumCal) => {
    this.setState({
      calIntake : sumCal
    });
  };

  changeBMR = (newValue) => {
    this.setState({ bmr: newValue });
  };
  
  changeDCN = (newValue) => {
    this.setState({ dcn: newValue });
  };

  updateState = (stateField, newValue) => {
    this.setState({
      [stateField]: newValue,
    });
  };

  render() {
    return (
      <div className="dashboard">
        <BMR changeBMR={this.changeBMR} changeDCN={this.changeDCN}/>
        <IntakeForm
          {...this.state}
          getTotalCalorie={this.getTotalCalorie}
          addNewIngr={this.addNewIngr}
          addMealName={this.addMealName}
          updateState={this.updateState}
        />
        <section className="mealcard__wrapper">
          {this.state.mealCards.map((mealCard) => (
            <MealCard key={uuidv4()} {...mealCard} getCalorieIntake={this.getCalorieIntake}/>
          ))}
        </section>
      </div>
    );
  }
}