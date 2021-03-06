import React, { Component } from "react";
import "./BMR.scss";
class bmr extends Component {
  state = {
    gender: "",
    weight: "",
    age: "",
    heightFeet: "",
    heightInches: "",
    activity: "",
    bmr: 0, // stands for Basal Metabolic Rate
    dcn: 0, // stands for Daily Calorie Needs
  };

  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handleWeightChange = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleheightFeetChange = (event) => {
    this.setState({ heightFeet: event.target.value });
  };

  handleheightInchesChange = (event) => {
    this.setState({ heightInches: event.target.value });
  };

  handlegenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleactivityChange = (event) => {
    this.setState({ activity: event.target.value });
  };

  calculateBMR() {
    let age = this.state.age;
    let gender = this.state.gender;
    let heightFeet = this.state.heightFeet;
    let heightInches = this.state.heightInches;
    let weight = this.state.weight;

    if (
      age === "" ||
      gender === "" ||
      heightFeet === "" ||
      heightInches === "" ||
      weight === ""
    ) {
      this.setState({ error: "All Fields are Required" });
      return;
    }

    // BMR = 66.47 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) − ( 6.755 × age in years )
    // BMR = 66.47 + ( 6.24 × weight in pounds ) + ( 12.7 × height in inches ) − ( 6.755 × age in years )
    // BMR = 655.1 + ( 9.563 × weight in kg ) + ( 1.85 × height in cm ) − ( 4.676 × age in years )
    // BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) − ( 4.7 × age in years )

    let bmrCalc = 0;
    // Convert height to cm
    let height = heightFeet * 30.48 + heightInches * 2.54;
    let weightKG = weight * 0.453592;
    
    if (gender === "2") {
      bmrCalc = 66.47 + (13.75 * weightKG) + (5.003 * height) - (6.75 * age);
    } else {
      bmrCalc = 655.1 + (9.563 * weightKG) + (1.85 * height) - (4.676 * age);
    }

    this.props.changeBMR(Math.floor(bmrCalc));
    this.setState({ bmr: bmrCalc });
    this.setState({ error: "" });
  }

  calculateKCalories() {
    let resultDCN;
    if (this.state.activity) {
      resultDCN = parseFloat(Math.floor(this.state.bmr * this.state.activity));
    }
    this.props.changeDCN(resultDCN);
    this.setState({ dcn: resultDCN });
  }
  render() {
    let error;
    if (this.state.error) {
      error = <div className="error">{this.state.error}</div>;
    }

    let resultBMR;
    if (this.state.bmr) {
      resultBMR = (
        <div className="form__result form__result--BMR">
          BMR = {Math.floor(this.state.bmr)} Calories/day
        </div>
      );
    }

    let resultDCN;
    if (this.state.dcn) {
      resultDCN = (
        <div className="form__result form__result--DCN">
          {this.state.dcn} Calories/day
        </div>
      );
    }

    return (
      <div className="bmr__form">
        <div className="bmr__form__wrapper">
          <h2 className="bmr__form__title">
            BMR &amp; Daily Calorie Calculator
          </h2>
          {error}
          <div className="bmr__form__inputwrap form__inputwrap--gender">
            <label className="bmr__form__label">Gender</label>
            <label className="bmr__form__gender">
              <input
                type="radio"
                checked={this.state.gender === "1"}
                onChange={this.handlegenderChange}
                className="bmr__form__genderF"
                name="gender"
                value="1"
              />
              Female
            </label>
            <label className="bmr__form__gender">
              <input
                type="radio"
                checked={this.state.gender === "2"}
                onChange={this.handlegenderChange}
                className="bmr__form__genderM"
                name="gender"
                value="2"
              />
              Male
            </label>
          </div>
          <div className="bmr__form__inputwrap bmr__form__inputwrap--weight">
            <label className="bmr__form__label">Weight (in lbs)</label>
            <input
              type="number"
              value={this.state.weight}
              onChange={this.handleWeightChange}
              name="weight"
              className="bmr__form__input bmr__form__input--weight"
              min="0"
              max="999"
            />
          </div>
          <div className="bmr__form__inputwrap ">
            <label className="bmr__form__label">
              Height in feet and inches
            </label>
            <div className="bmr__form__inputwrap--height">
              <input
                type="number"
                value={this.state.heightFeet}
                onChange={this.handleheightFeetChange}
                name="heightFeet"
                className="bmr__form__input bmr__form__input--heightFeet"
                min="0"
                max="8"
              />
              <input
                type="number"
                value={this.state.heightInches}
                onChange={this.handleheightInchesChange}
                name="heightInches"
                className="bmr__form__input bmr__form__input--heightInches"
                min="0"
                max="11"
              />
            </div>
          </div>
          <div className="bmr__form__inputwrap bmr__form__inputwrap--age">
            <label className="bmr__form__label">Age in years</label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
              className="bmr__form__input bmr__form__input--age"
              name="age"
              min="0"
              max="120"
            />
          </div>
          <button
            type="button"
            onClick={() => this.calculateBMR()}
            className="bmr__form__btn bmr__form__btn--bmr"
          >
            Calculate BMR
          </button>
          {resultBMR}
          <div className="bmr__form__activity">
            <div className="bmr__form__inputwrap">
              <label className="bmr__form__label">Activity Level</label>
              <select
                className="bmr__form__activity--select"
                value={this.state.activity}
                onChange={this.handleactivityChange}
                name="activity"
              >
                <option value="">Select your Activity</option>
                <option value="1.2">
                  Sedentary (Very little or no exercise, and desk job)
                </option>
                <option value="1.375">
                  Lightly Active (Light exercise 1 to 3 days per week)
                </option>
                <option value="1.55">
                  Moderately Active (Moderate exercise 3 to 5 days per week)
                </option>
                <option value="1.725">
                  Very Active (Heavy exercise 6 to 7 days per week)
                </option>
                <option value="1.9">
                  Extremely Active (Very intense exercise, and physical job,
                  exercise multiple times per day)
                </option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => this.calculateKCalories()}
              className="bmr__form__btn bmr__form__btn--calorie"
            >
              Calculate Calories
            </button>
            <p className="bmr__form__label">
              Daily Calorie needs based on your activity level:
            </p>
            {resultDCN}
          </div>
        </div>
      </div>
    );
  }
}

export default bmr;
