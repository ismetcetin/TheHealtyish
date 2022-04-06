import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../assets/images/logo-trans.png';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to='/Dashboard' className="header__img--link"><img className="header__img" src={logo} alt="The Healyish Logo" /></Link>
        </div>
        <div className="header__button-container">
          <NavLink
            to="/dashboard"
            className={(isActive) =>
              "header__button" +
              " " +
              (isActive ? "header__button--active" : "")
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/recipes"
            className={(isActive) =>
              "header__button" +
              " " +
              (isActive ? "header__button--active" : "")
            }
          >
            Recipes
          </NavLink>
        </div>
      </div>
    </header>
  )
}
