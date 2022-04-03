import React, { Component } from 'react';
import './Dashboard.scss';
import BMR from '../../components/BMR/BMR';
import IntakeForm from '../../components/IntakeForm/IntakeForm';

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <BMR />
        <IntakeForm />
      </>
    )
  }
}
