import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo-trans.png';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img className="header__img" src={logo} alt="The Healyish Logo" />
        </div>
        <div className="header__button-container">
          <NavLink
            to="/Dashboard"
            className={(isActive) =>
              "header__button" +
              " " +
              (isActive ? "header__button--active" : "")
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/recipies"
            className={(isActive) =>
              "header__button" +
              " " +
              (isActive ? "header__button--active" : "")
            }
          >
            Recipies
          </NavLink>
        </div>
      </div>
    </header>
  )
}
