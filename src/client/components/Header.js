import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/Logo.png";
import menu from "./images/menu.png";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="dropdown">
          <img
            src={menu}
            width="100px"
            height="80px"
            alt="MS-Logo"
          />

          <div className="dropdown-content">
            <ul>
            <li className="upperCase">
                <Link to="/">home</Link>
              </li>
              <li className="upperCase">
                <Link to="/about">About</Link>
              </li>
              <li className="upperCase">
                <Link to="/meals">upcoming events</Link>
              </li>
              <li className="upperCase">
                <Link to="/reservations">reservations</Link>
              </li>
              <li className="upperCase">
                <Link to="/reviews">reviews</Link>
              </li>
              <li className="upperCase">
                <Link to="/all-meals">all events</Link>
              </li>
              <li className="upperCase">
                <Link to="/searchMeal">🔎 your favorite meal</Link>
              </li>
            </ul>
          </div>
        </div>

        <h1 id="title">meal sharing </h1>

        <Link to="/">
          <img
            className="logo"
            src={logo}
            width="120px"
            height="100px"
            alt="MS-Logo"
          />
        </Link>
      </div>
      <hr className="style1" />
    </header>
  );
}
