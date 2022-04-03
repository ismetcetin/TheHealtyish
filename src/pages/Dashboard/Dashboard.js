import React, { Component } from 'react';
import './Dashboard.scss';
import BMR from '../../components/BMR/BMR';
import IntakeForm from '../../components/IntakeForm/IntakeForm';
import MealCard from '../../components/MealCard/MealCard';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const SERVER_URL = process.env.REACT_APP_SERVER_URL

export default class Dashboard extends Component {
   state = {
     mealName: "",
     ingredients:[],
     totalCal: 0,
     totalCalIntake: 0,
     bmr: 0,
     calDeficit: 0, 
     mealCards:[]
   }


   onFormSubmit = () => {
     const {mealName, ingredients} = this.state
     axios.post(`${SERVER_URL}`, {mealName, ingredients})
     .then ((res) => {
       this.setState({
         totalCal: res.data.totalCal
       })
     }) 
   }

   addNewIngr = (ingr) => {
      this.setState({
        ingredients: [...this.state.ingredients, ingr]
      })
   }

   addMealName = (mealName) => {
     this.setState({
       mealName
     })
   }

   updateState = (stateField, newValue) => {
     this.setState({
        [stateField]: newValue
     })
   }

  render() {
  
    return (
      <>
        <IntakeForm {...this.state} onSubmit={this.onFormSubmit} addNewIngr={this.addNewIngr} addMealName={this.addMealName} updateState={this.updateState} />
        {this.state.mealCards.map(mealCard => <MealCard key={uuidv4()} {...mealCard} /> )}
      </>  
    )
  }
}
